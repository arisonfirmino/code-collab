"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { cn } from "@/app/lib/utils";

import { Button } from "@/app/components/ui/button";
import { Textarea } from "@/app/components/ui/textarea";

import { LoaderCircleIcon, SendIcon } from "lucide-react";
import { addComment } from "@/app/acions/comment";

const schema = yup.object({
  text: yup
    .string()
    .required("Este campo é obrigatório.")
    .min(3, "Este campo precisa de pelo menos 3 caracteres."),
});

type FormData = yup.InferType<typeof schema>;

interface CommentFormProps {
  user: string;
  postId: string;
}

const CommentForm = ({ user, postId }: CommentFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const { data: session } = useSession();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    if (!session) return;

    setIsLoading(true);

    await addComment({ userId: session.user.id, postId, text: data.text });

    setIsLoading(false);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="fixed bottom-0 left-0 z-10 w-full max-w-xl space-y-2 bg-background p-5 md:left-1/2 md:-translate-x-1/2 md:transform"
    >
      <div className="flex items-center gap-5">
        <Textarea
          rows={1}
          placeholder={`Deixe um comentário para ${user}`}
          {...register("text")}
          className={cn(
            "min-h-10",
            errors.text && "border-red-600 focus-visible:ring-red-600",
          )}
        />
        <Button
          type="submit"
          size="icon"
          disabled={isLoading}
          className={cn("min-w-10")}
        >
          {isLoading ? (
            <LoaderCircleIcon className="animate-spin" />
          ) : (
            <SendIcon />
          )}
        </Button>
      </div>
    </form>
  );
};

export default CommentForm;

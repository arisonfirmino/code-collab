"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { cn } from "@/app/lib/utils";

import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Button } from "@/app/components/ui/button";

import { ArrowUpIcon, LoaderCircleIcon, MoveRightIcon } from "lucide-react";

import { createNewPost } from "@/app/acions/post";
import TopicsList from "./topics-list";

const schema = yup.object({
  projectName: yup
    .string()
    .required("Este campo é obrigatório.")
    .min(3, "Este campo precisa de pelo menos 3 caracteres."),
  description: yup
    .string()
    .required("Este campo é obrigatório.")
    .min(3, "Este campo precisa de pelo menos 3 caracteres."),
  deploy: yup
    .string()
    .required("Este campo é obrigatório.")
    .url("Por favor, insira uma url válida."),
});

type FormData = yup.InferType<typeof schema>;

const NewPostForm = () => {
  const [topics, setTopics] = useState<string[]>([]);
  const [newTopic, setNewTopic] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const { data: session } = useSession();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const addTopic = () => {
    if (newTopic === "") return;

    const formattedTopic = newTopic.replace(/[^a-zA-Z0-9]/g, "").trim();

    setTopics((prevTopics) => {
      const existingIndex = prevTopics.findIndex(
        (topic) => topic.toLowerCase() === formattedTopic.toLowerCase(),
      );

      if (existingIndex !== -1) {
        const updatedTopics = [...prevTopics];
        updatedTopics[existingIndex] = formattedTopic;
        return updatedTopics;
      }

      return [...prevTopics, formattedTopic];
    });

    setNewTopic("");
  };

  const removeTopic = (topicToRemove: string) => {
    setTopics((prevTopics) =>
      prevTopics.filter((topic) => topic !== topicToRemove),
    );
  };

  const onSubmit = async (data: FormData) => {
    if (!session) return;

    setIsLoading(true);

    await createNewPost({
      userId: session.user.id,
      projectName: data.projectName,
      description: data.description,
      deploy: data.deploy,
      topics,
    });

    setIsLoading(false);
    setTopics([]);
    setNewTopic("");
    reset();
    router.replace("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="space-y-2 px-5">
        <Input
          placeholder="Nome do projeto"
          {...register("projectName")}
          className={cn(
            errors.projectName && "border-red-600 focus-visible:ring-red-600",
          )}
        />

        {errors.projectName && (
          <p className="text-xs text-red-600">{errors.projectName.message}</p>
        )}
      </div>

      <div className="space-y-2 px-5">
        <Textarea
          placeholder="Descrição do projeto"
          {...register("description")}
          className={cn(
            errors.description && "border-red-600 focus-visible:ring-red-600",
          )}
        />

        {errors.description && (
          <p className="text-xs text-red-600">{errors.description.message}</p>
        )}
      </div>

      <div className="space-y-2 px-5">
        <Input
          placeholder="Deploy do projeto"
          {...register("deploy")}
          className={cn(
            errors.deploy && "border-red-600 focus-visible:ring-red-600",
          )}
        />

        {errors.deploy && (
          <p className="text-xs text-red-600">{errors.deploy.message}</p>
        )}
      </div>

      <p className="px-5 text-sm font-medium uppercase">Tópicos</p>

      <div className="flex items-center gap-5 px-5">
        <Input
          placeholder="Insira as tecnologias usadas no projeto"
          value={newTopic}
          onChange={(e) => setNewTopic(e.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              addTopic();
            }
          }}
        />

        <Button
          type="button"
          size="icon"
          disabled={isLoading}
          onClick={addTopic}
          className={cn("min-w-10")}
        >
          <ArrowUpIcon />
        </Button>
      </div>

      {topics.length > 0 && (
        <TopicsList topics={topics} onRemoveTopic={removeTopic} />
      )}

      <div className="px-5">
        <Button
          type="submit"
          disabled={isLoading}
          className={cn("w-full justify-between uppercase")}
        >
          {isLoading ? "Publicando" : "Publicar"}
          {isLoading ? (
            <LoaderCircleIcon className="animate-spin" />
          ) : (
            <MoveRightIcon />
          )}
        </Button>
      </div>
    </form>
  );
};

export default NewPostForm;

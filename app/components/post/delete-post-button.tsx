"use client";

import { useState } from "react";

import { cn } from "@/app/lib/utils";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Button } from "@/app/components/ui/button";

import { LoaderIcon, Trash2Icon } from "lucide-react";

import { deletePost } from "@/app/acions/post";

const DeletePostButton = ({ id }: { id: string }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);

    await deletePost({ id });

    setIsLoading(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" disabled={isLoading} className={cn("bg-red-600")}>
          {isLoading ? <LoaderIcon className="animate-spin" /> : <Trash2Icon />}
        </Button>
      </DialogTrigger>
      <DialogContent className={cn("max-w-[80%] pt-12")}>
        <DialogHeader>
          <DialogTitle>Tem certeza que deseja prosseguir?</DialogTitle>

          <DialogDescription>
            Ao confirmar, o post será excluído de forma definitiva e não poderá
            ser recuperado.
          </DialogDescription>
        </DialogHeader>

        <Button
          onClick={handleDelete}
          disabled={isLoading}
          className={cn("bg-red-600 uppercase")}
        >
          {isLoading ? "Excluindo" : "Excluir"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default DeletePostButton;

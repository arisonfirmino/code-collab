"use server";

import { db } from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";

export const addComment = async ({
  userId,
  postId,
  text,
}: {
  userId: string;
  postId: string;
  text: string;
}) => {
  if (!userId) return { error: "ID de usuário não fornecido." };

  const user = await db.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) return { error: "Usuário não localizado." };

  if (!postId) return { error: "ID do post não fornecido." };

  const post = await db.post.findUnique({
    where: {
      id: postId,
    },
  });

  if (!post) return { error: "Post não localizado." };

  if (!text) return { error: "Campos não preenchidos." };

  await db.comment.create({
    data: {
      userId,
      postId,
      text,
    },
  });

  revalidatePath("/");
};

export const deleteComment = async ({ id }: { id: string }) => {
  if (!id) return { error: "ID do comentário não fornecido." };

  const comment = await db.comment.findUnique({
    where: {
      id,
    },
  });

  if (!comment) return { error: "Comentário não encontrado." };

  await db.comment.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");
};

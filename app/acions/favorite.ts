"use server";

import { db } from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";

export const addFavorite = async ({
  userId,
  postId,
}: {
  userId: string;
  postId: string;
}) => {
  if (!userId) return { error: "ID de usuário não fornecido." };

  const user = await db.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) return { error: "Usuário não encontrado." };

  if (!postId) return { error: "ID do post não fornecido." };

  const post = await db.post.findUnique({
    where: {
      id: postId,
    },
  });

  if (!post) return { error: "Post não encontrado." };

  const isFavorite = await db.favorite.findUnique({
    where: {
      userId_postId: {
        userId,
        postId,
      },
    },
  });

  if (isFavorite) {
    await db.favorite.delete({
      where: {
        id: isFavorite.id,
      },
    });
  } else {
    await db.favorite.create({
      data: {
        userId,
        postId,
      },
    });
  }

  revalidatePath("/");
};

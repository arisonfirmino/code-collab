"use server";

import { db } from "@/app/lib/prisma";

export const isPostFavorited = async ({
  userId,
  postId,
}: {
  userId: string;
  postId: string;
}) => {
  if (!userId || !postId) return false;

  const favorite = await db.favorite.findUnique({
    where: {
      userId_postId: {
        userId,
        postId,
      },
    },
  });

  if (favorite) {
    return true;
  } else {
    return false;
  }
};

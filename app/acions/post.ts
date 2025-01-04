"use server";

import { db } from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";

interface CreateNewPostProps {
  userId: string;
  projectName: string;
  description: string;
  deploy: string;
  topics: string[];
}

export const createNewPost = async ({
  userId,
  projectName,
  description,
  deploy,
  topics,
}: CreateNewPostProps) => {
  if (!userId) return { error: "ID de usuário não fornecido." };

  const user = await db.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) return { error: "Usuário não localizado." };

  if (!projectName || !description || !deploy)
    return { error: "Campos não preenchidos." };

  await db.post.create({
    data: {
      userId,
      project_name: projectName,
      description,
      deploy,
      techs: topics,
    },
  });

  revalidatePath("/");
};

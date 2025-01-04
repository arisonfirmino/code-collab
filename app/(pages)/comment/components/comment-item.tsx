"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import { cn } from "@/app/lib/utils";

import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import { Separator } from "@/app/components/ui/separator";

import PostUser from "@/app/components/post-user";

import { Prisma } from "@prisma/client";
import DeleteCommentButton from "./delete-comment-button";

interface CommentItemProps {
  comment: Prisma.CommentGetPayload<{
    include: {
      user: true;
    };
  }>;
  postUserEmail: string;
}

const CommentItem = ({ comment, postUserEmail }: CommentItemProps) => {
  const { data: session } = useSession();

  if (!session) redirect("/");

  return (
    <Card className={cn("space-y-1.5")}>
      <CardHeader className={cn("justify-between")}>
        <PostUser user={comment.user} created_at={comment.created_at} />
        {(session.user.email === postUserEmail ||
          comment.user.email === session.user.email) && (
          <DeleteCommentButton id={comment.id} />
        )}
      </CardHeader>

      <CardContent className={cn("px-5")}>{comment.text}</CardContent>

      <div className="px-5 pt-2.5">
        <Separator />
      </div>
    </Card>
  );
};

export default CommentItem;

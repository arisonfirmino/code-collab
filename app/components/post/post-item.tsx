"use client";

import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

import { cn } from "@/app/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Separator } from "@/app/components/ui/separator";

import PostUser from "@/app/components/post-user";
import DeletePostButton from "@/app/components/post/delete-post-button";
import PostTechs from "@/app/components/post-techs";
import PostDeploy from "@/app/components/post/post-deploy";
import LikeButton from "@/app/components/post/like-button";
import CommentButton from "@/app/components/post/comment-button";
import ShareButton from "@/app/components/post/share-button";

import { Prisma } from "@prisma/client";

interface PostItemProps {
  post: Prisma.PostGetPayload<{
    include: {
      user: true;
      comments: true;
      favorites: true;
    };
  }>;
}

const PostItem = ({ post }: PostItemProps) => {
  const { data: session } = useSession();

  const pathname = usePathname();

  return (
    <Card>
      <CardHeader className={cn("justify-between")}>
        <PostUser user={post.user} created_at={post.created_at} />
        {session?.user.email === post.user.email && (
          <DeletePostButton id={post.id} />
        )}
      </CardHeader>

      <div className="px-5 py-2.5">
        <Separator />
      </div>

      <CardContent className={cn("space-y-1.5")}>
        <CardTitle className={cn("px-5")}>{post.project_name}</CardTitle>

        <CardDescription
          className={cn(
            "px-5",
            pathname === `/comment/${post.id}` ? "" : "line-clamp-2",
          )}
        >
          {post.description}
        </CardDescription>

        {post.techs.length > 0 && <PostTechs topics={post.techs} />}

        <PostDeploy deploy={post.deploy} />
      </CardContent>

      <CardFooter className={cn("justify-between px-5 pt-1.5")}>
        <div className="flex items-center gap-5">
          <LikeButton postId={post.id} favorites={post.favorites.length} />
          <CommentButton id={post.id} comments={post.comments.length} />
        </div>

        <ShareButton />
      </CardFooter>

      <div className="px-5 pt-2.5">
        <Separator />
      </div>
    </Card>
  );
};

export default PostItem;

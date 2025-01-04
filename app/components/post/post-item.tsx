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

import PostUser from "@/app/components/post/post-user";
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
    };
  }>;
}

const PostItem = ({ post }: PostItemProps) => {
  return (
    <Card>
      <CardHeader className={cn("justify-between")}>
        <PostUser user={post.user} created_at={post.created_at} />
        <DeletePostButton />
      </CardHeader>

      <div className="px-5 py-2.5">
        <Separator />
      </div>

      <CardContent className={cn("space-y-1.5")}>
        <CardTitle className={cn("px-5")}>{post.project_name}</CardTitle>

        <CardDescription className={cn("line-clamp-2 px-5")}>
          {post.description}
        </CardDescription>

        <PostTechs topics={post.techs} />

        <PostDeploy deploy={post.deploy} />
      </CardContent>

      <CardFooter className={cn("justify-between px-5 pt-1.5")}>
        <div className="flex items-center gap-5">
          <LikeButton />
          <CommentButton id="123" />
        </div>

        <ShareButton />
      </CardFooter>

      <div className="px-5 py-2.5">
        <Separator />
      </div>
    </Card>
  );
};

export default PostItem;

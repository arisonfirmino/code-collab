import { cn } from "@/app/lib/utils";

import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import { Separator } from "@/app/components/ui/separator";

import PostUser from "@/app/components/post-user";

import { Prisma } from "@prisma/client";

interface CommentItemProps {
  comment: Prisma.CommentGetPayload<{
    include: {
      user: true;
    };
  }>;
}

const CommentItem = ({ comment }: CommentItemProps) => {
  return (
    <Card className={cn("space-y-1.5")}>
      <CardHeader>
        <PostUser user={comment.user} created_at={comment.created_at} />
      </CardHeader>

      <CardContent className={cn("px-5")}>{comment.text}</CardContent>

      <div className="px-5 pt-2.5">
        <Separator />
      </div>
    </Card>
  );
};

export default CommentItem;

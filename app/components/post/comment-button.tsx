"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import { MessageCircleMoreIcon } from "lucide-react";

const CommentButton = ({ id, comments }: { id: string; comments: number }) => {
  const pathname = usePathname();

  return pathname === `/comment/${id}` ? (
    <span className="flex items-center gap-1.5">
      <MessageCircleMoreIcon size={16} className="text-muted-foreground" />
      {comments}
    </span>
  ) : (
    <Link href={`/comment/${id}`} className="flex items-center gap-1.5">
      <MessageCircleMoreIcon size={16} className="text-muted-foreground" />
      {comments}
    </Link>
  );
};

export default CommentButton;

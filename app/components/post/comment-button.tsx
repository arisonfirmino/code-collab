"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import { MessageCircleMoreIcon } from "lucide-react";

const CommentButton = ({ id }: { id: string }) => {
  const pathname = usePathname();

  return pathname === `/comment/${id}` ? (
    <span className="flex items-center gap-1.5">
      <MessageCircleMoreIcon size={16} className="text-muted-foreground" /> 8
    </span>
  ) : (
    <Link href={`/comment/${id}`} className="flex items-center gap-1.5">
      <MessageCircleMoreIcon size={16} className="text-muted-foreground" /> 8
    </Link>
  );
};

export default CommentButton;

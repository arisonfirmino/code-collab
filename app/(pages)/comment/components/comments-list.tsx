import CommentItem from "@/app/(pages)/comment/components/comment-item";

import { Prisma } from "@prisma/client";

interface CommentsList {
  comments: Prisma.CommentGetPayload<{
    include: {
      user: true;
    };
  }>[];
}

const CommentsList = ({ comments }: CommentsList) => {
  return (
    <ul className="space-y-5">
      {comments.map((comment) => (
        <li key={comment.id}>
          <CommentItem comment={comment} />
        </li>
      ))}
    </ul>
  );
};

export default CommentsList;

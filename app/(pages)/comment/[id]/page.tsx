import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { db } from "@/app/lib/prisma";
import { redirect } from "next/navigation";

import BackButton from "@/app/components/back-button";
import PostItem from "@/app/components/post/post-item";
import CommentsList from "@/app/(pages)/comment/components/comments-list";
import CommentForm from "@/app/(pages)/comment/components/comment-form";

const CommentPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const session = await getServerSession(authOptions);

  const resolvedParams = await params;

  const post = await db.post.findUnique({
    where: {
      id: resolvedParams.id,
    },
    include: {
      user: true,
      comments: {
        include: {
          user: true,
        },
      },
    },
  });

  if (!post) redirect("/");

  return (
    <main className={`space-y-5 ${session ? "pb-24" : "pb-5"}`}>
      <div className="px-5 pt-5">
        <BackButton />
      </div>

      <div className="flex items-center gap-5 px-5">
        <p className="text-nowrap text-xs font-medium uppercase text-muted">
          Publicação de {post.user.name}
        </p>
        <hr className="w-full border" />
      </div>

      <PostItem post={post} />

      <div className="flex items-center gap-5 px-5">
        <p className="text-nowrap text-xs font-medium uppercase text-muted">
          Comentários
        </p>
        <hr className="w-full border" />
      </div>

      <CommentsList comments={post.comments} />

      {session && <CommentForm user={post.user.name ?? ""} postId={post.id} />}
    </main>
  );
};

export default CommentPage;

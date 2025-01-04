import PostItem from "@/app/components/post/post-item";

import { Prisma } from "@prisma/client";

interface Postslist {
  posts: Prisma.PostGetPayload<{
    include: {
      user: true;
      comments: true;
    };
  }>[];
}

const PostsList = ({ posts }: Postslist) => {
  return (
    <ul className="space-y-5">
      {posts.map((post) => (
        <li key={post.id}>
          <PostItem post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostsList;

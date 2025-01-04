import { db } from "@/app/lib/prisma";

import App from "@/app/components/app";

const Home = async () => {
  const posts = await db.post.findMany({
    orderBy: {
      created_at: "desc",
    },
    include: {
      user: true,
      comments: true,
    },
  });

  return <App posts={posts} />;
};

export default Home;

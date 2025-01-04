"use client";

import { useState } from "react";

import Header from "@/app/components/header/header";
import PostsList from "@/app/components/post/posts-list";

import { Prisma } from "@prisma/client";

interface AppProps {
  posts: Prisma.PostGetPayload<{
    include: {
      user: true;
      comments: true;
    };
  }>[];
}

const App = ({ posts }: AppProps) => {
  const [search, setSearch] = useState("");

  const searchedPosts = posts.filter((post) =>
    post.project_name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <div className="px-5 pt-5">
        <Header search={search} onSearch={setSearch} />
      </div>

      <div className="flex items-center gap-5 p-5">
        <p className="text-xs font-medium uppercase">Publicações</p>
        <hr className="w-full border" />
      </div>

      <PostsList posts={searchedPosts} />
    </>
  );
};

export default App;

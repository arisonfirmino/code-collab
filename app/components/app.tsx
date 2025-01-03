import Header from "@/app/components/header/header";
import PostsList from "@/app/components/post/posts-list";

const App = () => {
  return (
    <>
      <div className="px-5 pt-5">
        <Header />
      </div>

      <div className="flex items-center gap-5 p-5">
        <p className="text-xs font-medium uppercase">Publicações</p>
        <hr className="w-full border" />
      </div>

      <PostsList />
    </>
  );
};

export default App;

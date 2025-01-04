import BackButton from "@/app/components/back-button";
import NewPostForm from "@/app/(pages)/new-post/components/new-post-form";

const NewPostPage = () => {
  return (
    <main className="space-y-5">
      <div className="px-5 pt-5">
        <BackButton />
      </div>

      <div className="px-5">
        <p className="text-sm text-muted-foreground">
          Compartilhe seu projeto preenchendo o formulário abaixo.
        </p>
      </div>

      <NewPostForm />
    </main>
  );
};

export default NewPostPage;

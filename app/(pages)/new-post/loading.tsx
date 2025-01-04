import { Skeleton } from "@/app/components/ui/skeleton";

const LoadingNewPostPage = () => {
  return (
    <div className="space-y-5">
      <div className="px-5 pt-5">
        <Skeleton className="h-10 w-10 rounded-full" />
      </div>

      <div className="px-5">
        <Skeleton className="h-4 w-full rounded-full" />
      </div>

      <div className="px-5">
        <Skeleton className="h-10 w-full" />
      </div>

      <div className="px-5">
        <Skeleton className="h-20 w-full" />
      </div>

      <div className="px-5">
        <Skeleton className="h-10 w-full" />
      </div>

      <div className="px-5">
        <Skeleton className="h-4 w-20" />
      </div>

      <div className="flex gap-5 px-5">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 min-w-10" />
      </div>

      <div className="px-5">
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
};

export default LoadingNewPostPage;

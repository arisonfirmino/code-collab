import { Skeleton } from "@/app/components/ui/skeleton";

const LoadingCommentPage = () => {
  return (
    <div className="space-y-5 p-5">
      <Skeleton className="h-10 w-10 rounded-full" />

      <div className="flex items-center gap-5">
        <Skeleton className="h-4 min-w-[157px] rounded-full" />
        <Skeleton className="h-[1px] w-full rounded-full" />
      </div>

      <div id="post">
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-full" />

          <div className="flex h-10 flex-col justify-between">
            <Skeleton className="h-3.5 min-w-[157px] rounded-full" />
            <Skeleton className="h-3.5 min-w-[70px] rounded-full" />
          </div>
        </div>

        <div className="py-2.5">
          <Skeleton className="h-[1px] w-full rounded-full" />
        </div>

        <div className="space-y-1.5">
          <Skeleton className="h-4 w-24 rounded-full" />

          <div className="space-y-1">
            <Skeleton className="h-3.5 w-full rounded-full" />
            <Skeleton className="h-3.5 w-full rounded-full" />
            <Skeleton className="h-3.5 w-full rounded-full" />
          </div>

          <div className="flex gap-2.5">
            <Skeleton className="h-5 w-16 rounded-full" />
            <Skeleton className="h-5 w-16 rounded-full" />
            <Skeleton className="h-5 w-16 rounded-full" />
            <Skeleton className="h-5 w-16 rounded-full" />
          </div>

          <Skeleton className="h-3.5 w-[60%] rounded-full" />

          <div className="flex justify-between">
            <div className="flex gap-5">
              <Skeleton className="h-5 w-10 rounded-full" />
              <Skeleton className="h-5 w-10 rounded-full" />
            </div>
            <Skeleton className="h-5 w-10 rounded-full" />
          </div>
        </div>

        <div className="pt-2.5">
          <Skeleton className="h-[1px] w-full rounded-full" />
        </div>
      </div>

      <div className="flex items-center gap-5">
        <Skeleton className="h-4 min-w-[157px] rounded-full" />
        <Skeleton className="h-[1px] w-full rounded-full" />
      </div>

      <div id="comment" className="space-y-2.5">
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-full" />

          <div className="flex h-10 flex-col justify-between">
            <Skeleton className="h-3.5 min-w-[157px] rounded-full" />
            <Skeleton className="h-3.5 min-w-[70px] rounded-full" />
          </div>
        </div>

        <div className="space-y-1">
          <Skeleton className="h-3.5 w-full rounded-full" />
          <Skeleton className="h-3.5 w-full rounded-full" />
        </div>

        <Skeleton className="h-[1px] w-full rounded-full" />
      </div>

      <div id="comment" className="space-y-2.5">
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-full" />

          <div className="flex h-10 flex-col justify-between">
            <Skeleton className="h-3.5 min-w-[157px] rounded-full" />
            <Skeleton className="h-3.5 min-w-[70px] rounded-full" />
          </div>
        </div>

        <div className="space-y-1">
          <Skeleton className="h-3.5 w-full rounded-full" />
          <Skeleton className="h-3.5 w-full rounded-full" />
        </div>

        <Skeleton className="h-[1px] w-full rounded-full" />
      </div>

      <div id="comment" className="space-y-2.5">
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-full" />

          <div className="flex h-10 flex-col justify-between">
            <Skeleton className="h-3.5 min-w-[157px] rounded-full" />
            <Skeleton className="h-3.5 min-w-[70px] rounded-full" />
          </div>
        </div>

        <div className="space-y-1">
          <Skeleton className="h-3.5 w-full rounded-full" />
          <Skeleton className="h-3.5 w-full rounded-full" />
        </div>

        <Skeleton className="h-[1px] w-full rounded-full" />
      </div>
    </div>
  );
};

export default LoadingCommentPage;

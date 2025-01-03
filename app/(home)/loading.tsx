import { Skeleton } from "@/app/components/ui/skeleton";

const LoadingHomePage = () => {
  return (
    <>
      <div className="flex items-center gap-5 px-5 pt-5">
        <Skeleton className="h-10 min-w-10 rounded-full" />

        <Skeleton className="h-10 w-full rounded-full" />

        <Skeleton className="h-10 min-w-10 rounded-full" />
      </div>

      <div className="flex items-center gap-5 px-5 pt-5">
        <Skeleton className="h-4 min-w-[83px]" />
        <Skeleton className="h-[1px] w-full" />
      </div>

      <div className="px-5 pt-5">
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 min-w-10 rounded-full" />
          <div className="flex h-10 flex-col justify-between">
            <Skeleton className="h-4 w-28 rounded-full" />
            <Skeleton className="h-4 w-[73px] rounded-full" />
          </div>
        </div>

        <div className="py-2.5">
          <Skeleton className="h-[1px] w-full" />
        </div>

        <div className="space-y-1.5">
          <Skeleton className="h-4 w-[130px] rounded-full" />
          <div className="flex flex-col gap-1">
            <Skeleton className="h-4 w-full rounded-full" />
            <Skeleton className="h-4 w-full rounded-full" />
          </div>

          <div className="flex items-center gap-2.5">
            <Skeleton className="h-5 w-20 rounded-full" />
            <Skeleton className="h-5 w-20 rounded-full" />
            <Skeleton className="h-5 w-20 rounded-full" />
          </div>

          <Skeleton className="h-4 w-[60%] rounded-full" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <Skeleton className="h-5 w-10 rounded-full" />
              <Skeleton className="h-5 w-10 rounded-full" />
            </div>

            <Skeleton className="h-5 w-10 rounded-full" />
          </div>
        </div>

        <div className="py-2.5">
          <Skeleton className="h-[1px] w-full" />
        </div>
      </div>

      <div className="px-5 pt-5">
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 min-w-10 rounded-full" />
          <div className="flex h-10 flex-col justify-between">
            <Skeleton className="h-4 w-28 rounded-full" />
            <Skeleton className="h-4 w-[73px] rounded-full" />
          </div>
        </div>

        <div className="py-2.5">
          <Skeleton className="h-[1px] w-full" />
        </div>

        <div className="space-y-1.5">
          <Skeleton className="h-4 w-[130px] rounded-full" />
          <div className="flex flex-col gap-1">
            <Skeleton className="h-4 w-full rounded-full" />
            <Skeleton className="h-4 w-full rounded-full" />
          </div>

          <div className="flex items-center gap-2.5">
            <Skeleton className="h-5 w-20 rounded-full" />
            <Skeleton className="h-5 w-20 rounded-full" />
            <Skeleton className="h-5 w-20 rounded-full" />
          </div>

          <Skeleton className="h-4 w-[60%] rounded-full" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <Skeleton className="h-5 w-10 rounded-full" />
              <Skeleton className="h-5 w-10 rounded-full" />
            </div>

            <Skeleton className="h-5 w-10 rounded-full" />
          </div>
        </div>

        <div className="py-2.5">
          <Skeleton className="h-[1px] w-full" />
        </div>
      </div>
      <div className="px-5 pt-5">
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 min-w-10 rounded-full" />
          <div className="flex h-10 flex-col justify-between">
            <Skeleton className="h-4 w-28 rounded-full" />
            <Skeleton className="h-4 w-[73px] rounded-full" />
          </div>
        </div>

        <div className="py-2.5">
          <Skeleton className="h-[1px] w-full" />
        </div>

        <div className="space-y-1.5">
          <Skeleton className="h-4 w-[130px] rounded-full" />
          <div className="flex flex-col gap-1">
            <Skeleton className="h-4 w-full rounded-full" />
            <Skeleton className="h-4 w-full rounded-full" />
          </div>

          <div className="flex items-center gap-2.5">
            <Skeleton className="h-5 w-20 rounded-full" />
            <Skeleton className="h-5 w-20 rounded-full" />
            <Skeleton className="h-5 w-20 rounded-full" />
          </div>

          <Skeleton className="h-4 w-[60%] rounded-full" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <Skeleton className="h-5 w-10 rounded-full" />
              <Skeleton className="h-5 w-10 rounded-full" />
            </div>

            <Skeleton className="h-5 w-10 rounded-full" />
          </div>
        </div>

        <div className="py-2.5">
          <Skeleton className="h-[1px] w-full" />
        </div>
      </div>
    </>
  );
};

export default LoadingHomePage;

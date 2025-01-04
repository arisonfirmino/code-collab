import { cn } from "@/app/lib/utils";

import { Badge } from "@/app/components/ui/badge";

const PostTechs = ({ topics }: { topics: string[] }) => {
  return (
    <ul className="flex items-center gap-2.5 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {topics.map((topic) => (
        <li key={topic}>
          <Badge className={cn("text-nowrap lowercase")}>{topic}</Badge>
        </li>
      ))}
    </ul>
  );
};

export default PostTechs;

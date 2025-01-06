import { cn } from "@/app/lib/utils";

import { Badge } from "@/app/components/ui/badge";

const PostTopics = ({ topics }: { topics: string[] }) => {
  const sortedTopics = topics.sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase()),
  );

  return (
    <ul className="flex items-center gap-2.5 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {sortedTopics.map((topic) => (
        <li key={topic}>
          <Badge className={cn("text-nowrap lowercase")}>{topic}</Badge>
        </li>
      ))}
    </ul>
  );
};

export default PostTopics;

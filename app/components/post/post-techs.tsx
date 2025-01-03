import { cn } from "@/app/lib/utils";

import { Badge } from "@/app/components/ui/badge";

const PostTechs = () => {
  return (
    <ul className="flex items-center gap-2.5 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      <li>
        <Badge className={cn("lowercase")}>TypeScript</Badge>
      </li>
    </ul>
  );
};

export default PostTechs;

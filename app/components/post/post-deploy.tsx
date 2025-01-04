import { cn } from "@/app/lib/utils";

import { Button } from "@/app/components/ui/button";

import { SquareArrowOutUpRightIcon } from "lucide-react";

import { formatUrl } from "@/app/helpers/formatUrl";

const PostDeploy = ({ deploy }: { deploy: string }) => {
  return (
    <Button size="link" variant="link" asChild className={cn("px-5")}>
      <a href={deploy} target="_blank" rel="noopener noreferrer">
        <SquareArrowOutUpRightIcon size={14} />
        {formatUrl(deploy)}
      </a>
    </Button>
  );
};

export default PostDeploy;

import { cn } from "@/app/lib/utils";

import { Button } from "@/app/components/ui/button";

import { SquareArrowOutUpRightIcon } from "lucide-react";

const PostDeploy = () => {
  return (
    <Button size="link" variant="link" asChild className={cn("px-5")}>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <SquareArrowOutUpRightIcon size={14} />
        lorem-ipsum.vercel.app
      </a>
    </Button>
  );
};

export default PostDeploy;

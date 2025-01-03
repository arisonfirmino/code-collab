import { cn } from "@/app/lib/utils";

import { Button } from "@/app/components/ui/button";

import { Trash2Icon } from "lucide-react";

const DeletePostButton = () => {
  return (
    <Button size="icon" className={cn("bg-red-600")}>
      <Trash2Icon />
    </Button>
  );
};

export default DeletePostButton;

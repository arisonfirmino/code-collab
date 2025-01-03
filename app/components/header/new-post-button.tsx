import { cn } from "@/app/lib/utils";

import { Button } from "@/app/components/ui/button";

import Link from "next/link";

import { PlusIcon } from "lucide-react";

const NewPostButton = () => {
  return (
    <Button size="icon" asChild className={cn("min-w-10 rounded-full")}>
      <Link href="/new-post">
        <PlusIcon />
      </Link>
    </Button>
  );
};

export default NewPostButton;

import Link from "next/link";

import { cn } from "@/app/lib/utils";

import { Button } from "@/app/components/ui/button";

import { ChevronLeftIcon } from "lucide-react";

const BackButton = () => {
  return (
    <Button size="icon" asChild className={cn("rounded-full")}>
      <Link href="/">
        <ChevronLeftIcon />
      </Link>
    </Button>
  );
};

export default BackButton;

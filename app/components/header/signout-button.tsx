import { cn } from "@/app/lib/utils";

import { Button } from "@/app/components/ui/button";

import { LogOutIcon } from "lucide-react";

const SignOutButton = () => {
  return (
    <Button
      className={cn(
        "absolute bottom-5 w-full justify-between bg-red-600 uppercase",
      )}
    >
      Sair
      <LogOutIcon />
    </Button>
  );
};

export default SignOutButton;

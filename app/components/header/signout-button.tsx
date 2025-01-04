"use client";

import { signOut } from "next-auth/react";

import { cn } from "@/app/lib/utils";

import { Button } from "@/app/components/ui/button";

import { LogOutIcon } from "lucide-react";

const SignOutButton = () => {
  return (
    <Button
      onClick={async () => signOut()}
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

"use client";

import { useSession } from "next-auth/react";

import { cn } from "@/app/lib/utils";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import { Button } from "@/app/components/ui/button";

import LoginSession from "@/app/components/header/auth/login-session";
import LateralMenu from "@/app/components/header/lateral-menu";
import Search from "@/app/components/header/search";
import NewPostButton from "@/app/components/header/new-post-button";

import { UserIcon } from "lucide-react";

interface HeaderProps {
  posts: number;
  search: string;
  onSearch: (value: string) => void;
}

const Header = ({ posts, search, onSearch }: HeaderProps) => {
  const { data: session } = useSession();

  return (
    <header className="flex items-center gap-5">
      <Sheet>
        <SheetTrigger asChild>
          {session ? (
            <Avatar>
              <AvatarImage
                src={
                  session.user.image === "" ? "/logo.png" : session.user.image
                }
              />
              <AvatarFallback>{session.user.name}</AvatarFallback>
            </Avatar>
          ) : (
            <Button
              size="icon"
              className={cn("min-w-10 rounded-full bg-secondary-foreground")}
            >
              <UserIcon />
            </Button>
          )}
        </SheetTrigger>
        <SheetContent>
          <VisuallyHidden>
            <SheetTitle>Lateral Menu</SheetTitle>
            <SheetDescription>Lateral Menu</SheetDescription>
          </VisuallyHidden>

          {session ? <LateralMenu posts={posts} /> : <LoginSession />}
        </SheetContent>
      </Sheet>

      <Search search={search} onSearch={onSearch} />

      <NewPostButton />
    </header>
  );
};

export default Header;

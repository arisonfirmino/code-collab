import { cn } from "@/app/lib/utils";

import { Separator } from "@/app/components/ui/separator";
import { Button } from "@/app/components/ui/button";

import UserInfo from "@/app/components/header/user-info";
import Count from "@/app/components/header/count";
import SignOutButton from "@/app/components/header/signout-button";

import Link from "next/link";

const LateralMenu = ({ posts }: { posts: number }) => {
  return (
    <div className="relative h-full space-y-5">
      <UserInfo />

      <Separator />

      <div className="space-y-1.5 text-sm">
        <Count type="posts">{posts}</Count>

        <Count type="stars">{18}</Count>

        <Count type="comments">{7}</Count>
      </div>

      <Separator />

      <div className="space-y-2.5">
        <Button asChild className={cn("w-full uppercase")}>
          <Link href="/new-post">Nova publicação</Link>
        </Button>

        <Button variant="outline" className={cn("w-full uppercase")}>
          Publicações curtidas
        </Button>

        <Button variant="outline" className={cn("w-full uppercase")}>
          Excluir publicações
        </Button>
      </div>

      <SignOutButton />
    </div>
  );
};

export default LateralMenu;

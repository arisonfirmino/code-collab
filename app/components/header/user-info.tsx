"use client";

import { useSession } from "next-auth/react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";

const UserInfo = () => {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarImage
          src={session.user.image === "" ? "/logo.png" : session.user.image}
        />
        <AvatarFallback>{session.user.name}</AvatarFallback>
      </Avatar>

      <div className="text-start">
        <p className="font-medium">{session.user.name}</p>
        <p className="text-xs text-secondary-foreground">
          {session.user.email}
        </p>
      </div>
    </div>
  );
};

export default UserInfo;

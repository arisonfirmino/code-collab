import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";

import { formatDate } from "@/app/helpers/formatDate";

import { User } from "@prisma/client";

interface PostUserProps {
  user: User;
  created_at: Date;
}

const PostUser = ({ user, created_at }: PostUserProps) => {
  return (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarImage src={user.image ?? ""} />
        <AvatarFallback>{user.name}</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-medium">{user.name}</p>
        <p className="text-xs text-muted-foreground">
          {formatDate(created_at)}
        </p>
      </div>
    </div>
  );
};

export default PostUser;

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";

const UserInfo = () => {
  return (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className="text-start">
        <p className="font-medium">Jhon Doe</p>
        <p className="text-secondary-foreground text-xs">jhondoe@gmail.com</p>
      </div>
    </div>
  );
};

export default UserInfo;

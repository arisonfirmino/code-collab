import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";

const PostUser = () => {
  return (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-medium">Jhon Doe</p>
        <p className="text-xs text-muted-foreground">3 jan, 2025</p>
      </div>
    </div>
  );
};

export default PostUser;

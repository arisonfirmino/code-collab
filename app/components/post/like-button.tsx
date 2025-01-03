import { StarIcon } from "lucide-react";

const LikeButton = () => {
  return (
    <button className="flex items-center gap-1.5">
      <StarIcon size={16} className="text-muted-foreground" />
      18
    </button>
  );
};

export default LikeButton;

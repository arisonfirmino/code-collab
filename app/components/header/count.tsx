import { BookMarkedIcon, MessageCircleMoreIcon, StarIcon } from "lucide-react";

interface CountProps {
  children: number;
  type: "posts" | "stars" | "comments";
}

const Count = ({ children, type }: CountProps) => {
  return (
    <div className="flex items-center gap-2 text-sm">
      {type === "posts" && (
        <BookMarkedIcon size={16} className="text-primary" />
      )}
      {type === "stars" && (
        <StarIcon size={16} className="fill-yellow-400 text-yellow-400" />
      )}
      {type === "comments" && (
        <MessageCircleMoreIcon size={16} className="text-foreground" />
      )}

      <p className="lowercase">
        {children}{" "}
        {type === "posts" && children < 2 ? "Publicação" : "Publicações"}{" "}
        {type === "stars" && "Estrelas"} {type === "comments" && "Comentários"}
      </p>
    </div>
  );
};

export default Count;

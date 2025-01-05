"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import { LoaderCircleIcon, StarIcon } from "lucide-react";

import { isPostFavorited } from "@/app/helpers/isPostFavorited";

import { addFavorite } from "@/app/acions/favorite";

interface FavoriteButtonProps {
  postId: string;
  favorites: number;
}

const FavoriteButton = ({ postId, favorites }: FavoriteButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  const { data: session } = useSession();

  useEffect(() => {
    const fetchFavoriteStatus = async () => {
      if (!session) return;
      const isFavorite = await isPostFavorited({
        userId: session.user.id,
        postId,
      });

      setIsFavorited(isFavorite);
    };

    fetchFavoriteStatus();
  }, [postId, session]);

  const toggleFavorite = async () => {
    if (!session) return;

    setIsLoading(true);

    await addFavorite({ userId: session.user.id, postId });

    setIsLoading(false);
    setIsFavorited(!isFavorited);
  };

  return (
    <button onClick={toggleFavorite} className="flex items-center gap-1.5">
      {isLoading ? (
        <LoaderCircleIcon
          size={16}
          className="animate-spin text-muted-foreground"
        />
      ) : (
        <StarIcon
          size={16}
          className={
            isFavorited
              ? "fill-yellow-400 text-yellow-400"
              : "text-muted-foreground"
          }
        />
      )}
      {favorites}
    </button>
  );
};

export default FavoriteButton;

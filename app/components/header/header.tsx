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
import LateralMenu from "@/app/components/header/lateral-menu";
import Search from "@/app/components/header/search";
import NewPostButton from "@/app/components/header/new-post-button";

const Header = () => {
  return (
    <header className="flex items-center gap-5">
      <Sheet>
        <SheetTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </SheetTrigger>
        <SheetContent>
          <VisuallyHidden>
            <SheetTitle>Lateral Menu</SheetTitle>
            <SheetDescription>Lateral Menu</SheetDescription>
          </VisuallyHidden>

          <LateralMenu />
        </SheetContent>
      </Sheet>

      <Search />

      <NewPostButton />
    </header>
  );
};

export default Header;

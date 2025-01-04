import { cn } from "@/app/lib/utils";

import { Input } from "@/app/components/ui/input";

import { SearchIcon } from "lucide-react";

interface SearchProps {
  search: string;
  onSearch: (value: string) => void;
}

const Search = ({ search, onSearch }: SearchProps) => {
  return (
    <form className="w-full" onSubmit={(event) => event.preventDefault()}>
      <div className="group relative flex items-center justify-center">
        <label
          htmlFor="search"
          className="absolute flex items-center gap-2 text-sm text-muted-foreground transition-opacity group-focus-within:opacity-0"
        >
          <SearchIcon size={16} />
          Buscar
        </label>
        <Input
          id="search"
          type="search"
          value={search}
          onChange={(event) => onSearch(event.target.value)}
          className={cn("rounded-full bg-white bg-opacity-10")}
        />
      </div>
    </form>
  );
};

export default Search;

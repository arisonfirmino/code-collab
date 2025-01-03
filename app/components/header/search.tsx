import { cn } from "@/app/lib/utils";

import { Input } from "@/app/components/ui/input";

const Search = () => {
  return (
    <form className="w-full">
      <Input
        type="search"
        placeholder="Buscar"
        className={cn("rounded-full bg-white bg-opacity-10")}
      />
    </form>
  );
};

export default Search;

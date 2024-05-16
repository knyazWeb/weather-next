"use client";

import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function CustomInputSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [searchValue, setSearchValue] = useState(searchParams.get("q")?.toString());

  const handleSearch = useDebouncedCallback((value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 200);

  return (
    <div className="relative">
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleSearch(searchValue);
            e.currentTarget.blur()
          }
        }}
        value={searchValue}
        type="text"
        placeholder="City"
        className="w-80 bg-transparent border border-white text-white p-2 outline-none rounded-md"
      />
      <Search
        onClick={() => handleSearch(searchValue)}
        color="white"
        size={25}
        className="absolute h-full top-1/2 -translate-y-1/2 right-2 cursor-pointer hover:stroke-[#E3D3C7] transition-colors duration-200 ease-in-out"
      />
    </div>
  );
}

"use client";

import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

export default function CustomInputSearch() {
  const searchParams = useSearchParams();
  const { push } = useRouter();
  const [searchValue, setSearchValue] = useState(searchParams.get("q")?.toString() || '');

  const handleSearch = useCallback((value: string | undefined) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }
    push(`${'/'}?${params.toString()}`);
  }, [])

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

"use client";

import React, { useState } from "react";
import { Input } from "@/components/common/Input";
import { cn } from "@/modules/lib/utils/utils";

interface SearchProps extends React.HTMLAttributes<HTMLFormElement> {
  onSearch?: (value: string) => void;
}

const SearchBar = React.forwardRef<HTMLFormElement, SearchProps>(
  ({ className, onSearch, ...props }, ref) => {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [history, setHistory] = useState<string[]>([]);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!search.trim()) return;

      setLoading(true);
      onSearch?.(search);
      setHistory((prev) => [...new Set([...prev, search])]);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };

    const handleClear = () => setSearch("");

    return (
      <form
        ref={ref}
        onSubmit={handleSubmit}
        className={cn("w-full md:w-64 md:ml-auto", className)}
        {...props}
      >
        <div className="relative">
          <Input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-12 h-10 border-input bg-transparent"
            placeholder="Ara..."
            list="search-history"
          />

          {search && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-10 top-2.5 text-muted-foreground hover:text-foreground text-sm"
            >
              <span className="material-icons">x</span>
            </button>
          )}

          <datalist id="search-history">
            {history.map((item, index) => (
              <option key={index} value={item} />
            ))}
          </datalist>
        </div>
      </form>
    );
  }
);

export default SearchBar;

import { useState, useMemo } from "react";
import { useDebounce } from "./useDebounce";

export const useFilter = <T extends Record<string, unknown>>(
  items: T[],
  searchKey: keyof T,
  delay: number = 300
) => {
  const [filterText, setFilterText] = useState("");
  const debouncedFilterText = useDebounce(filterText, delay);

  const filteredItems = useMemo(() => {
    if (!debouncedFilterText.trim()) return items;

    return items.filter((item) =>
      String(item[searchKey])
        .toLowerCase()
        .includes(debouncedFilterText.toLowerCase())
    );
  }, [items, debouncedFilterText, searchKey]);

  return { filterText, setFilterText, filteredItems };
};

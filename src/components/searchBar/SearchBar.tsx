import { useAppDispatch } from "@redux/hook/storeHook";
import { ChangeEvent, useEffect, useState } from "react";

//redux
import { getByName } from "@redux/Slicers/paginationReducer";

export default function SearchBar() {
  const [query, setQuery] = useState<string>("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getByName(query));
  }, [query, dispatch]);

  return (
    <>
      <input
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setQuery(e.target.value);
        }}
        value={query}
        className="search"
        type="text"
        placeholder="Hae"
      />
    </>
  );
}

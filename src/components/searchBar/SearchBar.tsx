import { useAppDispatch } from "client/src/redux/hook/storeHook";
import { ChangeEvent, useEffect, useState } from "react";
import { search } from "../../redux/Slicers/searchSlicer";

export default function SearchBar() {
  const [query, setQuery] = useState<string>("");
  const dispatch = useAppDispatch();
  console.log(query);

  useEffect(() => {
    dispatch(search(query));
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

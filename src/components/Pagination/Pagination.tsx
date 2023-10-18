import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hook/storeHook";

import { generatePageNumbers } from "../../redux/Slicers/paginationReducer";

type Props = {
  paginate: (number: number) => void;
};

export default function Pagination({ paginate }: Props) {
  const dispatch = useAppDispatch();
  /* const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
*/
  const { pageNumbers, currentPage } = useAppSelector(
    (state) => state.pagination
  );

  useEffect(() => {
    dispatch(generatePageNumbers());
    return () => {
      console.log("cleanup");
    };
  }, [dispatch]);

  return (
    <div className="py-2">
      <nav className="block ">
        <ul className="flex pl-0 rounded list-none flex-wrap s">
          <li className="flex justify-center gap-1">
            {pageNumbers.map((number: number, index) => (
              <button
                key={index}
                onClick={() => {
                  paginate(number);
                }}
                className={
                  currentPage === number
                    ? "bg-white border-white-900 rounded-full text-slate hover:border-slate-900 hover:bg-white hover:text-black relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    : "bg-Biscay-400 border-gray-300 rounded-full text-white hover:bg-slate-700  hover:text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                }
              >
                {number}
              </button>
            ))}
          </li>
        </ul>
      </nav>
    </div>
  );
}

import { useEffect, useState } from "react";
//Icons
import { FaPlus } from "react-icons/fa6";
//Components
import Table from "@components/table/Table";
import Pagination from "@components/Pagination/Pagination";
import SearchBar from "@components/searchBar/SearchBar";

//redux
import { useAppDispatch, useAppSelector } from "@redux/hook/storeHook";
import { getUsers, getCurrentPage } from "@redux/Slicers/paginationReducer";
//data
import usersTable from "@/data";

export default function Tyontekijat() {
  const [currentPage, setCurrenPage] = useState<number>(1);
  const { currentPosts } = useAppSelector((state) => state.pagination);
  const dispatch = useAppDispatch();

  console.log(usersTable.length);

  useEffect(() => {
    dispatch(getUsers(usersTable));
    return () => {
      console.log("cleanup");
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCurrentPage(currentPage));
    return () => {
      console.log("cleanup");
    };
  }, [dispatch, currentPage]);

  const paginate = (pageNumber: number) => {
    setCurrenPage(pageNumber);
  };
  console.log(currentPosts);

  return (
    <div className="flex flex-col w-11/12 h-[85vh]  justify-center items-strech ">
      <div className=" flex-initial ">
        <BtnBar />
      </div>
      <div className="basis-full flex-1  md:px-8 ">
        <Table users={currentPosts!} />
      </div>
      <div className="m-auto">
        <Pagination paginate={paginate} />
      </div>
    </div>
  );
}

// BTN bar

const BtnBar = () => {
  const buttons = [
    { name: "lisää", icon: <FaPlus size={20} /> },
    { name: "vie", icon: <FaPlus size={20} /> },
    { name: "tuo", icon: <FaPlus size={20} /> },
  ];
  return (
    <div className="flex flex-row  justify-center items-center space-x-4 px-2 md:px-12 ">
      {buttons.map(({ name, icon }, index) => (
        <button className="btn  md:first:mr-auto" key={index}>
          {icon}
          <span>{name}</span>
        </button>
      ))}
      <SearchBar />
    </div>
  );
};

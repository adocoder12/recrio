import { useEffect } from "react";

//Icons
import { FaPlus } from "react-icons/fa6";

//Components
import Table from "../components/table/Table";
import Pagination from "../components/Pagination/Pagination";
import SearchBar from "../components/searchBar/SearchBar";

//redux
import { useAppDispatch } from "../redux/hook/storeHook";
import { getUsers, getCurrentPage } from "../redux/Slicers/paginationReducer";

//data
import usersTable from "../data";

export default function Tyontekijat() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers(usersTable));
  }, [dispatch]);

  const paginate = (pageNumber: number) => {
    dispatch(getCurrentPage(pageNumber));
  };

  return (
    <div className="flex flex-col w-11/12 min-h-[85vh]  justify-center items-strech  ">
      <div className=" flex-initial ">
        <BtnBar />
      </div>
      <div className="basis-full flex-1  md:px-8 ">
        <Table />
      </div>
      <div className="m-auto">
        <Pagination paginate={paginate} />
      </div>
    </div>
  );
}

// BTN bar

const BtnBar = () => {
  // const [query, setQuery] = useState("");

  // const searchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setQuery(e.target.value);
  // };
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

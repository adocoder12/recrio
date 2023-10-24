//component
import CardHours from "@/components/CardHours/CardHours";
import Table from "@/components/table/Table";
import ButtonBar from "@/components/btnBar/ButtonBar";
//types
import { TusersTuntikirjaCard } from "@/utils/types";
//data
import usersTable from "@/data";
//redux
import { useAppSelector, useAppDispatch } from "@/redux/hook/storeHook";
import {
  getUsersHours,
  findMostHoursLastWeek,
} from "@/redux/Slicers/tuntikirjaSlicer";
import { useEffect, useState } from "react";

export default function Tuntikirjia() {
  const { mostHoursUser, mostHoursCurrentWeek } = useAppSelector(
    (state) => state.tuntikirja
  );

  const dispatch = useAppDispatch();
  const [user, setUser] = useState<TusersTuntikirjaCard | undefined>(undefined);

  const filteredUsers = usersTable.map((item) => {
    return {
      loggedIn: item.loggedIn,
      name: `${item.name} ${item.lastname}, #${item.id} `,
      osasto: item.osasto,
      totalhours: item.totalhours,
      workingHours: item.workingHours,
    };
  });

  useEffect(() => {
    setUser(mostHoursCurrentWeek);
    return () => {
      console.log("cleanup");
    };
  }, []);

  const getCurrentWeek = () => {
    dispatch(getUsersHours(filteredUsers));
    setUser(mostHoursUser);
    console.log("clicked");
  };

  useEffect(() => {
    getCurrentWeek();
    return () => {
      console.log("cleanup");
    };
  }, [dispatch]);

  const getLastWeek = () => {
    dispatch(findMostHoursLastWeek());
    setUser(mostHoursUser);
    console.log("clicked");

    console.log("clicked");
  };
  useEffect(() => {
    getLastWeek();
    return () => {
      console.log("cleanup");
    };
  }, [dispatch]);

  return (
    <div className="flex flex-col w-11/12 h-[90vh] justify-center ">
      <div className="flex flex-row justify-around">
        <div className="flex ">
          <h2 className=" text-lg uppercase text-white">
            Viimeisen viikon tuntikeskiarvo
          </h2>
        </div>
        <div className="flex flex-col items-center gap-y-2 ">
          <div className="flex items-center justify-start">
            <ButtonBar lastWeek={getLastWeek} currentWeek={getCurrentWeek} />
          </div>
          <CardHours user={user} />
        </div>
      </div>
      <div className="lowersection basis-full">
        <Table className=" h-[450px]" users={filteredUsers} />
      </div>
    </div>
  );
}

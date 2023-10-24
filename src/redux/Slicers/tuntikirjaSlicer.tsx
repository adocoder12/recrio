import { createSlice } from "@reduxjs/toolkit";
import usersTable from "@/data";
//type
import { Tdate, TusersTuntikirjaCard } from "@/utils/types";
type TUser = {
  id?: number;
  name: string;
  lastname?: string;
  loggedIn?: number;
  totalhours: number;
  osasto?: string;
  workingHours?: Tdate[];
};

interface TinitialState {
  users: TusersTuntikirjaCard[];
  highHoursUsers?: TUser[];
  mostHoursUser?: TUser | undefined;
  mostHoursLastWeek: TUser | undefined;
  mostHoursCurrentWeek: TUser | undefined;
  mostHoursLastMonth: TUser | undefined;
}

const initialState: TinitialState = {
  users: [],
  highHoursUsers: [],
  mostHoursUser: undefined,
  mostHoursLastWeek: undefined,
  mostHoursLastMonth: undefined,
  mostHoursCurrentWeek: undefined,
};
//date
const currentDate = new Date();
const lastWeekStart = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  currentDate.getDate() - 7
);
const lastWeekEnd = currentDate;
//user
const filteredUsers = usersTable.map((item) => {
  return {
    loggedIn: item.loggedIn,
    name: `${item.name} ${item.lastname}, #${item.id} `,
    osasto: item.osasto,
    totalhours: item.totalhours,
    workingHours: item.workingHours,
  };
});

//Slice

const tuntikirjaSlicer = createSlice({
  name: "mySliceName",
  initialState,
  reducers: {
    getUsersHours: (state) => {
      state.users.push(...filteredUsers);
      let currentWeek: TUser | undefined = undefined;

      state.users.find((user) => {
        const totalHoursLastWeek = user.workingHours?.[0].currentWeek
          ?.filter((entry) =>
            entry.dates.some(
              (date) => date >= lastWeekStart && date <= lastWeekEnd
            )
          )
          .reduce((total, entry) => total + entry.hours, 0);

        if (
          totalHoursLastWeek !== undefined &&
          (!currentWeek || totalHoursLastWeek > (currentWeek.totalhours || 0))
        ) {
          currentWeek = { ...user, totalhours: totalHoursLastWeek };
        }
      });

      state.mostHoursCurrentWeek = currentWeek;
      state.mostHoursUser = state.mostHoursCurrentWeek;
    },
    findMostHoursLastWeek: (state) => {
      let HoursLastWeekUser: TUser | undefined = undefined;
      state.users.find((user) => {
        const totalHoursLastWeek = user.workingHours?.[0].lastWeek
          ?.filter((entry) =>
            entry.dates.some(
              (date) => date >= lastWeekStart && date <= lastWeekEnd
            )
          )
          .reduce((total, entry) => total + entry.hours, 0);

        if (
          totalHoursLastWeek !== undefined &&
          (!HoursLastWeekUser ||
            totalHoursLastWeek > (HoursLastWeekUser.totalhours || 0))
        ) {
          HoursLastWeekUser = { ...user, totalhours: totalHoursLastWeek };
        }
      });

      state.mostHoursLastWeek = HoursLastWeekUser;
      state.mostHoursUser = state.mostHoursLastWeek;
    },
  },
});

export const { getUsersHours, findMostHoursLastWeek } =
  tuntikirjaSlicer.actions;
export default tuntikirjaSlicer.reducer;

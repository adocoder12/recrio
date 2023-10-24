import { createSlice } from "@reduxjs/toolkit";

//type

import { Tdate } from "@/utils/types";
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
  users: TUser[];
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

console.log(initialState.mostHoursLastWeek);
const currentDate = new Date();
const lastWeekStart = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  currentDate.getDate() - 7
);
const lastWeekEnd = currentDate;

const tuntikirjaSlicer = createSlice({
  name: "mySliceName",
  initialState,
  reducers: {
    getUsersHours: (state, { payload }) => {
      state.users = payload;
      //   state.mostHoursUser = state.users.reduce((prev: TUser, current: TUser) =>
      //     prev.totalhours > current.totalhours ? prev : current
      //   );
      //   state.highHoursUsers = state.users.filter((user: TUser) => {
      //     return user.totalhours > 30;
      //   });

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

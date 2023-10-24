import { ReactElement } from "react";
import { IconType } from "react-icons";

export type workingHours = {
  dates: Date[];
  hours: number;
};

export type Tdate = {
  currentMonth?: workingHours[];
  currentWeek?: workingHours[];
  lastMonth?: workingHours[];
  lastWeek?: workingHours[];
};

export type TUser = {
  id?: number;
  name: string;
  lastname?: string;
  email?: string;
  phone?: string;
  loggedIn?: number;
  totalhours?: number;
  osasto?: string;
  workingHours?: Tdate[];
};

export type TuserPreview = Omit<TUser, "id" | "loggedIn" | "totalhours">;
export type TusersTuntikirjaCard = Omit<TUser, "phone" | "email">;

export type sidebarIconTypes = {
  name: string;
  icon: ReactElement<IconType>;
};

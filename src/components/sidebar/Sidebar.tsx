import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
//Icons
import { FaHouseChimney } from "react-icons/fa6";
import { FaPerson } from "react-icons/fa6";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
//types
import { sidebarIconTypes } from "@utils/types";

const UpperItems: sidebarIconTypes[] = [
  { name: "koti", icon: <FaHouseChimney /> },
  { name: "tyontekijat", icon: <FaPerson /> },
  { name: "palkat", icon: <FaCircleDollarToSlot /> },
  { name: "tiedostot", icon: <FaFolderOpen /> },
  { name: "tyovuorot", icon: <FaCalendarDays /> },
  { name: "tuntikirja", icon: <FaClock /> },
];

const middleItems = [
  { name: "yhteys", icon: <FaPhone /> },
  { name: "Hanki tekijoita", icon: <FaUserPlus /> },
];
const bottomItems = [{ name: "Asetukset", icon: <FaGear /> }];
export default function Sidebar() {
  const location = useLocation();
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  console.log(location.pathname);

  return (
    <div className="h-screen w-full flex flex-col  justify-around grow bg-white dark:bg-gray-900 shadow-lg ">
      {UpperItems.map((item, index) => (
        <SidebarIcon
          className={"/" + item.name === url ? "sidebar-active " : ""}
          icon={item.icon}
          text={item.name}
          key={index}
        />
      ))}
      <Divider />
      {middleItems.map((item, index) => (
        <SidebarIcon
          className={"/" + item.name === url ? "sidebar-active " : ""}
          icon={item.icon}
          text={item.name}
          key={index}
        />
      ))}
      <Divider />
      {bottomItems.map((item, index) => (
        <SidebarIcon
          className={"/" + item.name === url ? "sidebar-active " : ""}
          icon={item.icon}
          text={item.name}
          key={index}
        />
      ))}
    </div>
  );
}

type sidebarIconProps = {
  icon: JSX.Element;
  text: string;
  className?: string;
};
const SidebarIcon = ({ icon, text, className }: sidebarIconProps) => {
  return (
    <NavLink
      className={`sidebar-icon group ${className} group-active:bg-green-600`}
      to={`/${text}`}
    >
      <span className="sidebar-icon-icon">{icon}</span>
      <span className="sidebar-tooltip capitalize  group-hover:scale-100">
        {text}
      </span>
    </NavLink>
  );
};

const Divider = () => <hr className="sidebar-hr" />;

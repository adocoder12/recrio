import { Link } from "react-router-dom";

//Icons
import { FaClock } from "react-icons/fa6";
//types
import { TusersTuntikirjaCard } from "@/utils/types";

type Props = {
  user: TusersTuntikirjaCard | undefined;
};
export default function CardHours({ user }: Props) {
  return (
    <>
      <div className="pt-6 space-y-4 bg-slate-100 rounded-xl p-8 dark:bg-slate-800 w-8/12 flex  text-white min-w-fit gap-6">
        <div className="flex flex-col basis-4/6 gap-12">
          <div className="info ">
            <h1 className=" text2xl xl:text-2xl">{`${user?.name}`}</h1>
            <p className="text-md md:text-lg">{user?.osasto}</p>
          </div>
          <div className="flex justify-start basis-auto items-center gap-x-2">
            <Link className="text-white underline hidden md:block" to="/">
              Näytä työselosteet
            </Link>
            <button className="btn  px-4 py-1  xl:px-4 xl:py-1 ">
              Profiiliin
            </button>
          </div>
        </div>
        <div className="flex basis-2/6 items-center  ">
          <FaClock className=" md:self-baseline" size={30} />
          <h1 className=" text-4xl md:text-6xl ">{`${user?.totalhours}h`}</h1>
        </div>
      </div>
    </>
  );
}

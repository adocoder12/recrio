//redux hooks
import { useAppSelector } from "../../redux/hook/storeHook";
//types
import { TUser } from "../../utils/types";
export default function Table() {
  const { currentPosts } = useAppSelector((state) => state.pagination);

  return (
    <>
      <div className="min-w-full  py-4 px-4 md:py-8">
        <div className="shadow  overflow-y-hidden rounded border-b border-gray-200   w-full min-w-[420px]">
          <table className="min-w-full bg-white table-fixed h-[100%]">
            <thead className="bg-gray-800 text-white sticky top-0 h-14">
              <tr>
                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Name
                </th>
                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Last name
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Phone
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Email
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700 overflow-auto ">
              {currentPosts?.map(
                ({ name, lastname, phone, email }: TUser, index: number) => (
                  <tr
                    className={" h-[20px] odd:bg-white even:bg-slate-400"}
                    key={index}
                  >
                    <td className="w-1/3 text-left py-3 px-4">{name}</td>
                    <td className="w-1/3 text-left py-3 px-4">{lastname}</td>
                    <td className="text-left py-3 px-4">{phone}</td>
                    <td className="text-left py-3 px-4">{email}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

//types
import { TUser } from "@utils/types";

type Props = {
  users: TUser[];
  className?: string;
};
export default function Table({ users, className }: Props) {
  return (
    <>
      <div className="min-w-full   py-4 px-4 md:py-8">
        <div
          className={`shadow rounded border-b border-gray-200  overflow-hidden overflow-y-auto ${className}  min-w-[420px]`}
        >
          <table className="min-w-full bg-white table-fixed ">
            <thead className="bg-gray-800 text-white sticky top-0 h-14">
              <tr>
                {Object.keys(users?.[0] || {}).map((key, index) => (
                  <th
                    className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm"
                    key={index}
                  >
                    {key !== "workingHours" && key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-gray-700  h-full ">
              {users &&
                users?.map(
                  (
                    {
                      name,
                      lastname,
                      phone,
                      email,
                      totalhours,
                      loggedIn,
                      osasto,
                    },
                    index: number
                  ) => (
                    <tr
                      className={" h-[20px] odd:bg-white even:bg-slate-400"}
                      key={index}
                    >
                      {loggedIn && (
                        <td className=" text-left py-3 px-4">
                          {loggedIn + " min sitten"}
                        </td>
                      )}
                      {name && <td className=" text-left py-3 px-4">{name}</td>}
                      {lastname && (
                        <td className=" text-left py-3 px-4">{lastname}</td>
                      )}
                      {phone && (
                        <td className=" text-left py-3 px-4">{phone}</td>
                      )}
                      {osasto && (
                        <td className=" text-left py-3 px-4">{osasto}</td>
                      )}
                      {email && (
                        <td className=" text-left py-3 px-4">{email}</td>
                      )}

                      {totalhours && (
                        <td className=" text-left py-3 px-4">
                          {totalhours + " " + "h"}
                        </td>
                      )}
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

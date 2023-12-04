import Active from "@/assets/icon/Active";
import Inactive from "@/assets/icon/Inactive";
import { useLazyGetSingleRoleQuery } from "@/services/managementService";
import { useEffect } from "react";
import { CustomSpinner as Spinner } from "@/lib/AntdComponents";

const permissions = [
  "CreateNewUser",
  "ModifyUser",
  "CreateRole",
  "ModifyRole",
  "ViewRole",
  "ViewUser",
  "ViewBusiness",
  "ViewWallet",
  "ViewTransaction",
  "ViewTransactionStatement",
  "CreateCollections",
  "CreateDisbursement",
  "ViewDisbursement",
  "CreateInvoice",
  "ViewInvoice",
  "CreatePayroll",
  "ModifyPayroll",
  "ViewPayroll",
];
const PreviewRole = ({ id }: { id: string }) => {
  const [getRole, { data, isLoading }] = useLazyGetSingleRoleQuery();
  useEffect(() => {
    if (id)
      getRole(id)
        .unwrap()
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
  }, [id]);
  return (
    <div className="grid grid-cols-1 gap-[0.5rem] p-[3%] bg-[#F9FFFF]">
      {isLoading ? (
        <div className="flex items-center justify-center h-[80vh] w-full absolute opacity-[0.7] bg-gray-100 z-[100]">
          <Spinner className="!m-auto !block" />
        </div>
      ) : (
        <>
          <span className="flex flex-col">
            <h4 className="text-[#181336] text-[16px] font-[700]">
              {data?.data?.roleName} role priviledges
            </h4>
            <p className="text-[#515B6F] text-[16px] font-[400]">
              {data?.data?.roleName} have the following privileges
            </p>
          </span>
          <div className="flex flex-col gap-[0.3rem]">
            <h4 className="text-[#181336] text-[16px] font-[700]">
              User management
            </h4>
            <span className="flex items-center justify-between w-full">
              <p className="text-[#515B6F] text-[16px] font-[400]">
                Create User
              </p>
              {data?.data?.permissions?.includes(permissions[0]) ? (
                <Active />
              ) : (
                <Inactive />
              )}
            </span>
            <span className="flex items-center justify-between w-full">
              <p className="text-[#515B6F] text-[16px] font-[400]">
                Modify User
              </p>
              {data?.data?.permissions?.includes(permissions[1]) ? (
                <Active />
              ) : (
                <Inactive />
              )}
            </span>
            <span className="flex items-center justify-between w-full">
              <p className="text-[#515B6F] text-[16px] font-[400]">
                Create Role
              </p>
              {data?.data?.permissions?.includes(permissions[2]) ? (
                <Active />
              ) : (
                <Inactive />
              )}
            </span>
            <span className="flex items-center justify-between w-full">
              <p className="text-[#515B6F] text-[16px] font-[400]">
                Modify Role
              </p>
              {data?.data?.permissions?.includes(permissions[3]) ? (
                <Active />
              ) : (
                <Inactive />
              )}
            </span>
            <span className="flex items-center justify-between w-full">
              <p className="text-[#515B6F] text-[16px] font-[400]">View Role</p>
              {data?.data?.permissions?.includes(permissions[4]) ? (
                <Active />
              ) : (
                <Inactive />
              )}
            </span>
            <span className="flex items-center justify-between w-full">
              <p className="text-[#515B6F] text-[16px] font-[400]">View User</p>
              {data?.data?.permissions?.includes(permissions[5]) ? (
                <Active />
              ) : (
                <Inactive />
              )}
            </span>
          </div>
          <div className="flex flex-col gap-[0.3rem]">
            <h4 className="text-[#181336] text-[16px] font-[700]">Account</h4>
            <span className="flex items-center justify-between">
              <p className="text-[#515B6F] text-[16px] font-[400]">
                Can View Account
              </p>
              {data?.data?.permissions?.includes(permissions[8]) ? (
                <Active />
              ) : (
                <Inactive />
              )}
            </span>
            <span className="flex items-center justify-between">
              <p className="text-[#515B6F] text-[16px] font-[400]">
                Can download statement
              </p>
              {data?.data?.permissions?.includes(permissions[9]) ? (
                <Active />
              ) : (
                <Inactive />
              )}
            </span>
            <span className="flex items-center justify-between">
              <p className="text-[#515B6F] text-[16px] font-[400]">
                Can create payment
              </p>
              {data?.data?.permissions?.includes(permissions[11]) ? (
                <Active />
              ) : (
                <Inactive />
              )}
            </span>
          </div>
          <div className="flex flex-col gap-[0.3rem]">
            <h4 className="text-[#181336] text-[16px] font-[700]">Invoice</h4>
            <span className="flex items-center justify-between">
              <p className="text-[#515B6F] text-[16px] font-[400]">
                Can create invoice
              </p>
              {data?.data?.permissions?.includes(permissions[13]) ? (
                <Active />
              ) : (
                <Inactive />
              )}
            </span>
            <span className="flex items-center justify-between">
              <p className="text-[#515B6F] text-[16px] font-[400]">
                Can view invoice
              </p>
              {data?.data?.permissions?.includes(permissions[14]) ? (
                <Active />
              ) : (
                <Inactive />
              )}
            </span>
          </div>
          <div className="flex flex-col gap-[0.3rem]">
            <h4 className="text-[#181336] text-[16px] font-[700]">Payroll</h4>
            <span className="flex items-center justify-between">
              <p className="text-[#515B6F] text-[16px] font-[400]">
                Can create payroll
              </p>
              {data?.data?.permissions?.includes(permissions[15]) ? (
                <Active />
              ) : (
                <Inactive />
              )}
            </span>
            <span className="flex items-center justify-between">
              <p className="text-[#515B6F] text-[16px] font-[400]">
                Can view payroll
              </p>
              {data?.data?.permissions?.includes(permissions[17]) ? (
                <Active />
              ) : (
                <Inactive />
              )}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default PreviewRole;
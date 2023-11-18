import { Avatar, Drawer } from "antd";
import React from "react";
import { CustomButton as Button } from "@/lib/AntdComponents";
import { DataType } from "../contact-tab/Beneficiary";
interface DetailsProps {
  Open: boolean;
  onClose: () => void;
  contactData: DataType | null;
}

const BenefiaryDrawal: React.FC<DetailsProps> = ({
  Open,
  onClose,
  contactData,
}) => {
  return (
    <Drawer placement="right" onClose={onClose} open={Open}>
      {contactData && (
        <>
          <div className="flex flex-col justify-center items-center  h-[120px]">
            <div className="flex flex-col justify-center items-center  h-[120px]">
              <Avatar size={80} className="bg-purple-500">
                JD{" "}
              </Avatar>
              <p className="text-slate-700 text-lg font-semibold mt-3">
                John David Smith
              </p>
            </div>{" "}
          </div>
          <div className="p-4 border border-gray-100 space-y-4 mt-5">
            <div className="grid grid-cols-2 gap-4 ">
              <div className="text-slate-500 pr-2">Account Name :</div>
              <div className="leading-tight font-semibold">
                {contactData.account}
              </div>
              <div className="text-slate-500 pr-2">Account Number:</div>
              <div className="leading-tight font-semibold">
                {contactData.account}
              </div>
              <div className="text-slate-500 pr-2">Bank:</div>
              <div className="leading-tight font-semibold">
                {contactData.acctBank}
              </div>{" "}
            </div>
          </div>

          <div className="my-6 space-y-4">
            <Button className="!h-[3rem] !bg-Primary w-full text-white hover:!text-white">
              Send Invoice{" "}
            </Button>
            <Button className="!h-[3rem] !bg-transparent w-full">
              Send Payment
            </Button>
          </div>
        </>
      )}
    </Drawer>
  );
};

export default BenefiaryDrawal;
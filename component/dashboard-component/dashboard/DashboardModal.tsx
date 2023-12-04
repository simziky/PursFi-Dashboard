import { Modal } from "antd";
import React from "react";
import { CustomButton as Button } from "@/lib/AntdComponents";
import { CustomInput as Input } from "@/lib/AntdComponents";
import { FaRegCopy } from "react-icons/fa";
const DashboardModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  return (
    <Modal open={open} onCancel={() => setOpen(false)} footer={null}>
      <div className=" flex flex-col">
        <h2 className="text-2xl font-bold mb-1">
          Transfer money to your Account
        </h2>
        <p className="text-sm text-gray-500">
          move fund from this account to another company account
        </p>
        <div className="mt-5 space-y-4">
          <Button type="primary" className="!h-[3rem] !bg-black">
            Bank Transfer
          </Button>
          <form className="w-full space-y-8 mt-4">
            <div className="mb-4">
              <label className="block text-black text-sm font-semibold mb-2">
                PursBusiness main Account
              </label>
              <Input
                required
                id="text"
                type="text"
                placeholder="pursfi main account"
              />
            </div>

            <div className="flex justify-between items-end  border border-gray-300 p-2 rounded-md">
              <span className="space-y-3">
                <p className="font-medium ">Bank Transfer</p>
                <p>Bank Transfer - firstBank</p>{" "}
                <p>Account Number - 045677880</p>
                <p>Account Name - Bruce Wayne</p>
              </span>{" "}
              <button className="border items-center  flex space-x-2 p-2 rounded-md">
                <FaRegCopy className="text-blue-400" />
                <p>copy</p>{" "}
              </button>{" "}
            </div>
          </form>{" "}
        </div>{" "}
      </div>
    </Modal>
  );
};

export default DashboardModal;

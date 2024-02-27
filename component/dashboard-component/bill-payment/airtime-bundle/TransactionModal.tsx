import { Modal } from "antd";
import React from "react";
import {
  CustomInput as Input,
  CustomButton as Button,
} from "@/lib/AntdComponents";
const TransactionModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
      centered={true}
      title="Transaction Details"
    >
      <div className="w-full space-y-4 mt-4 flex flex-col">
        <span className="flex justify-between items-center">
          <p className="text-slate-500 ">Amount :</p>
          <p className="leading-tight font-semibold">+20,0000 </p>
        </span>
        <span className="flex justify-between items-center">
          <p className="text-slate-500">Date:</p>
          <p className="leading-tight font-semibold">2,aug,2024</p>{" "}
        </span>
        <span className="flex justify-between items-center">
          <p className="text-slate-500">Counter party:</p>
          <p className="leading-tight font-semibold">John David </p>{" "}
        </span>
        <span className="flex justify-between items-center">
          <p className="text-slate-500">Bank Name:</p>
          <p className="leading-tight font-semibold">First Bank</p>
        </span>
        <span className="flex justify-between items-center">
          <p className="text-slate-500">Account Number:</p>
          <p className="leading-tight font-semibold">232432134</p>
        </span>
        <span className="flex justify-between items-center">
          <p className="text-slate-500">Source:</p>
          <p className="leading-tight font-semibold">Pursliq main account</p>
        </span>
        <div className="border border-gray-200"></div>
        <Button className="!h-[3rem] !bg-black w-full text-white hover:!text-white">
          Download Reciept
        </Button>
        <Button
          className="!h-[3rem] !bg-transparent w-full"
        >
        Report Transaction
        </Button>
      </div>{" "}
    </Modal>
  );
};

export default TransactionModal;
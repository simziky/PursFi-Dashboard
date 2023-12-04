"use client";
import { Select } from "antd";
import React from "react";
import InvoiceTab from "./InvoiceTab";
import { useRouter } from "next/navigation";

const Invoice = () => {
  const { push } = useRouter();
  return (
    <div className="max-w-[1640px] flex flex-col p-4  h-screen overflow-y-scroll">
      <header className="flex flex-col space-y-9 my-4">
        <div className="flex items-center justify-between ">
          <span>
            <h2 className="text-2xl font-medium"> Invoice </h2>
            <p className="text-sm text-gray-600">
              Showing your Account metrics for July 19, 2021 - July 25, 2021
            </p>
          </span>
          <div className="flex justify-center items-center space-x-5">
            <button
              onClick={() => push("/create-invoice")}
              className="btn btn-md  bg-black hover:bg-black text-white text-sm normal-case"
            >
              + Create Invoice
            </button>
            <Select
              style={{ width: "100%" }}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
              ]}
              placeholder="Show stats Yearly"
            />{" "}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 items-center">
          <span>
            <p className="text-sm">Total Incoming</p>
            <p className="text-2xl font-medium">N300,000</p>
          </span>
          <span>
            <p className="text-sm">Total Outgoing</p>
            <p className="text-2xl font-medium">N300,000</p>
          </span>
          <span>
            <p className="text-sm"> Overdue Invoice </p>
            <p className="text-2xl font-medium">N300,000</p>
          </span>
          <span>
            <p className="text-sm"> Unpaid</p>
            <p className="text-2xl font-medium">N300,000</p>
          </span>
        </div>{" "}
        <div className="bg-white p-2 rounded-md">
          <InvoiceTab />
        </div>
      </header>
    </div>
  );
};

export default Invoice;

"use client";
import React from "react";
import SettingTab from "./SettingTab";

const Setting = () => {
  return (
    <div className="max-w-[1640px] flex flex-col p-4  h-screen overflow-y-scroll">
      <header className="flex flex-col space-y-9 my-4">
        <span>
          <h2 className="text-2xl font-medium"> Settings </h2>
          <p className="text-sm text-gray-600">
            Showing your Account metrics for July 19, 2021 - July 25, 2021
          </p>
        </span>
        <div className="bg-white p-2 rounded-md">
          <SettingTab />
        </div>
      </header>
    </div>
  );
};

export default Setting;

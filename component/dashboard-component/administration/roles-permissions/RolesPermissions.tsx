"use client";
import React, { useState } from "react";
import Roles from "./Roles";
import RoleModal from "./RoleModal";

const RolesPermissions = () => {
  const date = new Date();
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-[1640px] flex flex-col p-4  h-screen overflow-y-scroll space-y-8">
      <header className="flex flex-col space-y-3 my-1">
        <div className="flex items-center justify-between ">
          <span>
            <h2 className="text-2xl font-medium">
              Administration -{" "}
              <span className="text-gray-400">Roles and Permission</span>{" "}
            </h2>
            <p className="text-sm text-gray-600">
              Showing your Account metrics for{" "}
              {date.toLocaleString("en-US", {
                month: "long",
                day: "2-digit",
                year: "numeric",
              })}
            </p>
          </span>
          <button
            onClick={() => setOpen(true)}
            className="btn btn-md  bg-black hover:bg-black text-white text-sm normal-case"
          >
            + Create Role
          </button>
        </div>
      </header>
      <div className="bg-white p-2 rounded-md">
        <Roles />
      </div>
      <RoleModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default RolesPermissions;
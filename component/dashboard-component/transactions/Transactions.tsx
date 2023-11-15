import { CustomSelect as Select } from "@/lib/AntdComponents";
import TransactionTable from "./TransactionTable";

const Transactions = () => {
  const date = new Date();
  return (
    <div className="mx-auto flex flex-col py-2 px-6 h-screen overflow-y-scroll">
      <header className="flex flex-col space-y-6 my-6">
        <div className="flex items-center justify-between ">
          <span>
            <h2 className="text-2xl font-medium"> Account </h2>
            <p className="text-sm text-gray-600">
              Showing your Account metrics for July 19, 2021 - July 25, 2021{" "}
            </p>
          </span>
          <div className="flex justify-center items-center ">
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
      </header>
      <main className="grid grid-cols-1 mt-6">
        <TransactionTable />
      </main>
    </div>
  );
};

export default Transactions;

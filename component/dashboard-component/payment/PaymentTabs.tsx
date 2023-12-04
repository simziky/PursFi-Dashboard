import { CustomTabs as Tabs } from "@/lib/AntdComponents";
import type { TabsProps } from "antd";
import Request from "./payment-tabs/Request";
import Recurring from "./payment-tabs/Recurring";
import ALL from "./payment-tabs/All";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Payment",
    children: <ALL />,
  },
  {
    key: "2",
    label: "Scheduled Payment",
    children: <Request />,
  },
  {
    key: "3",
    label: "Recurring Payment",
    children: <Recurring />,
  },
];
const PaymentTabs = () => {
  return <Tabs defaultActiveKey="1" items={items} />;
};

export default PaymentTabs;

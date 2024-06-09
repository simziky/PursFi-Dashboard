import {
  MdOutlineAccountBalanceWallet,
  MdAccountBalance,
  MdOutlineAdminPanelSettings,
  MdEvent,
} from "react-icons/md";
import { AiOutlineIdcard } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { GrTransaction, GrDocumentUser } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import ContactIcon from "@/assets/icon/ContactIcon";
import { MenuProps } from "antd";
import Link from "next/link";
import { CgTranscript } from "react-icons/cg";
export const sidebarData: MenuProps["items"] = [
  {
    label: <Link href="/dashboard">Dashboard</Link>,
    icon: <MdAccountBalance className=" font-bold" />,
    key: "dashboard",
  },
  {
    label: <Link href="/account">Account</Link>,
    icon: <MdOutlineAccountBalanceWallet className=" font-bold" />,
    key: "account",
  },
  {
    label: <Link href="/payment">Payment</Link>,
    icon: <AiOutlineIdcard className=" font-bold" />,
    key: "payment",
    children: [
      {
        label: <Link href="/payment">Payment</Link>,
        icon: "",
        key: "payment/payment",
      },
      {
        label: <Link href="/payment/batch">Batch Payment</Link>,
        icon: "",
        key: "payroll/settings",
      },
    ],
  },
  {
    label: "Payroll",
    icon: <FaRegUser className=" font-bold" />,
    key: "payroll",
    children: [
      {
        label: <Link href="/payroll-overview">Overview</Link>,
        icon: <FaRegUser className=" font-bold" />,
        key: "payroll/overview",
      },
      {
        label: <Link href="/payroll">Create Payroll</Link>,
        icon: <FaRegUser className=" font-bold" />,
        key: "payroll/settings",
      },
    ],
  },
  {
    label: <Link href="/transactions">Transaction</Link>,
    icon: <GrTransaction className=" font-bold" />,
    key: "transactions",
  },
  {
    label: <Link href="/invoice">Invoice</Link>,
    icon: <MdOutlineAdminPanelSettings className=" font-bold" />,
    key: "invoice",
  },
  {
    label: "Administration",
    icon: <FaRegUser className=" font-bold" />,
    key: "administration",
    children: [
      {
        label: <Link href="/administration">Team Member</Link>,
        icon: <VscGitPullRequestGoToChanges className=" font-bold" />,
        key: "payroll/overview",
      },
      {
        label: <Link href="/roles">Roles And Perimission</Link>,
        icon: <FaRegUser className=" font-bold" />,
        key: "payroll/settings",
      },
    ],
  },
  {
    label: <Link href="/remita">Remita</Link>,
    icon: <CgTranscript className=" font-bold" />,
    key: "remita",
  },
  {
    label: <Link href="/setting">Settings</Link>,
    icon: <FiSettings className=" font-bold" />,
    key: "setting",
  },
  // {
  //   label: <Link href="/tickets">Ticket and Support</Link>,
  //   icon: <ContactIcon />,
  //   key: "ticket",
  // },
];

export const activeKeys = [
  "dashboard",
  "account",
  "payment",
  "payroll",
  "transactions",
  "invoice",
  "contact",
  "administration",
  "setting",
  "ticket",
];

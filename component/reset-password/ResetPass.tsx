"use client";
import logo from "@/assets/logo.svg";
import {
  CustomInput as Input,
  CustomPasswordInput as PasswordInput,
  CustomButton as Button,
} from "@/lib/AntdComponents";
import Image from "next/image";
import { useResetPasswordMutation } from "@/services/authService";
const ResetPass = () => {
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  return (
    <div className="min-h-screen flex flex-col bg-BgImage mx-auto max-w-[1640px]">
      <nav className="py-4 px-8">
        <Image src={logo} alt="logo" />
      </nav>
      <main className=" flex flex-col items-center justify-center bg-white w-full md:w-[450px] mx-auto mt-4 p-6">
        <h1 className="font-semibold text-xl mb-2 text-Primary">
          Change Password{" "}
        </h1>
        <p className=" text-gray-700 text-sm text-center">
          Your new password must be different from previous used passwords
        </p>
        <form className="w-full space-y-5 mt-4">
          <div className="w-full flex flex-col items-start justify-start gap-[0.2rem]">
            <label
              htmlFor="password"
              className="text-[#181336] text-sm font-[500]"
            >
              Password
            </label>
            <PasswordInput
              className="w-full"
              placeholder=" Enter your password"
              id="password"
              type="password"
            />
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-[0.2rem]">
            <label
              htmlFor="confirmPassword"
              className="text-[#181336] text-sm font-[500]"
            >
              Confirm password
            </label>
            <PasswordInput
              className="w-full"
              placeholder="Confirm your password"
              id="confirmPassword"
              type="password"
            />
          </div>
          <Button
            loading={isLoading}
            htmlType="submit"
            type="primary"
            className="!h-[3rem] !bg-Primary w-full"
          >
            Change Password
          </Button>
        </form>
      </main>
    </div>
  );
};

export default ResetPass;

import React from "react";
import { LoginForm } from "../../../components/Admin";
import MoonIcon from "../../../components/icons/MoonIcon";

export function LoginAdmin() {
  return (
    <div className="  flex min-h-screen flex-col items-center justify-center bg-[#B9CC00] ">
      <main className=" w-full max-w-md rounded-lg bg-[#D9D9D9] bg-opacity-40 p-6 shadow-lg">
        <LoginForm />
      </main>

      <MoonIcon />
    </div>
  );
}

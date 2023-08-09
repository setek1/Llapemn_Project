import React from "react";
import { LoginForm } from "../../../components/Admin";
export function LoginAdmin() {
  return (
    <div className="  flex min-h-screen items-center justify-center bg-[#B9CC00]">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <LoginForm />
      </div>
    </div>
  );
}

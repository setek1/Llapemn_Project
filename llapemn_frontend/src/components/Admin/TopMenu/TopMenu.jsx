import React from "react";
import { useAuth } from "../../../hooks";

export function TopMenu(props) {
  const { children } = props;
  const { auth } = useAuth();

  const renderName = () => {
    if (auth.me?.first_name && auth.me?.last_name) {
      return `${auth.me.first_name} ${auth.me.last_name}`;
    }
    return auth.me?.email;
  };
  return (
    <div>
      <header className="flex items-center justify-between bg-white p-3">
        <div>
          <h1 className=" font-bold">Bienvenido</h1>
          <p className="">{renderName()}</p>
        </div>
        <div>
          <h1 className=" text-right font-bold">Dia</h1>
          <p className="">xx Mes ANO</p>
        </div>
      </header>
      <div className=" p-4">
        <div className="m-5 rounded-lg bg-white p-6">{children}</div>
      </div>
    </div>
  );
}

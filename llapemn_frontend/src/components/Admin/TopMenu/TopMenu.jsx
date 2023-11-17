import React from "react";
import { useAuth } from "../../../hooks";

import { format, parseISO } from "date-fns";
import esLocale from "date-fns/locale/es";

export function TopMenu(props) {
  const { children } = props;
  const { auth } = useAuth();
  const fecha = new Date();
  // Obtener día, mes y año
  const dia = format(fecha, "d", { locale: esLocale });
  const mes = format(fecha, "MMMM", { locale: esLocale });
  const ano = format(fecha, "yyyy", { locale: esLocale });

  // Obtener el nombre del día de la semana
  const DiaDeLaSemana = format(fecha, "EEEE", { locale: esLocale });

  const renderName = () => {
    if (auth.me?.first_name && auth.me?.last_name) {
      return `${auth.me.first_name} ${auth.me.last_name}`;
    }
    return auth.me?.email;
  };
  return (
    <>
      <header className="flex items-center justify-between bg-white p-3 dark:bg-[#2E3C4A]">
        <div className="dark:text-white">
          <h1 className=" font-bold">Bienvenido</h1>
          <p className="">{renderName()}</p>
        </div>
        <div className="dark:text-white">
          <h1 className=" text-right font-bold capitalize">{DiaDeLaSemana}</h1>
          <p className="capitalize">
            {dia} {mes} {ano}
          </p>
        </div>
      </header>
      <div className=" p-4">
        <div className="m-5 rounded-lg bg-white p-6 dark:bg-[#24333F]">
          {children}
        </div>
      </div>
    </>
  );
}

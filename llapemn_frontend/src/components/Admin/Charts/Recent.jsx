import React from "react";
import { useHistorial } from "../../../hooks";
import { useEffect, useState } from "react";
import { map } from "lodash";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { UpperStats } from "./UpperStats";
import { format, parseISO } from "date-fns";
import esLocale from "date-fns/locale/es";

export function Recent() {
  const { historial, getHistorial2 } = useHistorial();
  const fecha = new Date();
  // Obtener día, mes y año
  const dia = format(fecha, "d", { locale: esLocale });
  const mes = format(fecha, "MM", { locale: esLocale });
  const ano = format(fecha, "yyyy", { locale: esLocale });

  useEffect(() => {
    getHistorial2();
  }, []);
  console.log("historial", historial);

  return (
    <div className="flex-1 rounded-lg border border-gray-200 bg-white px-4 pb-4 pt-3 dark:bg-[#2E3C4A]">
      <div>
        <UpperStats />
      </div>
      <div className="flex justify-between">
        <div>
          <strong className="font-medium text-gray-700 dark:text-white">
            Añadidos Recientemente
          </strong>
        </div>

        <div>
          <strong className="font-medium text-gray-700 dark:text-white">
            Fecha actual: {dia}/{mes}/{ano}
          </strong>
        </div>
      </div>

      <div className="mt-3 rounded-sm  border-gray-200 dark:text-white">
        {map(historial, (historia, index) => (
          <div
            key={index}
            className="mt-2 flex w-full gap-10 rounded-lg bg-[#F0F0F0] p-4 dark:bg-[#1A2B38]"
          >
            <>
              <div className="w-[10%]">
                <HiOutlineArchiveBox className="text-5xl" />
              </div>
              <div className="w-[20%]">
                <p>Insumo</p>
                <h1>{historia.insumo_data.nombreIn}</h1>
              </div>
              <div className="w-[25%]">
                <p>Usuario</p>
                <h1>
                  {historia.user_data.first_name +
                    " " +
                    historia.user_data.last_name}
                </h1>
              </div>
              <div className="w-[10%]  text-center">
                <p>Cantidad </p>
                <h1>{historia.cantidad}</h1>
              </div>
              <div className="w-[10%]">
                <p>Sala</p>
                <h1>{historia.sala_data.nombre}</h1>
              </div>
              <div className="w-[15%]">
                <p>Fecha</p>
                <h1>
                  {historia.fecha_formateada
                    ? historia.fecha_formateada
                    : "Fecha no disponible"}
                </h1>
              </div>
              <div className="w-[10%]">
                <p>Hora</p>
                <h1>
                  {historia.hora
                    ? historia.hora.split(".")[0]
                    : "Hora no disponible"}
                </h1>
              </div>
            </>
          </div>
        ))}
      </div>
    </div>
  );
}

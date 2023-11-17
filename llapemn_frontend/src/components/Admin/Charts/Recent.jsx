import React from "react";
import { useHistorial } from "../../../hooks";
import { useEffect, useState } from "react";
import { map } from "lodash";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { UpperStats } from "./UpperStats";

export function Recent() {
  const { historial, getHistorial2 } = useHistorial();

  useEffect(() => {
    getHistorial2();
  }, []);
  console.log("historial", historial);

  return (
    <div className="flex-1 rounded-lg border border-gray-200 bg-white px-4 pb-4 pt-3 dark:bg-[#2E3C4A]">
      <div>
        <UpperStats />
      </div>
      <strong className="font-medium text-gray-700 dark:text-white">
        Añadidos Recientemente
      </strong>
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
                <p>Nombre</p>
                <h1>{historia.insumo_data.nombreIn}</h1>
              </div>
              <div className="w-[30%]">
                <p>Usuario</p>
                <h1>
                  {historia.user_data.first_name +
                    " " +
                    historia.user_data.last_name}
                </h1>
              </div>
              <div className="w-[20%]  text-center">
                <p>Cantidad</p>
                <h1>{historia.cantidad}</h1>
              </div>
              <div className="w-[20%]">
                <p>Sala</p>
                <h1>{historia.sala_data.nombre}</h1>
              </div>
            </>
          </div>
        ))}
      </div>
    </div>
  );
}

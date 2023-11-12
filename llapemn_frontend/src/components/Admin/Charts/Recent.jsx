import React from "react";
import { useInsumos } from "../../../hooks";
import { useEffect, useState } from "react";
import { map } from "lodash";
import { HiOutlineArchiveBox } from "react-icons/hi2";

export function Recent() {
  const { getInsumosOrder, insumos } = useInsumos();
  useEffect(() => {
    getInsumosOrder();
  }, []);
  console.log(insumos);

  return (
    <div className="flex-1 rounded-sm border border-gray-200 bg-white px-4 pb-4 pt-3">
      <strong className="font-medium text-gray-700">
        Añadidos Recientemente
      </strong>
      <div className="mt-3 rounded-sm  border-gray-200">
        {map(insumos, (insumo, index) => (
          <div
            key={index}
            className="mt-2 flex w-full gap-10 rounded-lg bg-[#F0F0F0] p-4 "
          >
            <div className="w-[20%]">
              <HiOutlineArchiveBox className="text-5xl" />
            </div>
            <div className="w-[20%]">
              <p>Nombre</p>
              <h1>{insumo.nombreIn}</h1>
            </div>
            <div className="w-[20%]">
              <p>Usuario</p>
              <h1>asdsad</h1>
            </div>
            <div className="w-[20%]">
              <p>Cantidad</p>
              <h1>{insumo.stockIn}</h1>
            </div>
            <div className="w-[20%]">
              <p>Sala</p>
              <h1>{insumo.id_sala}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

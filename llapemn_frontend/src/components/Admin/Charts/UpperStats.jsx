import React from "react";
import { FiUser } from "react-icons/fi";
import { FaCartShopping } from "react-icons/fa6";
import { BsFillDoorClosedFill } from "react-icons/bs";
import { MdProductionQuantityLimits } from "react-icons/md";
import { useHistorial } from "../../../hooks";
import { useEffect, useState } from "react";

export function UpperStats() {
  const { getHistorialUpperData, historial, loading } = useHistorial();
  useEffect(() => {
    getHistorialUpperData();
  }, []);
  console.log("Upper data", historial);
  return (
    <div className="mb-3 flex w-full gap-4">
      <BoxWrapper>
        <div className=" items-center ">
          <FiUser className="text-3xl text-[#FFB402]" />
        </div>
        <div className="items-center pl-1">
          <span>Usuarios</span>
          {historial && historial.cantidad_total_users !== undefined ? (
            <div>
              <strong>{historial.cantidad_total_users}</strong>
            </div>
          ) : (
            <div>Cargando...</div>
          )}
        </div>
      </BoxWrapper>

      <BoxWrapper>
        <div className=" items-center ">
          <FaCartShopping className="text-3xl text-[#5F27CD]" />
        </div>

        <div className="items-center pl-1">
          <span>Total insumos</span>
          {historial && historial.cantidad_total_insumos !== undefined ? (
            <div>
              <strong>{historial.cantidad_total_insumos}</strong>
            </div>
          ) : (
            <div>Cargando...</div>
          )}
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className=" items-center ">
          <BsFillDoorClosedFill className="text-3xl text-[#FF9F43]" />
        </div>
        <div className="items-center pl-1">
          <span>Total salas</span>
          {historial && historial.cantidad_total_salas !== undefined ? (
            <div>
              <strong>{historial.cantidad_total_salas}</strong>
            </div>
          ) : (
            <div>Cargando...</div>
          )}
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className=" items-center ">
          <MdProductionQuantityLimits className="text-3xl text-red-500" />
        </div>
        <div className="items-center pl-1">
          <span>Insumos críticos</span>
          {historial && historial.insumos_bajos !== undefined ? (
            <div>
              <strong>{historial.insumos_bajos}</strong>
            </div>
          ) : (
            <div>Cargando...</div>
          )}
        </div>
      </BoxWrapper>
    </div>
  );
}
function BoxWrapper({ children }) {
  return (
    <div className="flex flex-1 items-center rounded-lg bg-[#EEEEEE] p-4 dark:bg-[#1A2B38] dark:text-white">
      {children}
    </div>
  );
}

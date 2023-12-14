import React from "react";
import { BiBox } from "react-icons/bi";
import { useHistorial, useInsumos } from "../../../hooks";
import { useEffect, useState } from "react";
import { map } from "lodash";

export function InfHistorial(props) {
  const { params, onRefetch } = props;
  const { getHistorialByInsumo, historial, loading } = useHistorial();
  const { getInsumosById, insumos } = useInsumos();
  useEffect(() => {
    getHistorialByInsumo(params);
  }, []);
  useEffect(() => {
    getInsumosById(params);
  }, [onRefetch]);
  console.log(params);
  console.log("estos son los Insumos", insumos);

  return (
    <div className="overflow-x-scroll md:overflow-x-auto">
      <div className="mb-2 flex justify-center">
        <table className="dark:text-white">
          <tbody>
            {map(insumos, (ins, index) => (
              <tr key={index}>
                <tr>
                  <td className="border p-4" rowSpan="5">
                    <BiBox className="text-9xl" />
                  </td>
                  <td className="border p-4">Nombre</td>
                  <td className="border p-4">{ins.nombreIn}</td>
                </tr>
                <tr className="border">
                  <td className="border p-4">Marca</td>
                  <td className="border p-4">
                    {ins.marcaIn !== null ? ins.marcaIn : "sin marca"}
                  </td>
                </tr>
                <tr className="border">
                  <td className="border p-4">Cantidad</td>
                  <td className="border p-4">{ins.stockIn}</td>
                </tr>
                <tr className="border">
                  <td className="border p-4">Sala</td>
                  <td className="border p-4">{ins.sala_data.nombre}</td>
                </tr>

                <tr className=" border p-4">
                  <td className="border p-4">Descripción</td>
                  <td className="border p-4">
                    {ins.descripcionIn !== null
                      ? ins.descripcionIn
                      : "Insumo sin descripción"}
                  </td>
                </tr>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

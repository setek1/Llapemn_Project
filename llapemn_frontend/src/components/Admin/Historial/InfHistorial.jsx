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
    <div className="mb-2 flex justify-center">
      <table className="">
        <tbody>
          {map(insumos, (ins, index) => (
            <tr key={index}>
              <tr>
                <td className="border p-4" rowSpan="3">
                  <BiBox className="text-9xl" />
                </td>
                <td className="border p-4">Nombre</td>
                <td className="border p-4">{ins.nombreIn}</td>
              </tr>
              <tr className="border">
                <td className="border p-4">Cantidad</td>
                <td className="border p-4">{ins.stockIn}</td>
              </tr>
              <tr className="border">
                <td className="border p-4">Sala</td>
                <td className="border p-4">{ins.sala_data.nombre}</td>
              </tr>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

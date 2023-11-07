import React from "react";
import { BiBox } from "react-icons/bi";

export function InfHistorial() {
  return (
    <div className="flex justify-center ">
      <table className="">
        <tr className="">
          <td className=" border p-4" rowSpan="4">
            <BiBox className="text-9xl" />
          </td>
          <td className="border p-4">Nombre</td>
          <td className="border ">Fila 2, Columna 1</td>
        </tr>
        <tr className="border">
          <td className="border p-4">Cantidad</td>
          <td className="border p-4">Fila 2, Columna 2</td>
        </tr>
        <tr className="border">
          <td className="border p-4">Sala</td>
          <td className="border p-4">Fila 2, Columna 2</td>
        </tr>
        <tr className="border">
          <td className="border p-4">Fila 1</td>
          <td className="rounded-lg border p-4">Fila 2, Columna 2</td>
        </tr>
      </table>
    </div>
  );
}

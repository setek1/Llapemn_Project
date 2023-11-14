import React from "react";
import { BiBox } from "react-icons/bi";

export function InfHistorial(props) {
  const { historial } = props;
  console.log("historial inf", historial);
  return (
    <div className="mb-2 flex justify-center">
      <table className="">
        <tr className="">
          <td className="  border p-4" rowSpan="3">
            <BiBox className="text-9xl" />
          </td>
          <td className="border p-4 ">Nombre</td>
          <td className="border p-4">{historial[0].insumo_data.nombreIn}</td>
        </tr>
        <tr className="border">
          <td className="border p-4">Cantidad</td>
          <td className="border p-4">{historial[0].cantidad}</td>
        </tr>
        <tr className="border">
          <td className="border p-4">Sala</td>
          <td className="border p-4">{historial[0].sala_data.nombre}</td>
        </tr>
      </table>
    </div>
  );
}

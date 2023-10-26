import React from "react";
import { map } from "lodash";
import { IoBuildOutline, IoTrashBinOutline } from "react-icons/io5";

export function TableInsumos(props) {
  const { insumos } = props;
  const estadosI = {
    C: "Consuntivo",
    NC: "No Consuntivo",
  };
  return (
    <table className="mt-5  w-full ">
      <thead className="bg-[#F0F0F0]">
        <tr>
          <th className="rounded-l-lg  bg-[#F0F0F0] p-2 text-left">Nombre</th>

          <th>Stock</th>
          <th>Tipo</th>
          <th>Precio Unitario</th>
          <th>Total</th>

          <th className=" bg-[#F0F0F0]">Editar</th>
          <th className="rounded-r-lg bg-[#F0F0F0]">Eliminar</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {map(insumos, (insumo, index) => (
          <tr key={index}>
            <td className="pb-6 pr-6 pt-6 text-left">{insumo.nombreIn}</td>
            <td>{insumo.stockIn}</td>

            <td>{estadosI[insumo.tipoIn]}</td>
            <td>{insumo.precioUIn}</td>
            <td>{insumo.totalIn}</td>
            <Actions />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
function Actions() {
  return (
    <>
      <td>
        <button onClick={() => console.log("eddit")}>
          <IoBuildOutline />
        </button>
      </td>
      <td>
        <button onClick={() => console.log("borrar")}>
          <IoTrashBinOutline />
        </button>
      </td>
    </>
  );
}

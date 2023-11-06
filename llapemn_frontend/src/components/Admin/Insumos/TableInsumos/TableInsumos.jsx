import React from "react";
import { map } from "lodash";
import { IoBuildOutline, IoTrashBinOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export function TableInsumos(props) {
  const { insumos, deleteInsumos, updateInsumo } = props;
  const estadosI = {
    C: "Consuntivo",
    NC: "No Consuntivo",
  };
  return (
    <div className="overflow-x-scroll md:overflow-x-auto">
      <table className="mt-5  w-full ">
        <thead className="bg-[#F0F0F0]">
          <tr className="dark:bg-[#715084] dark:text-white">
            <th className="rounded-l-lg  bg-[#F0F0F0] p-2 text-left dark:bg-[#715084]">
              Nombre
            </th>

            <th>Stock</th>
            <th>Tipo</th>
            <th>Precio Unitario</th>
            <th>Total</th>

            <th className=" bg-[#F0F0F0] dark:bg-[#715084]">Editar</th>
            <th className="rounded-r-lg bg-[#F0F0F0] dark:bg-[#715084]">
              Eliminar
            </th>
          </tr>
        </thead>
        <tbody className="text-center dark:text-white">
          {map(insumos, (insumo, index) => (
            <tr key={index}>
              <td className="pb-6 pr-6 pt-6 text-left">
                <Link to={`/Productos/${insumo.id}`}>{insumo.nombreIn} </Link>
              </td>
              <td>{insumo.stockIn}</td>

              <td>{estadosI[insumo.tipoIn]}</td>
              <td>{insumo.precioUIn}</td>
              <td>{insumo.totalIn}</td>
              <Actions
                insumo={insumo}
                updateInsumo={updateInsumo}
                deleteInsumos={deleteInsumos}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
function Actions(props) {
  const { insumo, updateInsumo, deleteInsumos } = props;
  return (
    <>
      <td>
        <button onClick={() => updateInsumo(insumo)}>
          <IoBuildOutline />
        </button>
      </td>
      <td>
        <button onClick={() => deleteInsumos(insumo)}>
          <IoTrashBinOutline />
        </button>
      </td>
    </>
  );
}

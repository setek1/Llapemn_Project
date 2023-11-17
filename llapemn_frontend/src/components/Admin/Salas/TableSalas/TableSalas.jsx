import React from "react";
import { map } from "lodash";
import { IoBuildOutline, IoTrashBinOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export function TableSalas(props) {
  const { salas, updateSala, deleteSalas } = props;
  const estadosT = {
    DP: "Disponible",
    FS: "Fuera de Servicio",
    ER: "En Reparación",
  };
  return (
    <div className="overflow-x-scroll md:overflow-x-auto">
      <table className="mt-5  w-full ">
        <thead className="bg-[#F0F0F0] dark:bg-[#2E3C4A]">
          <tr className="dark:bg-[#2E3C4A] dark:text-white">
            <th className="rounded-l-lg  bg-[#F0F0F0] p-2 text-left dark:bg-[#2E3C4A]">
              Nombre
            </th>

            <th>Descripción</th>
            <th>Estado</th>

            <th className=" bg-[#F0F0F0] dark:bg-[#2E3C4A]">Editar</th>
            <th className="rounded-r-lg bg-[#F0F0F0] dark:bg-[#2E3C4A]">
              Eliminar
            </th>
          </tr>
        </thead>
        <tbody className="text-center dark:text-white">
          {map(salas, (sala, index) => (
            <tr key={index}>
              <td className="pb-6 pr-6 pt-6 text-left">
                <Link to={`/Salas/${sala.id}`}>{sala.nombre} </Link>
              </td>

              <td>{sala.descripcion}</td>

              <td>{estadosT[sala.estado]}</td>
              <Actions
                sala={sala}
                updateSala={updateSala}
                deleteSalas={deleteSalas}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Actions(props) {
  const { sala, updateSala, deleteSalas } = props;
  return (
    <>
      <td>
        <button onClick={() => updateSala(sala)}>
          <IoBuildOutline />
        </button>
      </td>
      <td>
        <button onClick={() => deleteSalas(sala)}>
          <IoTrashBinOutline />
        </button>
      </td>
    </>
  );
}

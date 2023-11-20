import React from "react";
import { map } from "lodash";
import { IoBuildOutline, IoTrashBinOutline } from "react-icons/io5";

export function TableEspecialista(props) {
  const { especialista, updateEspecialista, deleteEspecialista } = props;
  return (
    <div className="overflow-x-scroll md:overflow-x-auto">
      <table className="mt-5  w-full ">
        <thead className="bg-[#F0F0F0]">
          <tr className="dark:bg-[#715084] dark:text-white">
            <th className="rounded-l-lg  bg-[#F0F0F0] p-2 text-left dark:bg-[#715084]">
              Nombre
            </th>

            <th>Apellido</th>
            <th>Especialidad</th>
            <th>Codigo Médico</th>
            <th>Número telefónico</th><th> hora</th>
            <th>Derección</th>
            <th className=" bg-[#F0F0F0] dark:bg-[#715084]">Editar</th>
            <th className="rounded-r-lg bg-[#F0F0F0] dark:bg-[#715084]">
              Eliminar
            </th>
          </tr>
        </thead>
        <tbody className="text-center dark:text-white">
          {map(especialista, (especialistas, index) => (
            <tr key={index}>
              <td className="pb-6 pr-6 pt-6 text-left">{especialistas.nombre}</td>

              <td>{especialistas.apellido}</td>
              <td>{especialistas.especialidad}</td>
              <td>{especialidad.codigo_medico}</td>
              <td>{especialidad.numero_telefono}</td>
              <td>{especialidad.direccion}</td>
              <Actions
                especialista={especialistas}
                updateEspecialista={updateEspecialista}
                deleteEspecialista={deleteEspecialista}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Actions(props) {
  const { especialista, updateEspecialista, deleteEspecialista } = props;
  return (
    <>
      <td>
        <button onClick={() => updateEspecialista(especialista)}>
          <IoBuildOutline />
        </button>
      </td>
      <td>
        <button onClick={() => deleteEspecialista(especialista)}>
          <IoTrashBinOutline />
        </button>
      </td>
    </>
  );
}
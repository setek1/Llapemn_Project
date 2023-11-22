import React from "react";
import { map } from "lodash";
import { IoBuildOutline, IoTrashBinOutline } from "react-icons/io5";

export function TableCita(props) {
  const { cita, updateCita, deleteCita } = props;
  return (
    <div className="overflow-x-scroll md:overflow-x-auto">
      <table className="mt-5  w-full ">
        <thead className="bg-[#F0F0F0]">
          <tr className="dark:bg-[#715084] dark:text-white">
            <th className="rounded-l-lg  bg-[#F0F0F0] p-2 text-left dark:bg-[#715084]">
              Paciente
            </th>
            <th>Esp. primario</th>
            <th>Esp. secundario</th>
            <th>Descripción</th>
            <th>Fecha </th>
            <th>Hora</th>
            <th>Estado</th>
            <th>Sala</th>
            <th className=" bg-[#F0F0F0] dark:bg-[#715084]">Editar</th>
            <th className="rounded-r-lg bg-[#F0F0F0] dark:bg-[#715084]">
              Eliminar
            </th>
          </tr>
        </thead>
        <tbody className="text-center dark:text-white">
          {map(cita, (citas, index) => (
            <tr key={index}>
              <td className="pb-6 pr-6 pt-6 text-left">{citas.pa_data.nombre}</td>

              <td>{citas.ep_data.first_name}</td>
              <td>{citas.es_data.first_name}</td>
              <td>{citas.descripcion}</td>
              <td>{citas.fecha}</td>
              <td>{citas.hora}</td>
              <td>{citas.estado}</td>
              <td>{citas.sala_cita}</td>
              <Actions
                cita={citas}
                updateCita={updateCita}
                deleteCita={deleteCita}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Actions(props) {
  const { cita, updateCita, deleteCita } = props;
  return (
    <>
      <td>
        <button onClick={() => updateCita(cita)}>

          <IoBuildOutline />
        </button>
      </td>
      <td>
        <button onClick={() => deleteCita(cita)}>
          <IoTrashBinOutline />
        </button>
      </td>
    </>
  );
}
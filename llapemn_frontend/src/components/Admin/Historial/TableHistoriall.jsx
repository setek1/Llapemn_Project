import React from "react";
import { map } from "lodash";
import { useAuth } from "../../../hooks";
export function TableHistoriall(props) {
  const { historial } = props;
  const { auth } = useAuth();
  console.log(auth);
  console.log(historial);
  return (
    <table className="mt-5  w-full ">
      <thead className="bg-[#F0F0F0]">
        <tr>
          <th className="rounded-l-lg  bg-[#F0F0F0] p-2 text-left">Insumo</th>

          <th>Stock </th>
          <th>Fecha</th>
          <th>Descripcion</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {map(historial, (his, index) => (
          <tr key={index}>
            <td className="pb-6 pr-6 pt-6 text-left">
              {auth.me.first_name + " " + auth.me.last_name}
            </td>
            <td>{his.insumo_data.stockIn}</td>
            <td>{his.fecha}</td>
            <td>{his.descripcion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

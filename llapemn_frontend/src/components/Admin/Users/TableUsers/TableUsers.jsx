import React from "react";
import { map } from "lodash";

export function TableUsers(props) {
  const { users } = props;
  return (
    <div>
      <h1>Trabajadores</h1>
      <table className="mt-5 w-full ">
        <thead className="  bg-[#F0F0F0] ">
          <tr>
            <th className="rounded-l-lg  bg-[#F0F0F0] p-2 text-left">Nombre</th>
            <th>Email</th>
            <th>Estado</th>
            <th>Fecha de Ingreso</th>

            <th className="rounded-r-lg bg-[#F0F0F0]">Editar</th>
          </tr>
        </thead>
        <tbody>
          {map(users, (user, index) => (
            <tr key={index}>
              <td className="pb-6 pr-6 pt-6">
                {user.first_name + " " + user.last_name}
              </td>
              <td>{user.email}</td>
              <td>{user.is_staff}</td>
              <td>{user.date_joined.toString()}</td>
              <td>Boton</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

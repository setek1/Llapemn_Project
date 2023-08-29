import React from "react";
import { map } from "lodash";
import { IoBuildOutline, IoTrashBinOutline } from "react-icons/io5";
import { HeaderPage } from "../../HeaderPage";

export function TableUsers(props) {
  const { users } = props;
  return (
    <div>
      <table className="mt-5 w-full ">
        <thead className="  bg-[#F0F0F0] ">
          <tr>
            <th className="rounded-l-lg  bg-[#F0F0F0] p-2 text-left">Nombre</th>
            <th>Email</th>
            <th>Estado</th>
            <th>Fecha de Ingreso</th>

            <th className=" bg-[#F0F0F0]">Editar</th>
            <th className="rounded-r-lg bg-[#F0F0F0]">Eliminar</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {map(users, (user, index) => (
            <tr key={index}>
              <td className="pb-6 pr-6 pt-6 text-left">
                {user.first_name + " " + user.last_name}
                <br />
                Rol/Especialidad
              </td>
              <td>{user.email}</td>
              <td className="text-white">
                <span
                  className={`rounded p-1 ${
                    user.is_active ? "bg-[#59167F]" : "bg-[#AE280B]"
                  }`}
                >
                  {user.is_active ? "Activo" : "Inactivo"}
                </span>
              </td>

              <td>
                {user.date_joined.toString().split("T")[0]}
                <br />
                {user.date_joined.toString().split("T")[1].split("Z")[0]}
              </td>

              <Actions user={user} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Actions(props) {
  const { user } = props;
  return (
    <>
      <td>
        <button onClick={() => console.log(`Editar usuario ${user.id}`)}>
          <IoBuildOutline />
        </button>
      </td>
      <td>
        <button onClick={() => console.log(`Eliminar usuario ${user.id}`)}>
          <IoTrashBinOutline />
        </button>
      </td>
    </>
  );
}

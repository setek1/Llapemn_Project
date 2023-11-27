import React from "react";
import { map } from "lodash";
import { IoBuildOutline, IoTrashBinOutline } from "react-icons/io5";
import { RiEdit2Fill } from "react-icons/ri";
import { HeaderPage } from "../../HeaderPage";
import { useAuth } from "../../../../hooks";

export function TableUsers(props) {
  const { users, updateUser, deleteUser } = props;
  console.log(users);

  return (
    <div className="overflow-x-scroll  md:overflow-x-auto">
      <table className="mt-5  w-full ">
        <thead className="bg-[#F0F0F0] dark:bg-[#2E3C4A]">
          <tr className="dark:bg-[#2E3C4A] dark:text-white">
            <th className="rounded-l-lg  bg-[#F0F0F0] p-2 text-left dark:bg-[#2E3C4A]">
              Nombre
            </th>
            <th>Email</th>
            <th>Estado</th>
            <th>Fecha de Ingreso</th>

            <th className=" bg-[#F0F0F0] dark:bg-[#2E3C4A]">Editar</th>
            <th className="rounded-r-lg bg-[#F0F0F0] dark:bg-[#2E3C4A]">
              Eliminar
            </th>
          </tr>
        </thead>
        <tbody className="text-center dark:text-white">
          {map(users, (user, index) => (
            <tr key={index}>
              <td className="pb-6 pr-6 pt-6 text-left">
                {user.first_name + " " + user.last_name}
                <br />
                {user.is_staff ? "Admin" : "Trabajador"}/{user.especialidad}
              </td>
              <td>{user.email}</td>
              <td className="text-white">
                <span
                  className={`rounded p-1 ${
                    user.is_active
                      ? "bg-[#59167F] dark:bg-[#B9CC00]"
                      : "bg-[#AE280B]"
                  }`}
                >
                  {user.is_active ? "Activo" : "Inactivo"}
                </span>
              </td>

              <td>{user.fecha}</td>

              <Actions
                user={user}
                updateUser={updateUser}
                deleteUser={deleteUser}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Actions(props) {
  const { user, updateUser, deleteUser } = props;
  return (
    <>
      <td>
        <button onClick={() => updateUser(user)}>
          <RiEdit2Fill className="text-[#59167F] dark:text-[#B9CC00]" />
        </button>
      </td>
      <td>
        <button onClick={() => deleteUser(user)}>
          <IoTrashBinOutline className="text-red-500" />
        </button>
      </td>
    </>
  );
}

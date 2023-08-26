import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../../hooks";

import {
  IoAnalyticsOutline,
  IoPeople,
  IoGrid,
  IoCube,
  IoReader,
  IoLogOut,
} from "react-icons/io5";

export function SideMenu(props) {
  const { children } = props;

  return (
    <div>
      <MenuLeft />
    </div>
  );
}

function MenuLeft(props) {
  const { auth, logout } = useAuth();

  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="">
      <ul>
        {auth.me.is_staff && (
          <li>
            <NavLink
              to={"/admin"}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-2 p-4 text-2xl font-semibold text-[#59167F] transition-colors "
                  : "flex items-center gap-2 p-4 text-2xl font-semibold text-[#CDCDCD] transition-colors hover:text-[#59167F]"
              }
            >
              <IoAnalyticsOutline />
              Dashboard
            </NavLink>
          </li>
        )}
        <li>
          <NavLink
            to={"/Productos"}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 p-4 text-2xl font-semibold text-[#59167F] transition-colors "
                : "flex items-center gap-2 p-4 text-2xl font-semibold text-[#CDCDCD] transition-colors hover:text-[#59167F]"
            }
          >
            <IoGrid />
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/Trabajadores"}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 p-4 text-2xl font-semibold text-[#59167F] transition-colors "
                : "flex items-center gap-2 p-4 text-2xl font-semibold text-[#CDCDCD] transition-colors hover:text-[#59167F]"
            }
          >
            <IoPeople />
            Trabajadores
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/Salas"}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 p-4 text-2xl font-semibold text-[#59167F] transition-colors "
                : "flex items-center gap-2 p-4 text-2xl font-semibold text-[#CDCDCD] transition-colors hover:text-[#59167F]"
            }
          >
            <IoCube />
            Salas
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/Reportes"}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 p-4 text-2xl font-semibold text-[#59167F] transition-colors "
                : "flex items-center gap-2 p-4 text-2xl font-semibold text-[#CDCDCD] transition-colors hover:text-[#59167F]"
            }
          >
            <IoReader />
            Reportes
          </NavLink>
        </li>
        <li onClick={logout}>
          <NavLink className="flex items-center gap-2 p-4 text-2xl font-semibold text-[#CDCDCD] transition-colors hover:text-[#59167F]">
            <IoLogOut />
            Cerrar Sesion
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

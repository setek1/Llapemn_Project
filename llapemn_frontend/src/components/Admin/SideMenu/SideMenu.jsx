import React, { useState, useEffect } from "react";
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
const inicialStateDarkMode = localStorage.getItem("theme") === "dark";

export function SideMenu(props) {
  const { children } = props;

  return (
    <div className="">
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

  const [darkMode, setDarkMode] = useState(inicialStateDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

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
              <div className="flex flex-row items-center truncate">
                <IoAnalyticsOutline />
                <p className="truncate pl-2">Dashboard</p>
              </div>
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
            <div className="flex flex-row items-center truncate">
              <IoGrid />
              <p className="truncate pl-2">Productos</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/Inventario"}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 p-4 text-2xl font-semibold text-[#59167F] transition-colors "
                : "flex items-center gap-2 p-4 text-2xl font-semibold text-[#CDCDCD] transition-colors hover:text-[#59167F]"
            }
          >
            <div className="flex flex-row items-center truncate">
              <IoGrid />
              <p className="truncate pl-2">Inventario</p>
            </div>
          </NavLink>
        </li>
        {auth.me.is_staff && (
          <li>
            <NavLink
              to={"/Trabajadores"}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-2 p-4 text-2xl font-semibold text-[#59167F] transition-colors "
                  : "flex items-center gap-2 p-4 text-2xl font-semibold text-[#CDCDCD] transition-colors hover:text-[#59167F]"
              }
            >
              <div className="flex flex-row items-center truncate">
                <IoPeople />
                <p className="truncate pl-2">Trabajadores</p>
              </div>
            </NavLink>
          </li>
        )}
        <li>
          <NavLink
            to={"/Salas"}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 p-4 text-2xl font-semibold text-[#59167F] transition-colors "
                : "flex items-center gap-2 p-4 text-2xl font-semibold text-[#CDCDCD] transition-colors hover:text-[#59167F]"
            }
          >
            <div className="flex flex-row items-center truncate">
              <IoCube />
              <p className="truncate pl-2">Salas</p>
            </div>
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
            <div className="flex flex-row items-center truncate">
              <IoReader />
              <p className="truncate pl-2">Reportes</p>
            </div>
          </NavLink>
        </li>
        <li onClick={logout}>
          <NavLink className="flex items-center gap-2 p-4 text-2xl font-semibold text-[#CDCDCD] transition-colors hover:text-[#59167F]">
            <div className="flex flex-row items-center truncate">
              <IoLogOut />
              <p className="truncate pl-2">Cerrar Sesion</p>
            </div>
          </NavLink>
        </li>
        <li>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="relative inline-flex cursor-pointer items-center"
          >
            {darkMode ? "Desactivar" : "Activar"}
          </button>
        </li>
      </ul>
    </div>
  );
}

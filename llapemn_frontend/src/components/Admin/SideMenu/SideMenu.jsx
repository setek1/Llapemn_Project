import React, { useState } from "react";

import {
  IoAnalyticsOutline,
  IoPeople,
  IoGrid,
  IoCube,
  IoReader,
  IoMenu,
  IoClose,
} from "react-icons/io5";

export function SideMenu(props) {
  const { children } = props;
  return (
    <div>
      <MenuLeft />
      <div></div>
    </div>
  );
}

function MenuLeft(props) {
  const {} = props;
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="grid-col-1 grid min-h-screen lg:grid-cols-6">
      {/* Menu */}
      <div
        className={`fixed  top-0 ${
          sidebar ? "-left-o" : "-left-full"
        }  z-50 col-span-1 h-full w-[80%]    bg-white p-8 transition-all md:w-[40%] lg:static lg:w-full`}
      >
        <div className="p-8 text-center font-bold tracking-[4px]">
          <h1>LLapemn</h1>
        </div>
        {/* menu se utilizara por mientras la etiqueuita 'a' pero debermeos cambiarla por router dom*/}
        <div className="">
          <ul>
            <li>
              <a className="flex items-center gap-2 p-4 text-2xl font-semibold text-[#CDCDCD] transition-colors hover:text-[#59167F]">
                <IoAnalyticsOutline />
                Dashboard
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2 p-4 text-2xl font-semibold text-[#CDCDCD] transition-colors hover:text-[#59167F]">
                <IoGrid />
                Productos
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2 p-4 text-2xl font-semibold text-[#CDCDCD] transition-colors hover:text-[#59167F]">
                <IoPeople />
                Trabajadores
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2 p-4 text-2xl font-semibold text-[#CDCDCD] transition-colors hover:text-[#59167F]">
                <IoCube />
                Salas
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2 p-4 text-2xl font-semibold text-[#CDCDCD] transition-colors hover:text-[#59167F]">
                <IoReader />
                Reportes
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Boton Menu Celular */}
      <button
        onClick={handleSidebar}
        className="absolute bottom-4 right-4 block rounded-full bg-[#59167F] p-2 text-2xl text-white lg:hidden"
      >
        {sidebar ? <IoClose /> : <IoMenu />}
      </button>
      {/* Contenido */}
      <div className="col-span-5 bg-[#F0F0F0]">
        {/* Header */}
        <header className="flex items-center justify-between bg-white p-3">
          <div>
            <h1 className=" font-bold">Bienvenido</h1>
            <p className="">Nombre de la Persona</p>
          </div>
          <div>
            <h1 className=" text-right font-bold">Dia</h1>
            <p className="">xx Mes ANO</p>
          </div>
        </header>
      </div>
    </div>
  );
}

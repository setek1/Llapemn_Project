import React from "react";
import {
  IoAnalyticsOutline,
  IoPeople,
  IoGrid,
  IoCube,
  IoReader,
} from "react-icons/io5";

export function SideMenu(props) {
  const { children } = props;
  return (
    <div>
      <MenuLeft />
      <div>{children}</div>
    </div>
  );
}

function MenuLeft(props) {
  const {} = props;

  return (
    <div className="grid min-h-screen grid-cols-6">
      <div className="col-span-1 bg-white p-8">
        <div className="p-8 text-center font-bold tracking-[4px]">
          <h1>LLapemn</h1>
        </div>
        {/* menu se utilizara por mientras la etiqueuita 'a' pero debermeos cambiarla por router dom*/}
        <div>
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
      <div className="col-span-5 bg-[#F0F0F0]"></div>
    </div>
  );
}

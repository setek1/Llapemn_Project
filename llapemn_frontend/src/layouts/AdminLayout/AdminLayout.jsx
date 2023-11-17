import { LoginAdmin } from "../../pages/Admin";
import { useAuth } from "../../hooks";
import { TopMenu, SideMenu } from "../../components/Admin";
import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import logo from "../../image/logo_llapemn.png";
export function AdminLayout(props) {
  const { children } = props;
  const { auth } = useAuth();

  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  if (!auth) return <LoginAdmin />;
  return (
    <div className="grid-col-1 grid min-h-screen  lg:grid-cols-6">
      {/* Menu */}
      <div
        className={`fixed  top-0 ${
          sidebar ? "-left-o" : "-left-full"
        }  z-50 col-span-1 h-full w-[80%]    bg-white p-8 transition-all dark:bg-[#2E3C4A] md:w-[40%] lg:static lg:w-full`}
      >
        <div className=" text-center font-bold tracking-[4px]">
          <img src={logo} />
        </div>
        {/* menu se utilizara por mientras la etiqueuita 'a' pero debermeos cambiarla por router dom*/}
        <SideMenu></SideMenu>
      </div>
      {/* Boton Menu Celular */}
      <button
        onClick={handleSidebar}
        className="absolute bottom-4 right-4 block rounded-full bg-[#59167F] p-2 text-2xl text-white  dark:bg-[#661201] lg:hidden"
      >
        {sidebar ? <IoClose /> : <IoMenu />}
      </button>
      {/* Contenido */}
      <div className="col-span-5  overflow-x-auto bg-[#F0F0F0] dark:bg-[#1A2B38]">
        <TopMenu>{children}</TopMenu>
      </div>
    </div>
  );
}

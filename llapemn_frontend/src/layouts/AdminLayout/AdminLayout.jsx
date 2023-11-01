import { LoginAdmin } from "../../pages/Admin";
import { useAuth } from "../../hooks";
import { TopMenu, SideMenu } from "../../components/Admin";
import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
export function AdminLayout(props) {
  const { children } = props;
  const { auth } = useAuth();

  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  if (!auth) return <LoginAdmin />;
  return (
    <div className="grid-col-1 grid min-h-screen lg:grid-cols-6">
      {/* Menu */}
      <div
        className={`fixed  top-0 ${
          sidebar ? "-left-o" : "-left-full"
        }  z-50 col-span-1 h-full w-[80%]    bg-white p-8 transition-all dark:bg-[#59167F] md:w-[40%] lg:static lg:w-full`}
      >
        <div className="p-8 text-center font-bold tracking-[4px]">
          <h1>LLapemn</h1>
        </div>
        {/* menu se utilizara por mientras la etiqueuita 'a' pero debermeos cambiarla por router dom*/}
        <SideMenu></SideMenu>
      </div>
      {/* Boton Menu Celular */}
      <button
        onClick={handleSidebar}
        className="absolute bottom-4 right-4 block rounded-full bg-[#59167F] p-2 text-2xl text-white lg:hidden"
      >
        {sidebar ? <IoClose /> : <IoMenu />}
      </button>
      {/* Contenido */}
      <div className="col-span-5  overflow-x-auto bg-[#F0F0F0]">
        <TopMenu>{children}</TopMenu>
      </div>
    </div>
  );
}

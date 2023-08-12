import React from "react";

export function TopMenu() {
  return (
    <nav className="w-screen bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-lg font-semibold text-white">Logo</div>
        <div className="space-x-4">
          <a className="text-white hover:text-blue-300">Inicio</a>
          <a className="text-white hover:text-blue-300">Acerca</a>
          <a className="text-white hover:text-blue-300">Contacto</a>
        </div>
      </div>
    </nav>
  );
}

import React from "react";

export function SideMenu(props) {
  const { children } = props;
  return (
    <div className="flex">
      <MenuLeft />
      <div class="w-4/5 p-8">{children}</div>
    </div>
  );
}

function MenuLeft(props) {
  const {} = props;

  return (
    <div class="h-screen w-1/5 bg-gray-800 px-4 py-8 text-white">
      <div class="mb-4 text-xl font-semibold">Menú</div>
      <ul class="space-y-2">
        <li>
          <a href="#" class="hover:text-blue-500">
            Opción 1
          </a>
        </li>
        <li>
          <a href="#" class="hover:text-blue-500">
            Opción 2
          </a>
        </li>
        <li>
          <a href="#" class="hover:text-blue-500">
            Opción 3
          </a>
        </li>
      </ul>
    </div>
  );
}

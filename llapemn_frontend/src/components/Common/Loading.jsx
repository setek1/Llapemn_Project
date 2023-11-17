import React from "react";
import { FiLoader } from "react-icons/fi";
export function Loading() {
  return (
    <button
      type="button"
      className="disabled mt-3 rounded-full bg-[#59167F] p-1 text-3xl text-white dark:bg-[#B9CC00]"
    >
      <div className="flex items-center">
        <span className="mr-2">
          <FiLoader className="animate-spin" />
        </span>
        <span className="pr-1 text-2xl">Cargando...</span>
      </div>
    </button>
  );
}

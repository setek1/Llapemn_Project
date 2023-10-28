import React from "react";
import { useInsumos } from "./../../../../hooks";

export function DeleteInsumosForm(props) {
  const { deleteInsumo } = useInsumos();
  const {
    titleDelete,
    btnTitleD,
    btnClickD,
    btnTitleD2,
    btnClickD2,
    insumo,
    onClose,
    onRefetch,
  } = props;
  const handleSubmit = async (e) => {
    // Esto previene que el formulario se envíe por defecto (recargar la página)

    try {
      await deleteInsumo(insumo.id);
      // Agregar aquí el código para realizar la eliminación
      onRefetch();
      onClose();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <div>
        <h2 className="text-xl">{titleDelete}</h2>
        <span className=" border-t-2 border-gray-300">
          <hr className="mt-4 border-t-2 border-gray-300" />
        </span>
        {/* <hr className="mt-4 border-t-2 border-gray-300" /> */}
      </div>

      <div className="mt-4 flex w-full justify-between">
        {btnTitleD && (
          <button
            className="flex-grow rounded-md bg-red-700 p-2 text-white"
            type="submit"
          >
            {btnTitleD}
          </button>
        )}
        {btnTitleD2 && (
          <button
            className="ml-4 flex-grow rounded-md bg-gray-300 p-2 text-white"
            onClick={btnClickD2}
          >
            {btnTitleD2}
          </button>
        )}
      </div>
    </form>
  );
}

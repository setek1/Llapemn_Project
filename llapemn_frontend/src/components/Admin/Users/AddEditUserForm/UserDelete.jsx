import React from "react";
import { useUser } from "../../../../hooks";

export function UserDelete(props) {
  const {
    titleDelete,
    btnTitleD,
    btnClickD,
    btnTitleD2,
    btnClickD2,
    user,
    onClose,
    onRefetch,
  } = props;
  const { deleteUser } = useUser();
  const handleSubmit = async (e) => {
    // Esto previene que el formulario se envíe por defecto (recargar la página)

    try {
      await deleteUser(user.id);
      // Agregar aquí el código para realizar la eliminación
      onRefetch();
      onClose();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-4xl">{titleDelete}</h2>
        </div>

        <div>
          {btnTitleD && (
            <button
              className="rounded-md bg-red-700 p-2 text-white"
              type="submit"
            >
              {btnTitleD}
            </button>
          )}
          {btnTitleD2 && (
            <button
              className="rounded-md bg-red-700 p-2 text-white"
              onClick={btnClickD2}
            >
              {btnTitleD2}
            </button>
          )}
        </div>
      </div>
    </form>
  );
}

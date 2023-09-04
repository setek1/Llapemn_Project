import React from "react";

export function ModalBasic(props) {
  const { show, title, children, onClose, isVisible } = props;
  if (!isVisible) return null;
  return (
    // <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
    //   <div className="flex w-[600px] flex-col">
    //     <button
    //       className=" place-self-end text-xl text-white"
    //       onClick={onClose}
    //     >
    //       X
    //     </button>
    //     <div className="rounded bg-white p-2">{children}</div>
    //   </div>
    // </div>
    // <div className=" fixed inset-0 z-50 flex items-center justify-center">
    //   <div className="fixed inset-0 bg-gray-700 opacity-50"></div>
    //   <div className="z-10 w-[600px] rounded bg-white p-8">
    //     <h2 className="mb-4 text-xl font-bold">Modal Title</h2>

    //     <p>Contenido del modal...</p>
    //     <button className="mt-4 rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600">
    //       Cerrar
    //     </button>
    //   </div>
    // </div>

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-96 rounded bg-white p-6">
        <button
          className="absolute right-2 top-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        <hr className="my-4 border-t-2 border-gray-300" />
        <div className="mb-4">{children}</div>
        <hr className="my-4 border-t-2 border-gray-300" />
        {/* <div className="flex justify-end">
          <button className="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600">
            Acción
          </button>
        </div> */}
      </div>
    </div>

    // <dialog
    //   id="my_modal_3"
    //   className="modal "
    //   open={show}
    //   size="large"
    //   onClose={onClose}
    // >
    //   <form method="dialog" className="modal-box">
    //     <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
    //       ✕
    //     </button>
    //     {title && <h3 className="text-lg font-bold">{title}</h3>}
    //     <p className="py-4">Press ESC key or click on ✕ button to close</p>
    //     <div>{children}</div>
    //   </form>
    // </dialog>

    // <div
    //   className="fixed inset-0 z-50 flex items-center justify-center"
    //   open={show}
    // >
    //   <div className="fixed inset-0 bg-gray-700 opacity-50"></div>
    //   <div className="z-10 w-96 rounded bg-white p-8">
    //     <button
    //       className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
    //       // Agrega la lógica para cerrar el modal
    //     >
    //       ✕
    //     </button>
    //     <h2 className="mb-4 text-xl font-bold">Modal Title</h2>
    //     <p>Contenido del modal...</p>
    //     <button
    //       className="mt-4 rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600"
    //       // Agrega la lógica para cerrar el modal
    //     >
    //       Cerrar
    //     </button>
    //   </div>
    // </div>
  );
}

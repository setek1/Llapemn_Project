import React from "react";
import { useSalas, useHistorial } from "../../../../hooks";
import { useEffect, useState } from "react";
import { useFormik, ErrorMessage, FormikProvider, Field } from "formik";
import * as Yup from "yup";
import { map } from "lodash";

export function AddSalaHistorial(props) {
  const { salas, getSalas, loading } = useSalas();
  const { updateHistorial } = useHistorial();
  const { params, operacion } = props;
  useEffect(() => {
    getSalas();
  }, []);

  const formik = useFormik({
    initialValues: {
      operacion: operacion,
    },
    validationSchema: Yup.object(newSchame()),

    onSubmit: async (formValue) => {
      try {
        await updateHistorial(params[0].id, formValue);
        onRefetch();
        onClose();
      } catch (error) {
        console.error(error);
      }
    },
  });
  return (
    <FormikProvider value={formik}>
      <div className="mb-8 flex w-auto justify-center">
        <form onSubmit={formik.handleSubmit}>
          <div className="">
            <Field
              placeholder="asdsad"
              as="select"
              onChange={formik.handleChange}
              name="id_sala"
              className="mb-2 w-full rounded-lg border  border-[#CDCDCD] bg-white px-4  py-2 placeholder-black   focus:outline-none focus:ring-2 focus:ring-[#59167F]"
            >
              <option value="" className="invisible" hidden>
                Seleccione una sala
              </option>

              {/* <option value="" disabled>
            Seleccione un cliente
          </option> */}
              {map(salas, (sala, index) => (
                <option key={index} value={sala.id}>
                  {sala.nombre}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="descripcion"
              className="text-red-700"
              component="div"
            />
            <input
              name="operacion"
              placeholder="Operacion"
              value={formik.values.operacion}
              onChange={formik.handleChange}
              className={`hidden w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
                formik.errors.username ? "" : "mb-2"
              }`}
            />
          </div>
          <hr className="my-4 border-t-2 border-gray-300" />
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-full rounded bg-[#59167F] px-4 py-2 font-semibold text-white "
            >
              Actualizar
            </button>
          </div>
        </form>
      </div>
    </FormikProvider>
  );
}
// function initialValues(data, props) {
//   const { auth } = useAuth();

//   return {
//     id_user: auth.me.id,
//     id_insumo: data[0].id,
//     id_sala: data[0].id_sala,
//     operacion: "S",
//     descripcion: "",
//   };
// }

function newSchame() {
  return {
    id_sala: Yup.number(),
  };
}

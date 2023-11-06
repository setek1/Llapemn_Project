import React from "react";
import { useFormik, ErrorMessage, FormikProvider, Field } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import { useInsumos, useHistorial } from "../../../../hooks";
import { useEffect, useState } from "react";
import { map } from "lodash";
import { useAuth } from "../../../../hooks";

export function AddHistorial(props) {
  const { id } = useParams();
  const { auth } = useAuth();
  const { onClose, onRefetch, operacion, history } = props;
  console.log(operacion);
  const { insumos, getInsumosById } = useInsumos();
  const { addHistorial } = useHistorial();
  console.log("ID ACTUAL", auth.me.id);
  console.log(id);
  useEffect(() => {
    getInsumosById(id);
  }, []);
  console.log("aaaaaaaaaaaaaaaaaaaa");
  console.log("historial", history);
  console.log("aaaaaaaaaaaaaaaaaaaa");
  const formik = useFormik({
    initialValues: {
      id_user: auth.me.id,
      id_insumo: history[0].id,
      id_sala: history[0].id_sala,
      operacion: operacion,
      descripcion: "",
    },
    validationSchema: Yup.object(newSchame()),

    onSubmit: async (formValue) => {
      try {
        console.log(formValue);
        await addHistorial(formValue);
        onRefetch();
        onClose();
      } catch (error) {
        console.error(error);
      }
    },
    // onSubmit: (formValue) => {
    //   try {
    //     console.log("formulario enviado");
    //     console.log(formValue);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
  });
  return (
    <FormikProvider value={formik}>
      <div className="mb-8 flex w-auto justify-center">
        <form onSubmit={formik.handleSubmit}>
          <div className="">
            <input
              name="id_user"
              placeholder="Id user"
              value={formik.values.id_user}
              className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
                formik.errors.username ? "" : "mb-2"
              }`}
            />
            <span>
              <ErrorMessage
                name="id_user"
                className=" text-red-700"
                component="div"
              />
            </span>
            {/* <input
          name="estado"
          placeholder="Ingrese Estado"
          value={formik.values.estado}
          onChange={formik.handleChange}
          className="mb-2 w-full rounded-lg border  border-[#CDCDCD] bg-white px-4  py-2 placeholder-black   focus:outline-none focus:ring-2 focus:ring-[#59167F]"
        ></input> */}

            {map(insumos, (ins) => (
              <input
                name="id_sala"
                placeholder="Ingrese nombre de la Sala"
                value={formik.values.id_sala}
                onChange={formik.handleChange}
                className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
                  formik.errors.username ? "" : "mb-2"
                }`}
              />
            ))}

            <ErrorMessage
              name="id_insumo"
              className="text-red-700"
              component="div"
            />
            <input
              name="id_insumo"
              placeholder="id_insumo"
              value={formik.values.id_insumo}
              onChange={formik.handleChange}
              className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
                formik.errors.username ? "" : "mb-2"
              }`}
            />
            <input
              name="operacion"
              placeholder="Operacion"
              value={formik.values.operacion}
              onChange={formik.handleChange}
              className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
                formik.errors.username ? "" : "mb-2"
              }`}
            />

            <ErrorMessage
              name="descripcion"
              className="text-red-700"
              component="div"
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
    id_user: Yup.number(),
    id_insumo: Yup.number(),
    id_sala: Yup.number(),
    operacion: Yup.string(),
    descripcion: Yup.string(),
  };
}

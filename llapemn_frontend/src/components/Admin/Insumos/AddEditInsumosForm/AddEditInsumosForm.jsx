import React from "react";
import { useFormik, ErrorMessage, FormikProvider, Field } from "formik";
import * as Yup from "yup";
import { useInsumos, useSalas } from "../../../../hooks";
import { useEffect, useState } from "react";
import { map } from "lodash";

export function AddEditInsumosForm(props) {
  const { insumo, onClose, onRefetch } = props;
  const { addInsumo, updateInsumo } = useInsumos();
  const { getSalas, salas } = useSalas();
  useEffect(() => {
    getSalas();
  }, []);

  const formik = useFormik({
    initialValues: initialValues(insumo),
    validationSchema: Yup.object(insumo ? updateSchame() : newSchame()),

    onSubmit: async (formValue) => {
      try {
        if (insumo) {
          await updateInsumo(insumo.id, formValue);
        } else {
          await addInsumo(formValue);
        }

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
              name="nombreIn"
              placeholder="Ingrese nombre del insumo"
              value={formik.values.nombreIn}
              onChange={formik.handleChange}
              className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
                formik.errors.username ? "" : "mb-2"
              }`}
            />
            <span>
              <ErrorMessage
                name="nombreIn"
                className=" text-red-700"
                component="div"
              />
            </span>
            <Field
              placeholder="asdsad"
              as="select"
              onChange={formik.handleChange}
              name="id_sala"
              className="mb-2 w-full rounded-lg border  border-[#CDCDCD] bg-white px-4  py-2 placeholder-black   focus:outline-none focus:ring-2 focus:ring-[#59167F]"
            >
              {formik.values.id_sala ? null : (
                <option value="" disabled hidden>
                  Seleccione una sala
                </option>
              )}
              {/* <option value="" disabled>
            Seleccione un cliente
          </option> */}
              {map(salas, (sala, index) => (
                <option key={index} value={sala.id}>
                  {sala.nombre}
                </option>
              ))}
            </Field>
            <input
              name="stockIn"
              placeholder="Ingrese el stock"
              value={formik.values.stockIn}
              onChange={formik.handleChange}
              className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
                formik.errors.username ? "" : "mb-2"
              }`}
            />
            <span>
              <ErrorMessage
                name="stockIn"
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
            <Field
              value={formik.values.tipoIn}
              as="select"
              onChange={formik.handleChange}
              name="tipoIn"
              className="mb-2 w-full rounded-lg border  border-[#CDCDCD] bg-white px-4  py-2 placeholder-black   focus:outline-none focus:ring-2 focus:ring-[#59167F]"
            >
              <option value="" disabled hidden>
                Seleccione un tipo
              </option>
              <option value="C">Consuntivo</option>
              <option value="NC">No Consuntivo</option>
            </Field>
            <ErrorMessage
              name="tipoIn"
              className="text-red-700"
              component="div"
            />
            <input
              name="precioUIn"
              placeholder="Ingrese el precio unitario"
              value={formik.values.precioUIn}
              onChange={formik.handleChange}
              className="mb-2 w-full rounded-lg border  border-[#CDCDCD] bg-white px-4  py-2 placeholder-black   focus:outline-none focus:ring-2 focus:ring-[#59167F]"
            ></input>
            <ErrorMessage
              name="precioUIn"
              className="text-red-700"
              component="div"
            />

            <ErrorMessage
              name="totalIn"
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
              {insumo ? "Actualizar" : "Crear"}
            </button>
          </div>
        </form>
      </div>
    </FormikProvider>
  );
}

function initialValues(data) {
  return {
    nombreIn: data?.nombreIn || "",
    id_sala: data?.id_sala || "",
    stockIn: data?.stockIn || "",
    tipoIn: data?.tipoIn || "",
    precioUIn: data?.precioUIn || "",
  };
}
function newSchame() {
  return {
    nombreIn: Yup.string().required(
      "Por favor ingrese un nombre para el insumo",
    ),
    stockIn: Yup.string().required("Por favor ingrese el stock"),
    tipoIn: Yup.string().required("Por favor ingrese un tipo"),
    precioUIn: Yup.number().required("Por favor ingrese un precio"),
  };
}
function updateSchame() {
  return {
    nombreIn: Yup.string().required(),
    stockIn: Yup.string().required(),
    tipoIn: Yup.string().required(),
    precioUIn: Yup.number().required(),
  };
}

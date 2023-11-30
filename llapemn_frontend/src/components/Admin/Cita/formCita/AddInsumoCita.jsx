import React from "react";
import { useInsumos, useAuth, useHistorial } from "../../../../hooks";
import { useEffect, useState } from "react";
import { map } from "lodash";
import { useFormik, ErrorMessage, FormikProvider, Field } from "formik";
import * as Yup from "yup";

export function AddInsumoCita(props) {
  const { loading, insumos, getInsumosBySala } = useInsumos();
  const { citas, operacion } = props;
  const [refetch, setRefetch] = useState(false);
  const onRefetch = () => setRefetch((prev) => !prev);
  const { addHistorial, getHistorialByCita, historial } = useHistorial();

  const { auth } = useAuth();
  useEffect(() => {
    getInsumosBySala(citas.sala_cita);
  }, []);
  useEffect(() => {
    getHistorialByCita(citas.id);
  }, [refetch]);
  console.log("Insumos en salas", insumos);
  console.log("Historialbycita", historial);

  const formik = useFormik({
    initialValues: {
      id_user: auth.me.id,
      id_cita: citas.id,
      id_insumo: "",
      id_sala: citas.sala_cita,
      operacion: operacion,
      cantidad: "",
      cantidadU: 0,
      descripcion: "",
    },
    validationSchema: Yup.object(newSchame()),

    onSubmit: async (formValue) => {
      try {
        console.log(formValue);
        await addHistorial(formValue);
        onRefetch();
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
    <>
      <FormikProvider value={formik}>
        <div className="mb-8 flex w-auto justify-center">
          <form onSubmit={formik.handleSubmit}>
            <div className="">
              <input
                name="id_user"
                placeholder="Id user"
                value={formik.values.id_user}
                className={`hidden w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
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
              <input
                name="id_cita"
                placeholder="Id user"
                value={formik.values.id_user}
                className={`hidden w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
                  formik.errors.username ? "" : "mb-2"
                }`}
              />
              <span>
                <ErrorMessage
                  name="id_cita"
                  className=" text-red-700"
                  component="div"
                />
              </span>
              <input
                name="id_sala"
                placeholder="Ingrese nombre de la sala"
                value={formik.values.id_sala}
                onChange={formik.handleChange}
                className={`hidden w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
                  formik.errors.username ? "" : "mb-2"
                }`}
              />

              <ErrorMessage
                name="id_insumo"
                className="text-red-700"
                component="div"
              />
              <Field
                placeholder="Seleccione el paciente"
                as="select"
                onChange={formik.handleChange}
                name="id_insumo"
                className="mb-2 w-full rounded-lg border  border-[#CDCDCD] bg-white px-4  py-2 placeholder-black   focus:outline-none focus:ring-2 focus:ring-[#59167F]"
              >
                <option value="" disabled hidden>
                  Seleccione un insumo
                </option>

                {insumos && insumos.length === 0 ? (
                  <option value="" disable>
                    {" "}
                    No hay insumos en sala
                  </option>
                ) : (
                  <>
                    {map(insumos, (ins, index) => (
                      <option key={index} value={ins.id}>
                        {ins.nombreIn}
                        {
                          "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"
                        }
                        {"Cantidad en sala:"}
                        {ins.stockIn}
                      </option>
                    ))}
                  </>
                )}
              </Field>
              <input
                name="cantidad"
                placeholder="Cantidad"
                value={formik.values.cantidad}
                onChange={formik.handleChange}
                className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
                  formik.errors.username ? "" : "mb-2"
                }`}
              />
              <ErrorMessage
                name="cantidad"
                className="text-red-700"
                component="div"
              />
              <input
                name="cantidaU"
                placeholder="Cantidad"
                value={formik.values.cantidadU}
                onChange={formik.handleChange}
                className={`hidden w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
                  formik.errors.username ? "" : "mb-2"
                }`}
              />

              <input
                name="operacion"
                placeholder="Operación"
                value={formik.values.operacion}
                onChange={formik.handleChange}
                className={`hidden w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
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
                Agregar
              </button>
            </div>
          </form>
        </div>
      </FormikProvider>
      <div className="text-center font-bold">
        <h1>Insumos utilizados en sesion</h1>
      </div>
      <table className="mt-5  w-full dark:text-white">
        <thead className="bg-[#F0F0F0] dark:bg-[#2E3C4A]">
          <tr className="dark:bg-[#2E3C4A]">
            <th className="rounded-l-lg  bg-[#F0F0F0] p-2 text-center dark:bg-[#2E3C4A]">
              Nombre Insumo
            </th>

            <th className="rounded-r-lg">Cantidad Utilizada</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {historial && historial.length === 0 ? (
            <tr>
              <td className="pb-6 pt-6">
                No se han utilzados insumos en esta cita
              </td>

              <td>-</td>
            </tr>
          ) : (
            <>
              {map(historial, (hist, index) => (
                <tr key={index}>
                  <td className="pb-6 pt-6">{hist.insumo_data.nombreIn}</td>

                  <td>{hist.cantidadU}</td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </>
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
    id_cita: Yup.number(),
    cantidad: Yup.string()
      .matches(/^[0-9]+$/, "Por favor solo ingrese números")
      .required("La cantidad debe ser un número."),
    id_insumo: Yup.number().required("Ingrese un Insumo"),
    id_sala: Yup.number(),
    operacion: Yup.string(),
    descripcion: Yup.string(),
  };
}

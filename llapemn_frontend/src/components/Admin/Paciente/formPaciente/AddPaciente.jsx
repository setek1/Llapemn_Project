import React from 'react'
import { useFormik, ErrorMessage, FormikProvider, Field } from "formik";
import * as Yup from "yup";
import { usePaciente } from "../../../../hooks";

export function AddPaciente(props) {
    const { pacientes, onClose, onRefetch } = props;
    const {addPaciente,updatePaciente } = usePaciente();
    const formik = useFormik({
        initialValues: initialValues(pacientes),
        validationSchema: Yup.object(pacientes ? updateSchame() : newSchame()),

        onSubmit: (formValue) => {
            try {
        //if (pacientes) {
        //   await updatePaciente(pacientes.id, formValue);
        //} else {
                console.log("a");
        //}

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
              name="nombre"
              placeholder="Ingrese el nombre del paciente"
              value={formik.values.nombre}
              onChange={formik.handleChange}
              className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
                formik.errors.username ? "" : "mb-2"
              }`}
            />
            <span>
              <ErrorMessage
                name="nombre"
                className=" text-red-700"
                component="div"
              />
            </span>

            <input
              name="apellido"
              placeholder="Ingrese el apellido del paciente"
              value={formik.values.apellido}
              onChange={formik.handleChange}
              className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
                formik.errors.username ? "" : "mb-2"
              }`}
            />
            <span>
              <ErrorMessage
                name="apellido"
                className=" text-red-700"
                component="div"
              />
            </span>

            <input
              name="dni"
              placeholder="Ingrese el dni del paciente"
              value={formik.values.dni}
              onChange={formik.handleChange}
              className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
                formik.errors.username ? "" : "mb-2"
              }`}
            />
            <span>
              <ErrorMessage
                name="dni"
                className=" text-red-700"
                component="div"
              />
            </span>

            <input
              name="fecha_nacimiento"
              placeholder="Ingrese la fecha de nacimiento del paciente"
              value={formik.values.fecha_nacimiento}
              onChange={formik.handleChange}
              className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
                formik.errors.username ? "" : "mb-2"
              }`}
            />
            <span>
              <ErrorMessage
                name="fecha_nacimiento"
                className=" text-red-700"
                component="div"
              />
            </span>

            <input
              name="genero"
              placeholder="Ingrese el genero del paciente"
              value={formik.values.genero}
              onChange={formik.handleChange}
              className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
                formik.errors.username ? "" : "mb-2"
              }`}
            />
            <span>
              <ErrorMessage
                name="genero"
                className=" text-red-700"
                component="div"
              />
            </span>

            <input
              name="direccion"
              placeholder="Ingrese la direccion del paciente"
              value={formik.values.direccion}
              onChange={formik.handleChange}
              className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
                formik.errors.username ? "" : "mb-2"
              }`}
            />
            <span>
              <ErrorMessage
                name="direccion"
                className=" text-red-700"
                component="div"
              />
            </span>

            <input
              name="telefono"
              placeholder="Ingrese el teléfono del paciente"
              value={formik.values.telefono}
              onChange={formik.handleChange}
              className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
                formik.errors.username ? "" : "mb-2"
              }`}
            />
            <span>
              <ErrorMessage
                name="telefono"
                className=" text-red-700"
                component="div"
              />
            </span>

            <input
              name="email"
              placeholder="Ingrese el email del paciente"
              value={formik.values.email}
              onChange={formik.handleChange}
              className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
                formik.errors.username ? "" : "mb-2"
              }`}
            />
            <span>
              <ErrorMessage
                name="email"
                className=" text-red-700"
                component="div"
              />
            </span>

            <input
              name="altura"
              placeholder="Ingrese la altura del paciente"
              value={formik.values.altura}
              onChange={formik.handleChange}
              className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
                formik.errors.username ? "" : "mb-2"
              }`}
            />
            <span>
              <ErrorMessage
                name="altura"
                className=" text-red-700"
                component="div"
              />
            </span>

            <input
              name="peso"
              placeholder="Ingrese el peso del paciente"
              value={formik.values.peso}
              onChange={formik.handleChange}
              className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
                formik.errors.username ? "" : "mb-2"
              }`}
            />
            <span>
              <ErrorMessage
                name="peso"
                className=" text-red-700"
                component="div"
              />
            </span>

            <input
              name="edad"
              placeholder="Ingrese la edad del paciente"
              value={formik.values.edad}
              onChange={formik.handleChange}
              className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
                formik.errors.username ? "" : "mb-2"
              }`}
            />
            <span>
              <ErrorMessage
                name="edad"
                className=" text-red-700"
                component="div"
              />
            </span>

            <ErrorMessage
              name="estado"
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
              {pacientes ? "Actualizar" : "Crear"}
            </button>
          </div>
        </form>
      </div>
    </FormikProvider>
﻿

  )
}
function initialValues(data) {
    return {
      nombre: data?.nombre ||  "",
      apellido: data?.apellido ||  "",
      dni: data?.dni || "",
      fecha_nacimiento: data?.dni || "",
      genero: data?.genero || "",
      direccion: data?.direccion || "",
      telefono : data?.telefono || "",
      email : data?.email || "",
      altura : data?.altura || "",
      peso : data?.peso || "",
      edad : data?.edad || "",
    };
  }
  function newSchame() {
    return {
      nombre: Yup.string().required("Porfavor Ingrese un nombre para la sala"),
      descripcion: Yup.string().required(
        "Porfavor Ingrese un Descripcion de la sala",
      ),
      estado: Yup.string().required("Porfavor Ingrese un Estado"),
    };
  }
  function updateSchame() {
    return {
      nombre: Yup.string().required(true),
      descripcion: Yup.string().required(true),
      estado: Yup.string(),
    };
  }


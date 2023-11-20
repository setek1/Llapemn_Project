import React from "react";
import { useFormik, ErrorMessage, FormikProvider, Field } from "formik";
import * as Yup from "yup";
import { useEspecialista } from "../../../../hooks";
import {useEffect} from 'react'
import { map } from "lodash";

export function AddEspecialista(props) {
    const { especialistas, onClose, onRefetch } = props;
    const{getEspecialista,especialista}=useEspecialista();

    const { addEspecialista, updateEspecilista} = useEspecialista();
    
    
    const formik = useFormik({
      initialValues: initialValues(especialistas),
      validationSchema: Yup.object(especialistas ? updateSchame() : newSchame()),
  
      // onSubmit: (formValue) => {
      //   try {
      //     //if (pacientes) {
      //     //   await updatePaciente(pacientes.id, formValue);
      //     //} else {
      //     console.log("a");
      //     //}
  
      //     onRefetch();
      //     onClose();
      //   } catch (error) {
      //     console.error(error);
      //   }
      // },
      onSubmit: async (formValue) => {
        try {
          if (especialistas) {
            await updateEspecialista(especialista.id, formValue);
          } else {
            await addEspecialista(formValue);
            
          }
  
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
            <input
                name="nombre"
                placeholder="Ingrese el nombre del especialista"
                value={formik.values.nombre}
                onChange={formik.handleChange}
                className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] p-2 mb-3 ${
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
                placeholder="Ingrese el apellido del especialista"
                value={formik.values.apellido}
                onChange={formik.handleChange}
                className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] p-2 mb-3 ${
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
              <Field
                value={formik.values.especialidad}
                as="select"
                onChange={formik.handleChange}
                name="especialidad"
                className="mb-2 w-full rounded-lg border  border-[#CDCDCD] bg-white px-4  py-2 placeholder-black   focus:outline-none focus:ring-2 focus:ring-[#59167F]"
              >
                <option value="" disabled hidden>
                  Seleccione la especialidad
                </option>
                <option value="PSI">Psicología</option>
                <option value="TER">Terapia ocupacional</option>
                <option value="PSIPE">Psicopedagogía</option>
                <option value="PSIQ">Psiquiatría</option>
                <option value="MAS">Masoterapia</option>
                <option value="TC">Terapia complementaria</option>
                <option value="NUT">Nutricionista</option>
                <option value="BIO">Biodanza</option>
              </Field>
              <ErrorMessage
                name="especialidad"
                className="text-red-700"
                component="div"
              />
              <input
                name="codigo_medico"
                placeholder="Ingrese el codigo de médico"
                value={formik.values.codigo_medico}
                onChange={formik.handleChange}
                className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] p-2 mb-3 ${
                formik.errors.username ? "" : "mb-2"
              }`}
              />
              <span>
              <ErrorMessage
                name="codigo_medico"
                className=" text-red-700"
                component="div"
              />
              </span>
              <input
                name="numero_telefono"
                placeholder="Ingrese el número telefónico del especialista"
                value={formik.values.numero_telefono}
                onChange={formik.handleChange}
                className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] p-2 mb-3 ${
                formik.errors.username ? "" : "mb-2"
              }`}
              />
              <span>
              <ErrorMessage
                name="numero_telefono"
                className=" text-red-700"
                component="div"
              />
              </span>
              <textarea
              
              name="direccion"
              placeholder="Ingrese la dirección del especialista"
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
            <hr className="my-4 border-t-2 border-gray-300" />
            <div className="flex justify-end">
              <button
                type="submit"
                className="w-full rounded bg-[#59167F] px-4 py-2 font-semibold text-white "
              >
                {especialista ? "Actualizar" : "Crear"}
              </button>
            </div>
            </div>
          </form>
        </div>
      </FormikProvider>
    );
  }
  function initialValues(data) {
    return {
      nombre: data?.nombre || "",
      apellido: data?.apellido || "",
      especialidad: data?.especialidad || "",
      codigo_medico: data?.codigo_medico || "",
      numero_telefono: data?.numero_telefono || "",
      direccion: data?.direccion || "",
    };
  
  }
  function newSchame() {
    return {
      nombre: Yup.string().required("Por favor, ponga un nombre"),
      Apellido: Yup.string().required(""),
      especialidad: Yup.string(),
      codigo_medico: Yup.string(),
      numero_telefono: Yup.string(),
      direccion: Yup.string(),
    };
  }
  function updateSchame() {
    return {};
  }
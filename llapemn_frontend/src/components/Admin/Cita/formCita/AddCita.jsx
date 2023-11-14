import React from "react";
import { useFormik, ErrorMessage, FormikProvider, Field } from "formik";
import * as Yup from "yup";
import { useCita, usePaciente,useUser,useSalas } from "../../../../hooks";
import {useEffect} from 'react'
import { map } from "lodash";

export function AddCita(props) {
  const { citas, onClose, onRefetch } = props;
  const{getPaciente,paciente}=usePaciente();
  const{getUsers,users}=useUser();
  const{getSalas,salas}=useSalas();
  const { addCita, updateCita} = useCita();
  useEffect(() => {
    getPaciente()
    
  }, [])
  useEffect(() => {
    getUsers()
    
  }, [])
  useEffect(() => {
    getSalas()
    
  }, [])
  
  const formik = useFormik({
    initialValues: initialValues(citas),
    validationSchema: Yup.object(citas ? updateSchame() : newSchame()),

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
        if (citas) {
          await updateCita(citas.id, formValue);
        } else {
          await addCita(formValue);
          
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
          <Field
              placeholder="Seleccione el paciente"
              as="select"
              onChange={formik.handleChange}
              name="nombre_paciente"
              className="mb-2 w-full rounded-lg border  border-[#CDCDCD] bg-white px-4  py-2 placeholder-black   focus:outline-none focus:ring-2 focus:ring-[#59167F]"
            >
              {formik.values.nombre_paciente ? null : (
                <option value="" disabled hidden>
                  Seleccione el paciente
                </option>
              )}
              {/* <option value="" disabled>
            Seleccione un cliente
          </option> */}
              {map(paciente, (paciente, index) => (
                <option key={index} value={paciente.id}>
                  {paciente.nombre}
                </option>
              ))}
            </Field>
            <span>
              <ErrorMessage
                name="nombre_paciente"
                className=" text-red-700"
                component="div"
              />
            </span>

            <Field
              placeholder="Seleccione el especialista"
              as="select"
              onChange={formik.handleChange}
              name="especialista_primario"
              className="mb-2 w-full rounded-lg border  border-[#CDCDCD] bg-white px-4  py-2 placeholder-black   focus:outline-none focus:ring-2 focus:ring-[#59167F]"
            >
              {formik.values.especialista_primario ? null : (
                <option value="" disabled hidden>
                  Seleccione el especialista
                </option>
              )}
              {/* <option value="" disabled>
            Seleccione un cliente
          </option> */}
              {map(users, (user, index) => (
                <option key={index} value={user.id}>
                  {user.first_name +" "+user.last_name}
                </option>
              ))}
            </Field>
            <span>
              <ErrorMessage
                name="especialista_primario"
                className=" text-red-700"
                component="div"
              />
            </span>

            <Field
              placeholder="Seleccione el especialista secundario"
              as="select"
              onChange={formik.handleChange}
              name="especialista_secundario"
              className="mb-2 w-full rounded-lg border  border-[#CDCDCD] bg-white px-4  py-2 placeholder-black   focus:outline-none focus:ring-2 focus:ring-[#59167F]"
            >
              {formik.values.especialista_secundario ? null : (
                <option value="" disabled hidden>
                  Seleccione el especialista secundario
                </option>
              )}
              {/* <option value="" disabled>
            Seleccione un cliente
          </option> */}
              {map(users, (user, index) => (
                <option key={index} value={user.id}>
                  {user.first_name +" "+user.last_name}
                </option>
              ))}
            </Field>
            <span>
              <ErrorMessage
                name="especialista_secundario"
                className=" text-red-700"
                component="div"
              />
            </span>

            

            <input
              type="datetime-local"
              name="fecha_hora"
              placeholder="Ingrese la fecha y hora de la cita"
              value={formik.values.fecha_hora}
              onChange={formik.handleChange}
              className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
                formik.errors.username ? "" : "mb-2"
              }`}
            />
            <span>
              <ErrorMessage
                name="fecha_hora"
                className=" text-red-700"
                component="div"
              />
            </span>

            <Field
              value={formik.values.estado}
              as="select"
              onChange={formik.handleChange}
              name="estado"
              className="mb-2 w-full rounded-lg border  border-[#CDCDCD] bg-white px-4  py-2 placeholder-black   focus:outline-none focus:ring-2 focus:ring-[#59167F]"
            >
              <option value="" disabled hidden>
                Seleccione un Estado
              </option>
              <option value="programada">Programada</option>
              <option value="completada">Completada</option>
              <option value="cancelada">Cancelada</option>
              <option value="cambiada">Cambiada</option>
            </Field>
            <ErrorMessage
              name="estado"
              className="text-red-700"
              component="div"
            />
            <span>
              <ErrorMessage
                name="estado"
                className=" text-red-700"
                component="div"
              />
            </span>
            <textarea
              
              name="descripcion"
              placeholder="Ingrese la descripcion de la cita"
              value={formik.values.fecha_nacimiento}
              onChange={formik.handleChange}
              className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
                formik.errors.username ? "" : "mb-2"
              }`}
            />
            <span>
              <ErrorMessage
                name="descripcion"
                className=" text-red-700"
                component="div"
              />
            </span>
            <Field
              placeholder="Seleccione la sala"
              as="select"
              onChange={formik.handleChange}
              name="sala_cita"
              className="mb-2 w-full rounded-lg border  border-[#CDCDCD] bg-white px-4  py-2 placeholder-black   focus:outline-none focus:ring-2 focus:ring-[#59167F]"
            >
              {formik.values.sala_cita ? null : (
                <option value="" disabled hidden>
                  Seleccione la sala
                </option>
              )}
              {/* <option value="" disabled>
            Seleccione un cliente
          </option> */}
              {map(salas, (sala, index) => (
                <option key={index} value={sala.nombre}>
                  {sala.nombre}
                </option>
              ))}
            </Field>
            
          </div>
          <hr className="my-4 border-t-2 border-gray-300" />
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-full rounded bg-[#59167F] px-4 py-2 font-semibold text-white "
            >
              {citas ? "Actualizar" : "Crear"}
            </button>
          </div>
        </form>
      </div>
    </FormikProvider>
  );
}
function initialValues(data) {
  return {
    nombre_paciente: data?.nombre_paciente || "",
    especialista_primario: data?.especialista_primario || "",
    especialista_secundario: data?.especialista_secundario || "",
    descripcion: data?.descripcion || "",
    fecha_hora: data?.fecha_hora || "",
    estado: data?.estado || "",
    sala_cita: data?.sala_cita || "",
  };

}
function newSchame() {
  return {
    nombre_paciente: Yup.string().required("Por favor, ponga un nombre"),
    especialista_primario: Yup.string(),
    especialista_secundario: Yup.string(),
    descripcion: Yup.string(),
    fecha_hora: Yup.string(),
    estado: Yup.string(),
    sala_cita: yupToFormErrors.string(),
  };
}
function updateSchame() {
  return {};
}
import React from "react";
import { useFormik, ErrorMessage, FormikProvider, Field } from "formik";
import * as Yup from "yup";
import { useCita, usePaciente, useUser, useSalas } from "../../../../hooks";
import { useAuth } from "../../../../hooks";
import { AddPaciente } from "../../Paciente/formPaciente/AddPaciente";
import { ModalPaciente2 } from "../../../Common";
import { useEffect } from "react";
import { map } from "lodash";
import { useState } from "react";

export function AddCita(props) {
  const { citas, onClose, onRefetch } = props;
  const { getPaciente, paciente } = usePaciente();
  const { getUsers, users } = useUser();
  const { getSalas, salas } = useSalas();
  const { addCita, updateCita } = useCita();
  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState(null);

  const openCloseModal = () => setShowModal((prev) => !prev);

  const addPacienteModal = () => {
    setContentModal(
      <AddPaciente onClose={openCloseModal} onRefetch={onRefetch} />,
    );
    openCloseModal();
  };

  useEffect(() => {
    getPaciente();
  }, []);

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    getSalas();
  }, []);

  const formik = useFormik({
    initialValues: initialValues(citas),
    validationSchema: Yup.object(citas ? updateSchame() : newSchame()),

    onSubmit: async (formValue) => {
      try {
        console.log("Formulario enviado:", formValue);
        console.log("ID de la cita:", citas?.id);

        const horaCompleta = `${formValue.hora}:${formValue.minutos}`;
        const horaFinCompleta = `${formValue.hora_fin}:${formValue.minutos_fin}`;

        const citaData = {
          ...formValue,
          hora: horaCompleta,
          hora_fin: horaFinCompleta,
        };

        console.log("Datos de la cita a guardar/actualizar:", citaData);

        if (citas?.id) {
          console.log("Actualizando cita existente:", citas.id);
          await updateCita(citas.id, formValue);
        } else {
          console.log("Agregando nueva cita");
          await addCita(formValue);
        }

        onRefetch();
        onClose();
      } catch (error) {
        console.error("Error al agregar/actualizar la cita:", error);
      }
    },
  });

  return (
    <FormikProvider value={formik}>
      <div style={{ maxHeight: "800px", overflowY: "scroll" }}>
        <div className="mb-8 flex w-auto justify-center">
          {showModal && (
            <ModalPaciente2
              isVisible={showModal}
              onClose={openCloseModal}
              title={"Agregar nuevo paciente"}
              children={contentModal}
            />
          )}
          <form onSubmit={formik.handleSubmit}>
            <div className="">
              <label
                htmlFor="nombre_paciente"
                className="block text-lg font-bold text-gray-700"
              >
                Seleccione al paciente:
              </label>
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

              <label
                htmlFor="nombre_paciente"
                className="block text-sm  font-medium text-gray-700"
              >
                Crear un nuevo paciente
              </label>

              <button
                onClick={addPacienteModal}
                type="button"
                className="mb-2 w-full rounded-lg border  border-[#CDCDCD] bg-white px-4  py-2 placeholder-black   focus:outline-none focus:ring-2 focus:ring-[#59167F]"
              >
                Crear nuevo paciente
              </button>

              <label
                htmlFor="especialista_primario"
                className="block text-lg font-bold text-gray-700"
              >
                Seleccione al especialista primario:
              </label>

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
                    {user.first_name + " " + user.last_name}
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

              <label
                htmlFor="especialista_secundario"
                className="block text-lg font-bold text-gray-700"
              >
                Seleccione al especialista secundario:
              </label>

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
                    {user.first_name + " " + user.last_name}
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

              <label
                htmlFor="fecha"
                className="block text-lg font-bold text-gray-700"
              >
                Seleccione el dia de la cita
              </label>

              <input
                type="date"
                name="fecha"
                placeholder="Ingrese la fecha de la cita"
                value={formik.values.fecha}
                onChange={formik.handleChange}
                className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
                  formik.errors.username ? "" : "mb-2"
                }`}
              />
              <span>
                <ErrorMessage
                  name="fecha"
                  className=" text-red-700"
                  component="div"
                />
              </span>
              <div className="mb-2 flex">
                <div className="w-1/2">
                  <label htmlFor="hora">Hora de inicio:</label>
                  <div className="flex">
                    <select
                      name="hora"
                      onChange={formik.handleChange}
                      value={formik.values.hora.split(":")[0]}
                      className="w-1/2 rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F]"
                    >
                      <option value="" disabled>
                        Seleccione la hora
                      </option>
                      {Array.from({ length: 13 }, (_, i) => {
                        // De 08 a 20 horas
                        const hour = i + 8; // Comenzar desde las 08:00
                        return (
                          <option
                            key={hour}
                            value={`${hour < 10 ? "0" + hour : hour}`}
                          >
                            {`${hour < 10 ? "0" + hour : hour}`}
                          </option>
                        );
                      })}
                    </select>

                    <select
                      name="minutos"
                      onChange={(e) => {
                        const selectedMinutes = e.target.value;
                        const currentHour = formik.values.hora.split(":")[0];
                        formik.setFieldValue(
                          "hora",
                          `${currentHour}:${selectedMinutes}`,
                        );
                      }}
                      value={formik.values.hora.split(":")[1]}
                      className="w-1/2 rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F]"
                    >
                      {Array.from({ length: 60 }, (_, i) => (
                        <option key={i} value={`${i < 10 ? "0" : ""}${i}`}>
                          {`${i < 10 ? "0" : ""}${i}`}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="w-1/2">
                  <label htmlFor="hora_fin">Hora de finalización:</label>
                  <div className="flex">
                    <select
                      name="hora_fin"
                      onChange={formik.handleChange}
                      value={formik.values.hora_fin.split(":")[0]}
                      className="w-1/2 rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F]"
                    >
                      <option value="" disabled>
                        Seleccione la hora
                      </option>
                      {Array.from({ length: 14 }, (_, i) => {
                        // De 08 a 21 horas
                        const hour = i + 8; // Comenzar desde las 08:00
                        return (
                          <option
                            key={hour}
                            value={`${hour < 10 ? "0" + hour : hour}`}
                          >
                            {`${hour < 10 ? "0" + hour : hour}`}
                          </option>
                        );
                      })}
                    </select>
                    <span className="mx-1">:</span>
                    <select
                      name="minutos_fin"
                      onChange={(e) => {
                        const selectedMinutesFin = e.target.value;
                        const currentHourFin =
                          formik.values.hora_fin.split(":")[0];
                        formik.setFieldValue(
                          "hora_fin",
                          `${currentHourFin}:${selectedMinutesFin}`,
                        );
                      }}
                      value={formik.values.hora_fin.split(":")[1]}
                      className="w-1/2 rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F]"
                    >
                      <option value="" disabled>
                        Minutos
                      </option>
                      {Array.from({ length: 60 }, (_, i) => (
                        <option key={i} value={`${i < 10 ? "0" : ""}${i}`}>{`${
                          i < 10 ? "0" : ""
                        }${i}`}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <label
                htmlFor="estado"
                className="block text-lg font-bold text-gray-700"
              >
                Seleccione el estado de la cita actual:
              </label>

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

              <label
                htmlFor="descripcion"
                className="block text-lg font-bold text-gray-700"
              >
                Ingrese una descripción sobre la cita
              </label>

              <input
                name="descripcion"
                placeholder="Ingrese la descripción de la cita"
                value={formik.values.descripcion}
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

              <label
                htmlFor="diagnostico"
                className="block text-lg font-bold text-gray-700"
              >
                Escriba un diagnostico sobre la cita hecha
              </label>

              <textarea
                name="diagnostico"
                placeholder="Ingrese el diagnostico de la cita"
                value={formik.values.diagnostico}
                onChange={formik.handleChange}
                className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
                  formik.errors.username ? "" : "mb-2"
                }`}
              />
              <span>
                <ErrorMessage
                  name="diagnostico"
                  className=" text-red-700"
                  component="div"
                />
              </span>

              <label
                htmlFor="sala_cita"
                className="block text-lg font-bold text-gray-700"
              >
                Seleccione una sala para la cita
              </label>

              <Field
                as="select"
                onChange={formik.handleChange}
                name="sala_cita"
                className="mb-2 w-full rounded-lg border  border-[#CDCDCD] bg-white px-4  py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F]"
              >
                {formik.values.sala_cita ? null : (
                  <option value="" disabled hidden>
                    Seleccione la sala
                  </option>
                )}
                {salas &&
                  salas.map((sala) => (
                    <option key={sala.id} value={sala.id}>
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
      </div>
    </FormikProvider>
  );
}
function initialValues(data) {
  //console.log("Valores iniciales del formulario:", data);
  return {
    nombre_paciente: data?.nombre_paciente || "",
    especialista_primario: data?.especialista_primario || "",
    especialista_secundario: data?.especialista_secundario || "",
    descripcion: data?.descripcion || "",
    fecha: data?.fecha || "",
    hora: data?.hora || "00:00",
    estado: data?.estado || "",
    sala_cita: data?.sala_cita || "",
    hora_fin: data?.hora_fin || "00:00",
    diagnostico: data?.diagnostico || "",
    minutos: data?.minutos || "00",
    minutos_fin: data?.minutos_fin || "00",
  };
}
function newSchame() {
  return {
    nombre_paciente: Yup.string(), //.required("Por favor, ponga un nombre")
    especialista_primario: Yup.string(), //.required("Seleccione el especialista primario")
    especialista_secundario: Yup.string(),
    //.notOneOf([Yup.ref('especialista_primario')], "El especialista secundario no puede ser el mismo que el primario")
    descripcion: Yup.string(),
    fecha: Yup.string(),
    hora: Yup.string(),
    //.matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Ingrese una hora válida en formato HH:mm")
    //.matches(/^(0[8-9]|1[0-9]|20):[0-5][0-9]$/, "La hora debe estar entre las 08:00 y las 20:59")
    //.required("La hora es obligatoria")
    hora_fin: Yup.string(),
    //.matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Ingrese una hora válida en formato HH:mm")
    //.matches(/^(0[8-9]|1[0-9]|2[0-1]):[0-5][0-9]$/, "La hora de finalización debe estar entre las 08:00 y las 21:00")
    //.required("La hora de finalización es obligatoria")
    //.test(
    //  'is-greater',
    //  'La hora de finalización debe ser posterior a la hora de inicio',
    //  function (value) {
    //    const { hora } = this.parent;
    //    return value && hora && value > hora;
    //  }
    //),
    estado: Yup.string(),
    sala_cita: Yup.string(),
    diagnostico: Yup.string(),
  };
}
function updateSchame() {
  return {};
}

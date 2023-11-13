import React from "react";
import { useFormik, ErrorMessage, FormikProvider, Field } from "formik";
import * as Yup from "yup";
import { usePaciente } from "../../../../hooks";
export function AddPaciente(props) {
  const { pacientes, onClose, onRefetch } = props;
  const { addPaciente, updatePaciente } = usePaciente();
  const formik = useFormik({
    initialValues: initialValues(pacientes),
    validationSchema: Yup.object(pacientes ? updateSchame() : newSchame()),
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
    if (pacientes) {
      await updatePaciente(pacientes.id, formValue);
    } else {
      await addPaciente(formValue);
    }
    onRefetch();
    onClose();
  } catch (error) {
    console.error(error);
  }
},
});
return (
// formulario para ingresar un paciente nuevo
<FormikProvider value={formik}>
  <div className="mb-8 flex w-auto justify-center">
    <form onSubmit={formik.handleSubmit}>
    <div className="grid grid-cols-2 gap-4">
              <div className="">
                {/*Información de contacto*/}
                <h4 className="text-lg leading-6 font-medium text-gray-900">Información Personal</h4>
                <br/>
                <input
                name="nombre"
                placeholder="Ingrese el nombre del paciente"
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
                placeholder="Ingrese el apellido del paciente"
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
              <input
              name="dni"
              placeholder="Ingrese el dni del paciente"
              value={formik.values.dni}
              onChange={formik.handleChange}
              className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] p-2 mb-3 ${
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
              type="date"
              name="fecha_nacimiento"
              placeholder="Ingrese la fecha de nacimiento del paciente"
              value={formik.values.fecha_nacimiento}
              onChange={formik.handleChange}
              className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] p-2 mb-3 ${
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
              <Field
              value={formik.values.genero}
              as="select"
              onChange={formik.handleChange}
              name="genero"
              className="mb-2 w-full rounded-lg border  border-[#CDCDCD] bg-white px-4  py-2 placeholder-black   focus:outline-none focus:ring-2 focus:ring-[#59167F]"
              >
                <option value="" disabled hidden>
                  Seleccione el género
                </option>
                <option value="masculino">Masculino</option>
                <option value="femenino">femenino</option>
                <option value="otro">Otro</option>
              </Field>
              <ErrorMessage
              name="genero"
              className="text-red-700"
              component="div"
              />
              <input
              name="altura"
              placeholder="Ingrese la altura del paciente"
              value={formik.values.altura}
              onChange={formik.handleChange}
              className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] p-2 mb-3 ${
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
              className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] p-2 mb-3 ${
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
            className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] p-2 mb-3 ${
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
             
          </div>
              <div>
                {/*Información de contacto*/}
                <h4 className="text-lg leading-6 font-medium text-gray-900">Información de Contacto</h4>
                <br/>
                <input
                name="direccion"
                placeholder="Ingrese la direccion del paciente"
                value={formik.values.direccion}
                onChange={formik.handleChange}
                className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] p-2 mb-3 ${
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
                className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] p-2 mb-3 ${
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
              className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] p-2 mb-3 ${
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
            <Field
            value={formik.values.tipo_sangre}
            as="select"
            onChange={formik.handleChange}
            name="tipo_sangre"
            className="mb-2 w-full rounded-lg border  border-[#CDCDCD] bg-white px-4  py-2 placeholder-black   focus:outline-none focus:ring-2 focus:ring-[#59167F]"
            >
              <option value="" disabled hidden>Tipo de sangre</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="AB">AB</option>
              <option value="O">O</option>
            </Field>
            <ErrorMessage
            name="tipo_sangre"
            className="text-red-700"
            component="div"
            />
            <input
            name="medico_referente"
            placeholder="Ingrese el médico referente"
            value={formik.values.medico_referente}
            onChange={formik.handleChange}
            className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] p-2 mb-3 ${
            formik.errors.username ? "" : "mb-2"
          }`}
          />
          <span>
          <ErrorMessage
          name="medico_referente"
          className=" text-red-700"
          component="div"
          />
          </span>
          <input
          name="telefono_contacto_emergencia"
          placeholder="Ingrese el número telefónico de emergencia"
          value={formik.values.telefono_contacto_emergencia}
          onChange={formik.handleChange}
          className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] p-2 mb-3 ${
          formik.errors.username ? "" : "mb-2"
        }`}
        />
        <span>
        <ErrorMessage
        name="telefono_contacto_emergencia"
        className=" text-red-700"
        component="div"
        />
        </span>
        <input
        name="nombre_contacto_emergencia"
        placeholder="Ingrese el número telefónico de emergencia"
        value={formik.values.nombre_contacto_emergencia}
        onChange={formik.handleChange}
        className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] p-2 mb-3 ${
        formik.errors.username ? "" : "mb-2"
      }`}
      />
      <span>
      <ErrorMessage
      name="nombre_contacto_emergencia"
      className=" text-red-700"
      component="div"
      />
      </span>
      <input
      name="relacion_contacto_emergencia"
      placeholder="Ingrese el número telefónico de emergencia"
      value={formik.values.relacion_contacto_emergencia}
      onChange={formik.handleChange}
      className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] p-2 mb-3 ${
      formik.errors.username ? "" : "mb-2"
      }`}
      />
      <span>
      <ErrorMessage
      name="relacion_contacto_emergencia"
      className=" text-red-700"
      component="div"
      />
      </span>
    </div>
</div>
<hr className="my-4 border-t-2 border-gray-300" />
<div>
            {/*Información general del paciente*/}
            <h4 className="text-lg leading-6 font-medium text-gray-900">Información general del paciente</h4>
            <br/>
            <textarea 
                name="alergias"
                placeholder="Ingrese alguna alergia previa o en su defecto dejelo en blanco"
                value={formik.values.alergias}
                onChange={formik.handleChange}
                className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
                formik.errors.username ? "" : "mb-2"
                }`}
              />
              <span>
                <ErrorMessage
                  name="alergias"
                  className=" text-red-700"
                  component="div"
                />
              </span>
              <textarea 
                name="medicamentos_actuales"
                placeholder="Ingrese que medicamentos toma el paciente o en su defecto dejelo en blanco"
                value={formik.values.medicamentos_actuales}
                onChange={formik.handleChange}
                className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
                formik.errors.username ? "" : "mb-2"
                }`}
              />
              <span>
                <ErrorMessage
                  name="medicamentos_actuales"
                  className=" text-red-700"
                  component="div"
                />
              </span>
              <textarea 
                name="enfermedades_previas"
                placeholder="Ingrese que medicamentos toma el paciente o en su defecto dejelo en blanco"
                value={formik.values.enfermedades_previas}
                onChange={formik.handleChange}
                className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
                formik.errors.username ? "" : "mb-2"
                }`}
              />
              <span>
                <ErrorMessage
                  name="enfermedades_previas"
                  className=" text-red-700"
                  component="div"
                />
              </span>
              <textarea 
                name="cirugias_previas"
                placeholder="Ingrese que medicamentos toma el paciente o en su defecto dejelo en blanco"
                value={formik.values.cirugias_previas}
                onChange={formik.handleChange}
                className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
                formik.errors.username ? "" : "mb-2"
                }`}
              />
              <span>
                <ErrorMessage
                  name="cirugias_previas"
                  className=" text-red-700"
                  component="div"
                />
              </span>
              <input
                type="date"
                name="fecha_ingreso"
                placeholder="Ingrese la fecha de ingreso del paciente"
                value={formik.values.fecha_ingreso}
                onChange={formik.handleChange}
                className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] p-2 mb-3 ${
                formik.errors.username ? "" : "mb-2"
                }`}
                />
                <span>
                <ErrorMessage
                  name="fecha_ingreso"
                  className=" text-red-700"
                  component="div"
                />
                </span>
                <textarea 
                name="seguro_medico"
                placeholder="Ingrese que seguro medico posee el paciente o en su defecto dejelo en blanco"
                value={formik.values.seguro_medico}
                onChange={formik.handleChange}
                className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
                formik.errors.username ? "" : "mb-2"
                }`}
              />
              <span>
                <ErrorMessage
                  name="seguro_medico"
                  className=" text-red-700"
                  component="div"
                />
              </span>
              <textarea 
                name="observaciones"
                placeholder="Ingrese que se observa del paciente"
                value={formik.values.observaciones}
                onChange={formik.handleChange}
                className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
                formik.errors.username ? "" : "mb-2"
                }`}
              />
              <span>
                <ErrorMessage
                  name="observaciones"
                  className=" text-red-700"
                  component="div"
                />
              </span>
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
);
}
function initialValues(data) {
return {
  nombre: data?.nombre || "",
  apellido: data?.apellido || "",
  dni: data?.dni || "",
  fecha_nacimiento: data?.fecha_nacimiento || "",
  genero: data?.genero || "",
  direccion: data?.direccion || "",
  telefono: data?.telefono || "",
  email: data?.email || "",
  altura: data?.altura || "",
  peso: data?.peso || "",
  edad: data?.edad || "",
  tipo_sangre: data?.tipo_sangre || "",
  medico_referente: data?.medico_referente || "",
  telefono_contacto_emergencia: data?.telefono_contacto_emergencia || "",
  nombre_contacto_emergencia: data?.nombre_contacto_emergencia || "",
  relacion_contacto_emergencia: data?.relacion_contacto_emergencia || "",
  alergias: data?.alergias || "",
  medicamentos_actuales: data?.medicamentos_actuales || "",
  enfermedades_previas: data?.enfermedades_previas || "",
  cirugias_previas: data?.cirugias_previas || "",
  fecha_ingreso: data?.fecha_ingreso || "",
  seguro_medico: data?.seguro_medico || "",
  observaciones: data?.observaciones || "",
};
}
function newSchame() {
return { 
  nombre: Yup.string().required("Por favor, ponga un nombre"),
apellido: Yup.string(),
dni: Yup.string(),
fecha_nacimiento: Yup.string(),
genero: Yup.string(),
direccion: Yup.string(),
telefono: Yup.string(),
email: Yup.string()
.email("Ingrese un Correo Valido")
.required("Porfavor Ingrese un Correo")
.matches(
  /^[a-zA-Z0-9@._-]+$/,
  "El correo electrónico no puede contener signos",
),
altura: Yup.string(),
peso: Yup.string(),
edad: Yup.string(),
tipo_sangre: Yup.string(),
medico_referente: Yup.string(),
telefono_contacto_emergencia: Yup.string(),
nombre_contacto_emergencia: Yup.string(),
relacion_contacto_emergencia: Yup.string(),
alergias: Yup.string(),
medicamentos_actuales: Yup.string(),
enfermedades_previas: Yup.string(),
cirugias_previas: Yup.string(),
fecha_ingreso: Yup.string(),
seguro_medico: Yup.string(),
observaciones: Yup.string(),
};
}
function updateSchame() {
return {};
}


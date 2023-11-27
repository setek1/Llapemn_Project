import React, { useState } from 'react';
import { useFormik, ErrorMessage, FormikProvider, Field } from "formik";
import * as Yup from "yup";
import { useEspecialista, useUser } from "../../../../hooks";
import { useEffect } from 'react'
import { map } from "lodash";

export function AddEspecialista(props) {
  const { especialistas, onClose, onRefetch } = props;
  const { getUsers, users } = useUser();
  const { getEspecialista, especialista } = useEspecialista();
  const [selectedUser, setSelectedUser] = useState(null);
  const { addEspecialista, updateEspecialista } = useEspecialista();


  const formik = useFormik({
    initialValues: initialValues(especialistas),
    validationSchema: Yup.object(newSchema()),

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
          await updateEspecialista(especialistas.id, formValue);
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

  useEffect(() => {
    getUsers();
  }, []);

  const ESPECIALIDADES_MAP_INVERSO = {
    Psicología: 'PSI',
    Masoterapia: 'MAS',
    Doctor: 'DOC',
    // Aca se añade todas las especialidades con su nombre completo y su clave correspondiente
  };

  function getUserEspecialidadKey(especialidadNombre) {
    const especialidadMap = {
      'Psicología': 'PSI',
      'Terapia Ocupacional': 'TER',
      'Masoterapia': 'MAS',

    };
    return especialidadMap[especialidadNombre] || null;
  }

  useEffect(() => {
    if (selectedUser) {
      const especialidadCodigo = ESPECIALIDADES_MAP_INVERSO[selectedUser.especialidad] || '';
      formik.setValues({
        ...formik.values,
        nombre: selectedUser.first_name || '',
        apellido: selectedUser.last_name || '',
        especialidad: especialidadCodigo,
        userId: selectedUser.id.toString(),
      });
    }
  }, [selectedUser, formik.setValues]);

  const handleUserChange = (e) => {
    const userId = e.target.value;
    const user = users.find((u) => u.id.toString() === userId);
    if (user) {
      setSelectedUser(user);
      const userEspecialidadKey = getUserEspecialidadKey(user.especialidad);
      formik.setValues({
        ...formik.values,
        nombre: user.first_name || '',
        apellido: user.last_name || '',
        especialidad: userEspecialidadKey || '',
        userId: user.id.toString(),
      });
    }
  };
  return (
    <FormikProvider value={formik}>
      <div className="mb-8 flex w-auto justify-center">
        <form onSubmit={formik.handleSubmit}>
          <div className="">
            {/* Dropdown para seleccionar usuario */}
            {users ? (
              <Field as="select" name="userId" onChange={handleUserChange} className="mb-2 w-full rounded-lg border  border-[#CDCDCD] bg-white px-4  py-2 placeholder-black   focus:outline-none focus:ring-2 focus:ring-[#59167F]">
                <option value="">Seleccione un usuario</option>
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.email} - {user.first_name} {user.last_name}
                  </option>
                ))}
              </Field>
            ) : (
              <p>Cargando usuarios...</p>
            )}

            {/* Campos autocompletados */}
            <input
              name="nombre"
              placeholder="Nombre del especialista"
              value={formik.values.nombre}
              onChange={formik.handleChange}
              className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] p-2 mb-3 ${formik.errors.username ? "" : "mb-2"
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
              placeholder="Apellido del especialista"
              value={formik.values.apellido}
              onChange={formik.handleChange}
              className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] p-2 mb-3 ${formik.errors.username ? "" : "mb-2"
                }`}
            />
            <span>
              <ErrorMessage
                name="apellido"
                className=" text-red-700"
                component="div"
              />
            </span>

            <Field as="select" name="especialidad" value={formik.values.especialidad} onChange={formik.handleChange} className="mb-2 w-full rounded-lg border  border-[#CDCDCD] bg-white px-4  py-2 placeholder-black   focus:outline-none focus:ring-2 focus:ring-[#59167F]">
              <option value="">Seleccione la especialidad</option>
              <option value="PSI">Psicología</option>
              <option value="MAS">Masoterapia</option>
              <option value="DOC">Doctor</option>

              {/* ... otras opciones */}
            </Field>
            <span>
              <ErrorMessage
                name="especialidad"
                className=" text-red-700"
                component="div"
              />
            </span>
            <input
              name="codigo_medico"
              placeholder="Ingrese el codigo de médico"
              value={formik.values.codigo_medico}
              onChange={formik.handleChange}
              className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] p-2 mb-3 ${formik.errors.username ? "" : "mb-2"
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
              className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] p-2 mb-3 ${formik.errors.username ? "" : "mb-2"
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
              className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${formik.errors.username ? "" : "mb-2"
                }`}
            />
            <span>
              <ErrorMessage
                name="direccion"
                className=" text-red-700"
                component="div"
              />
            </span>

            {/* Resto del formulario */}
            {/* ... */}
            <hr className="my-4 border-t-2 border-gray-300" />
            <div className="flex justify-end">
              <button
                type="submit"
                className="w-full rounded bg-[#59167F] px-4 py-2 font-semibold text-white"
              >
                {formik.values.userId ? "Crear" : "Actualizar"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </FormikProvider>
  );
}




function initialValues(especialista) {
  if (especialista) {
    return {
      nombre: especialista.nombre || '',
      apellido: especialista.apellido || '',
      especialidad: especialista.especialidad || '',
      codigo_medico: especialista.codigo_medico || '',
      numero_telefono: especialista.numero_telefono || '',
      direccion: especialista.direccion || '',
      userId: especialista.userId || '', // Asegúrate de que este campo existe en el objeto especialista
    };
  } else {
    return {
      nombre: '',
      apellido: '',
      especialidad: '',
      codigo_medico: '',
      numero_telefono: '',
      direccion: '',
      userId: '', // Este será el valor seleccionado en el dropdown
    };
  }
}
function newSchema() {
  return {
    userId: Yup.string().required('Debe seleccionar un usuario'),
    nombre: Yup.string().required('Este campo es obligatorio'),
    apellido: Yup.string().required('Este campo es obligatorio'),
    especialidad: Yup.string().required('Este campo es obligatorio'),
    codigo_medico: Yup.string().required('Este campo es obligatorio'),
    numero_telefono: Yup.string().required('Este campo es obligatorio'),
    direccion: Yup.string().required('Este campo es obligatorio'),
  };
}
function updateSchema() {
  return {};
}
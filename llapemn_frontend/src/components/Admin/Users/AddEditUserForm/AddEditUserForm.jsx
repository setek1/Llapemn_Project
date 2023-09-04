import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useUser } from "../../../../hooks";

export function AddEditUserForm(props) {
  const { onClose, onRefetch, user } = props;
  const { addUser, updateUser } = useUser();
  const formik = useFormik({
    initialValues: initialValues(user),
    validationSchema: Yup.object(user ? updateSchame() : newSchame()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        if (user) {
          await updateUser(user.id, formValue);
        } else {
          await addUser(formValue);
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
    <form onSubmit={formik.handleSubmit}>
      <input
        name="username"
        placeholder="Ingrese su Nombre"
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.errors.username}
      ></input>
      <input
        name="email"
        placeholder="Ingrese su email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      ></input>
      <input
        name="first_name"
        placeholder="Ingrese su Nombre"
        value={formik.values.first_name}
        onChange={formik.handleChange}
        error={formik.errors.first_name}
      ></input>
      <input
        name="last_name"
        placeholder="Ingrese sus Apellidos"
        value={formik.values.last_name}
        onChange={formik.handleChange}
        error={formik.errors.last_name}
      ></input>
      <input
        type="password"
        placeholder="Ingrese su Contrase;a"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      ></input>
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={formik.values.is_active}
          onChange={(event) =>
            formik.setFieldValue("is_active", !formik.values.is_active)
          }
          name="is_active"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        <label
          htmlFor="aceptarTerminos"
          className="ml-2 block text-sm text-gray-900"
        >
          Usuario Activo
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={formik.values.is_staff}
          onChange={(event) =>
            formik.setFieldValue("is_staff", !formik.values.is_staff)
          }
          name="is_staff"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        <label
          htmlFor="aceptarTerminos"
          className="ml-2 block text-sm text-gray-900"
        >
          Usuario Administrador
        </label>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
        >
          {user ? "Actualizar" : "Crear"}
        </button>
      </div>
    </form>
  );
}

function initialValues(data) {
  return {
    username: data?.username || "",
    email: data?.email || "",
    first_name: data?.first_name || "",
    last_name: data?.last_name || "",
    password: "",
    is_active: data?.is_active ? true : false,
    is_staff: data?.is_staff ? true : false,
  };
}

function newSchame() {
  return {
    username: Yup.string().required(true),
    email: Yup.string().email(true).required(true),
    first_name: Yup.string(),
    last_name: Yup.string(),
    password: Yup.string().required(true),
    is_active: Yup.bool().required(true),
    is_staff: Yup.bool().required(true),
  };
}

function updateSchame() {
  return {
    username: Yup.string().required(true),
    email: Yup.string().email(true).required(true),
    first_name: Yup.string(),
    last_name: Yup.string(),
    password: Yup.string(),
    is_active: Yup.bool().required(true),
    is_staff: Yup.bool().required(true),
  };
}

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
    <div className="mb-8 flex justify-center ">
      <form onSubmit={formik.handleSubmit}>
        <div className=" ">
          <input
            name="username"
            placeholder="Ingrese su Nick"
            value={formik.values.username}
            onChange={formik.handleChange}
            className="mb-2 w-full rounded-lg border  border-[#CDCDCD] bg-white px-4  py-2 placeholder-black   focus:outline-none focus:ring-2 focus:ring-[#59167F]"
            error={formik.errors.username}
          ></input>
          <input
            name="email"
            placeholder="Ingrese su email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="mb-2 w-full rounded-lg border  border-[#CDCDCD] bg-white px-4  py-2 placeholder-black   focus:outline-none focus:ring-2 focus:ring-[#59167F]"
            error={formik.errors.email}
          ></input>
          <input
            name="first_name"
            placeholder="Ingrese su Nombre"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            className="mb-2 w-full rounded-lg border  border-[#CDCDCD] bg-white px-4  py-2 placeholder-black   focus:outline-none focus:ring-2 focus:ring-[#59167F]"
            error={formik.errors.first_name}
          ></input>
          <input
            name="last_name"
            placeholder="Ingrese sus Apellidos"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            className="mb-2 w-full rounded-lg border  border-[#CDCDCD] bg-white px-4  py-2 placeholder-black   focus:outline-none focus:ring-2 focus:ring-[#59167F]"
            error={formik.errors.last_name}
          ></input>
          <input
            type="password"
            placeholder="Ingrese su Contraseña"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            className="mb-2 w-full rounded-lg border  border-[#CDCDCD] bg-white px-4  py-2 placeholder-black   focus:outline-none focus:ring-2 focus:ring-[#59167F]"
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
              className="h-4 w-4 rounded border-gray-300  accent-[#59167F] "
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
              className="h-4 w-4 rounded border-gray-300  accent-[#59167F] "
            />
            <label
              htmlFor="aceptarTerminos"
              className="ml-2 block text-sm text-gray-900 "
            >
              Usuario Administrador
            </label>
          </div>
        </div>
        <hr className="my-4 border-t-2 border-gray-300" />
        <div className="flex justify-end">
          <button
            type="submit"
            className="w-full rounded bg-[#59167F] px-4 py-2 font-semibold text-white "
          >
            {user ? "Actualizar" : "Crear"}
          </button>
        </div>
      </form>
    </div>
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

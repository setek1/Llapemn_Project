import React from "react";
import { loginApi } from "../../../api/user";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useAuth } from "../../../hooks";

export function LoginForm() {
  console.log(useAuth());
  const formik = useFormik({
    initialValues: intialValues(),
    validationSchema: Yup.object(validationSchema()),

    onSubmit: async (formValue) => {
      try {
        const response = await loginApi(formValue);
        const { access } = response;
        console.log(access);
      } catch (error) {
        toast.error(error.message);
      }
    },
  });
  return (
    <div className="mb-8 flex justify-center">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-6">
          <label htmlFor="email" className="mb-2 block text-sm text-gray-600">
            Correo electrónico
          </label>
          <input
            name="email"
            placeholder="Correo electronico"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="mb-2 block text-sm text-gray-600"
          >
            Contraseña
          </label>
          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            value={formik.values.password}
            onChange={formik.handleChange}
            className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <a className="mt-2 block text-right text-xs text-cyan-600">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
        <button
          type="submit"
          className="mx-auto mb-6 mt-4 block w-32 rounded-lg bg-[#59167F] py-2 text-white focus:outline-none focus:ring-2 "
        >
          Acceso
        </button>
      </form>
    </div>
  );
}

function intialValues() {
  return {
    email: "",
    password: "",
  };
}

function validationSchema() {
  return {
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true),
  };
}

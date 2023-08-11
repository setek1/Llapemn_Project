import React from "react";
import { loginApi } from "../../../api/user";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useAuth } from "../../../hooks";

export function LoginForm() {
  const { login } = useAuth();
  console.log(useAuth());
  const formik = useFormik({
    initialValues: intialValues(),
    validationSchema: Yup.object(validationSchema()),

    onSubmit: async (formValue) => {
      try {
        const response = await loginApi(formValue);
        const { access } = response;
        login(access);
      } catch (error) {
        toast.error(error.message);
      }
    },
  });
  return (
    <div className="mb-8 flex justify-center">
      <form onSubmit={formik.handleSubmit}>
        <h1 className="mb-6 text-center text-6xl text-white">Iniciar Sesión</h1>
        <h3 className="mb-6 text-center text-white">¡Bienvenido/a de nuevo!</h3>
        <div className="mb-6">
          <input
            name="email"
            placeholder="Correo electronico"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="w-full rounded-lg  bg-[#B7C05F] px-4  py-2 placeholder-white  focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
        <div className="mb-6">
          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            value={formik.values.password}
            onChange={formik.handleChange}
            className="w-full rounded-lg bg-[#B7C05F]  px-4 py-2 placeholder-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <div className="mt-4 flex w-full items-baseline justify-between">
            <label className="flex items-center text-sm text-white">
              <input type="checkbox" className="mr-2 accent-[#59167F]" />
              Recordar
            </label>
            <a className="mt-2 block text-right text-sm  text-white">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>
        <button
          type="submit"
          className="mx-auto mb-6 mt-4 block w-full rounded-lg bg-[#59167F] py-2 text-white focus:outline-none focus:ring-2 "
        >
          Iniciar Sesión
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

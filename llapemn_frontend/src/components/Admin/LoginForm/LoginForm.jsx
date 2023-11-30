import React from "react";
import { loginApi } from "../../../api/user";
import { useFormik, ErrorMessage, FormikProvider } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useAuth } from "../../../hooks";

let url = "https://www.llapemn.cl/images/logoBlanco.png";
export function LoginForm() {
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: intialValues(),
    validationSchema: Yup.object(validationSchema()),
    // validateOnChange: false,

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
    <FormikProvider value={formik}>
      <div className="mb-8 flex justify-center font-leca">
        <form onSubmit={formik.handleSubmit}>
          <img src={url} className="mx-auto w-1/3  " />

          <h1 className="mb-6 text-center font-leca text-5xl text-white">
            Iniciar Sesión
          </h1>
          <h3 className="mb-6 text-center font-leca text-white">
            ¡Bienvenido/a de nuevo!
          </h3>
          <div className="px-16">
            <div className="mb-6 ">
              <input
                name="email"
                placeholder="Correo electrónico"
                value={formik.values.email}
                onChange={formik.handleChange}
                className={` bg-[#B7C05F] ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "focus:ring-[#59167F]"
                } w-full rounded-lg  bg-[#B7C05F] px-4  py-2 placeholder-white  focus:outline-none focus:ring-2 `}
                // "w-full rounded-lg  bg-[#B7C05F] px-4  py-2 placeholder-white  focus:outline-none focus:ring-2 focus:ring-[#59167F]"
              />
              <ErrorMessage
                name="email"
                className="text-red-700"
                component="div"
              />
            </div>

            <div className="mb-6">
              <input
                name="password"
                type="password"
                placeholder="Contraseña"
                value={formik.values.password}
                onChange={formik.handleChange}
                className={` bg-[#B7C05F] ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500 focus:ring-red-500"
                    : "focus:ring-[#59167F]"
                } w-full rounded-lg  bg-[#B7C05F] px-4  py-2 placeholder-white  focus:outline-none focus:ring-2 `}
              />
              <ErrorMessage
                name="password"
                className="text-red-700"
                component="div"
              />
            </div>
            <button
              type="submit"
              className="mx-auto mb-6 mt-4 block w-full rounded-lg bg-[#59167F] py-2 text-white focus:outline-none focus:ring-2 "
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </FormikProvider>
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
    email: Yup.string()
      .email("Ingrese un correo válido")
      .required("Por favor ingrese un correo")
      .matches(
        /^[a-zA-Z0-9@._-]+$/,
        "El correo electrónico no puede contener signos",
      ),
    password: Yup.string().required("Ingrese una contraseña"),
  };
}

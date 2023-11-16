import { useFormik, ErrorMessage, FormikProvider } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useUser } from "../../../../hooks";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export function AddEditUserForm(props) {
  const { onClose, onRefetch, user } = props;

  const { addUser, updateUser } = useUser();
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues: initialValues(user),
    validationSchema: Yup.object(user ? updateSchame() : newSchame()),

    onSubmit: async (formValue) => {
      try {
        if (user) {
          await updateUser(user.id, formValue);
        } else {
          console.log(formValue);
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
    <FormikProvider value={formik}>
      <div className="mb-8 flex w-auto justify-center">
        <form onSubmit={formik.handleSubmit}>
          <div className="">
            <input
              name="especialidad"
              placeholder="Ingrese su especialidad"
              value={formik.values.especialidad}
              onChange={formik.handleChange}
              className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
                formik.errors.username ? "" : "mb-2"
              }`}
            />
            <span>
              <ErrorMessage
                name="especialidad"
                className=" text-red-700"
                component="div"
              />
            </span>
            <input
              name="email"
              placeholder="Ingrese su email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="mb-2 w-full rounded-lg border  border-[#CDCDCD] bg-white px-4  py-2 placeholder-black   focus:outline-none focus:ring-2 focus:ring-[#59167F]"
            ></input>
            <ErrorMessage
              name="email"
              className="text-red-700"
              component="div"
            />
            <input
              name="first_name"
              placeholder="Ingrese su nombre"
              value={formik.values.first_name}
              onChange={formik.handleChange}
              className="mb-2 w-full rounded-lg border  border-[#CDCDCD] bg-white px-4  py-2 placeholder-black   focus:outline-none focus:ring-2 focus:ring-[#59167F]"
            ></input>
            <ErrorMessage
              name="first_name"
              className="text-red-700"
              component="div"
            />
            <input
              name="last_name"
              placeholder="Ingrese sus apellidos"
              value={formik.values.last_name}
              onChange={formik.handleChange}
              className="mb-2 w-full  rounded-lg  border border-[#CDCDCD] bg-white  px-4 py-2   placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F]"
            ></input>
            <ErrorMessage
              name="last_name"
              className="text-red-700"
              component="div"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Ingrese su contraseña"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                className="mb-2 w-full rounded-lg border  border-[#CDCDCD] bg-white px-4  py-2 placeholder-black   focus:outline-none focus:ring-2 focus:ring-[#59167F]"
              ></input>

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer  text-[#59167F]"
              >
                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </button>
            </div>
            <ErrorMessage
              name="password"
              className="text-red-700"
              component="div"
            />

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
    </FormikProvider>
  );
}

function initialValues(data) {
  return {
    especialidad: data?.especialidad || "",
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
    especialidad: Yup.string()
      .matches(/^[A-Za-z]+$/, "Ingrese solo letras")
      .required("Por favor ingrese una especialidad"),
    email: Yup.string()
      .email("Ingrese un correo válido")
      .required("Por favor ingrese un correo")
      .matches(
        /^[a-zA-Z0-9@._-]+$/,
        "El correo electrónico no puede contener signos",
      ),
    first_name: Yup.string()
      .matches(/^[A-Za-z\s]+$/, "Ingrese solo letras")
      .required("Por favor ingrese un nombre"),
    last_name: Yup.string()
      .matches(/^[A-Za-z\s]+$/, "Ingrese solo letras")
      .required("Por favor ingrese un apellido"),
    password: Yup.string()
      .required("La contraseña es obligatoria")
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial",
      ),
    is_active: Yup.bool().required(true),
    is_staff: Yup.bool().required(true),
  };
}

function updateSchame() {
  return {
    especialidad: Yup.string().required(true),
    email: Yup.string().email(true).required(true),
    first_name: Yup.string(),
    last_name: Yup.string(),
    password: Yup.string(),
    is_active: Yup.bool().required(true),
    is_staff: Yup.bool().required(true),
  };
}

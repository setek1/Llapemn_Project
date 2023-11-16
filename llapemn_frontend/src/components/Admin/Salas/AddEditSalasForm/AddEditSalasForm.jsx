import { useFormik, ErrorMessage, FormikProvider, Field } from "formik";
import * as Yup from "yup";
import { useSalas } from "../../../../hooks";

export function AddEditSalasForm(props) {
  const { sala, onClose, onRefetch } = props;
  const { addSalas, updateSalas } = useSalas();
  const formik = useFormik({
    initialValues: initialValues(sala),
    validationSchema: Yup.object(sala ? updateSchame() : newSchame()),

    onSubmit: async (formValue) => {
      try {
        if (sala) {
          await updateSalas(sala.id, formValue);
        } else {
          await addSalas(formValue);
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
              name="nombre"
              placeholder="Ingrese nombre de la sala"
              value={formik.values.nombre}
              onChange={formik.handleChange}
              className={`w-full rounded-lg border border-[#CDCDCD] bg-white px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-[#59167F] ${
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
            {/* <input
              name="estado"
              placeholder="Ingrese Estado"
              value={formik.values.estado}
              onChange={formik.handleChange}
              className="mb-2 w-full rounded-lg border  border-[#CDCDCD] bg-white px-4  py-2 placeholder-black   focus:outline-none focus:ring-2 focus:ring-[#59167F]"
            ></input> */}
            <Field
              value={formik.values.estado}
              as="select"
              onChange={formik.handleChange}
              name="estado"
              className="mb-2 w-full rounded-lg border  border-[#CDCDCD] bg-white px-4  py-2 placeholder-black   focus:outline-none focus:ring-2 focus:ring-[#59167F]"
            >
              <option value="" disabled hidden>
                Seleccione un estado
              </option>
              <option value="DP">Disponible</option>
              <option value="FS">Fuera de servicio</option>
              <option value="ER">En reparación</option>
            </Field>
            <ErrorMessage
              name="estado"
              className="text-red-700"
              component="div"
            />
            <textarea
              name="descripcion"
              placeholder="Ingrese una descripción"
              value={formik.values.descripcion}
              onChange={formik.handleChange}
              className="mb-2 w-full rounded-lg border  border-[#CDCDCD] bg-white px-4  py-2 placeholder-black   focus:outline-none focus:ring-2 focus:ring-[#59167F]"
            ></textarea>
            <ErrorMessage
              name="descripcion"
              className="text-red-700"
              component="div"
            />
          </div>
          <hr className="my-4 border-t-2 border-gray-300" />
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-full rounded bg-[#59167F] px-4 py-2 font-semibold text-white "
            >
              {sala ? "Actualizar" : "Crear"}
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
    descripcion: data?.descripcion || "",
    estado: data?.estado || "",
  };
}
function newSchame() {
  return {
    nombre: Yup.string().required("Por favor ingrese un nombre para la sala"),
    descripcion: Yup.string().required(
      "Por favor ingrese una descripción de la sala",
    ),
    estado: Yup.string().required("Por favor ingrese un estado"),
  };
}
function updateSchame() {
  return {
    nombre: Yup.string().required(true),
    descripcion: Yup.string().required(true),
    estado: Yup.string(),
  };
}

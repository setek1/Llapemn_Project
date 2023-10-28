import { useEffect, useState } from "react";
import {
  HeaderPage,
  TableInsumos,
  AddEditInsumosForm,
  DeleteInsumosForm,
} from "../../components/Admin";
import { useInsumos } from "../../hooks";
import { ModalBasic } from "../../components/Common";

export function InsumosAdmin() {
  const { loading, insumos, getInsumos } = useInsumos();
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const openCloseModal = () => setShowModal((prev) => !prev);
  const onRefetch = () => setRefetch((prev) => !prev);

  useEffect(() => {
    getInsumos();
  }, [refetch]);

  const addInsumo = () => {
    setTitleModal("Agregar Nuevo Insumo");
    setContentModal(
      <AddEditInsumosForm onClose={openCloseModal} onRefetch={onRefetch} />,
    );
    openCloseModal();
  };

  const updateInsumo = (data) => {
    setTitleModal("Actualizar Insumo");
    setContentModal(
      <AddEditInsumosForm
        onClose={openCloseModal}
        insumo={data}
        onRefetch={onRefetch}
      />,
    );
    openCloseModal();
  };

  const deleteInsumos = (data) => {
    setTitleModal("Eliminar  Sala");
    setContentModal(
      <DeleteInsumosForm
        titleDelete={`¿Esta Seguro que de desea Eliminar a la ${data.nombreIn}?`}
        btnTitleD="Eliminar"
        onClose={openCloseModal}
        onRefetch={onRefetch}
        insumo={data}
        btnTitleD2="Cerrar"
        btnClickD2={openCloseModal}
      />,
    );
    openCloseModal();
  };

  console.log(insumos);
  return (
    <>
      <HeaderPage
        title="Insumos"
        btnTitle="Agregar Insumo"
        btnClick={addInsumo}
      />

      {loading ? (
        "cargando"
      ) : (
        <TableInsumos
          insumos={insumos}
          updateInsumo={updateInsumo}
          deleteInsumos={deleteInsumos}
        />
      )}

      <ModalBasic
        isVisible={showModal}
        onClose={openCloseModal}
        title={titleModal}
        children={contentModal}
      />
    </>
  );
}

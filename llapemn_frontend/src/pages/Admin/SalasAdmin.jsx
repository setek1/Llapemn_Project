import { useEffect, useState } from "react";
import {
  HeaderPage,
  TableSalas,
  AddEditSalasForm,
  DeleteSalasForm,
} from "../../components/Admin";
import { useSalas } from "../../hooks";
import { ModalBasic } from "../../components/Common";

export function SalasAdmin() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [refetch, setRefetch] = useState(false);

  const { loading, salas, getSalas } = useSalas();
  console.log(salas);
  useEffect(() => {
    getSalas();
  }, [refetch]);

  const openCloseModal = () => setShowModal((prev) => !prev);
  const onRefetch = () => setRefetch((prev) => !prev);
  const addSalas = () => {
    setTitleModal("Nueva Sala");
    setContentModal(
      <AddEditSalasForm onClose={openCloseModal} onRefetch={onRefetch} />,
    );
    openCloseModal();
  };

  const updateSala = (data) => {
    setTitleModal("Actualizar Sala");
    setContentModal(
      <AddEditSalasForm
        onClose={openCloseModal}
        sala={data}
        onRefetch={onRefetch}
      />,
    );
    openCloseModal();
  };
  const deleteSalas = (data) => {
    setTitleModal("Eliminar  Sala");
    setContentModal(
      <DeleteSalasForm
        titleDelete={`¿Esta Seguro que de desea Eliminar a la ${data.nombre}?`}
        btnTitleD="Eliminar"
        onClose={openCloseModal}
        onRefetch={onRefetch}
        sala={data}
        btnTitleD2="Cerrar"
        btnClickD2={openCloseModal}
      />,
    );
    openCloseModal();
  };

  return (
    <>
      <HeaderPage title="Salas" btnTitle="Agregar Sala" btnClick={addSalas} />
      {loading ? (
        "cargando"
      ) : (
        <TableSalas
          salas={salas}
          updateSala={updateSala}
          deleteSalas={deleteSalas}
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
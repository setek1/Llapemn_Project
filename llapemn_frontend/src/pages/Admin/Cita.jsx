import { useEffect, useState } from "react";
import { HeaderPage, TableCita, AddCita } from "../../components/Admin";
import { useCita } from "../../hooks";
import { ModalBasic } from "../../components/Common";
export function Cita() {
  const { loading, cita, getCita, deleteCita: deleteCitaApi } = useCita();
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [refetch, setRefetch] = useState(false);
  useEffect(() => {

    getCita();
  }, [refetch]);


  const openCloseModal = () => {

    setShowModal((prev) => !prev);
  };


  const onRefetch = () => {

    setRefetch((prev) => !prev);
  };
  const addCita = () => {

    setTitleModal("Nueva cita");
    setContentModal(
      <AddCita onClose={openCloseModal} citas={null} onRefetch={onRefetch} />,
    );
    openCloseModal();
  };
  const updateCita = (data) => {

    setContentModal(
      <AddCita
        onClose={openCloseModal}
        citas={data}
        onRefetch={onRefetch}
      />,
    );
    openCloseModal();
  };


  const handleDeleteCita = async (citaId) => {
    await deleteCitaApi(citaId); // Asegúrate de usar deleteCitaApi aquí
    onRefetch();
    openCloseModal();
  };
  const confirmDeleteCita = (citaData) => {
    setTitleModal("Eliminar cita");
    setContentModal(
      <>
        <p>¿Estás seguro de que deseas eliminar la cita?</p>
        <button onClick={() => handleDeleteCita(citaData.id)}>Eliminar</button>
        <button onClick={openCloseModal}>Cancelar</button>
      </>
    );
    openCloseModal();
  };
  console.log(cita);
  return (
    <>
      <HeaderPage
        title="Cita"
        btnTitle="Agregar Cita"
        btnClick={addCita}
      />
      <TableCita
        cita={cita}
        updateCita={updateCita}
        deleteCita={confirmDeleteCita}
      />
      <ModalBasic
        isVisible={showModal}
        onClose={openCloseModal}
        title={titleModal}
        children={contentModal}
      />
    </>
  );
}
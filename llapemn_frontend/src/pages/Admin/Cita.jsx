import { useEffect, useState } from "react";
import { HeaderPage, TableCita, AddCita } from "../../components/Admin";
import { useCita } from "../../hooks";
import { ModalBasic } from "../../components/Common";
export function Cita() {
  const { loading, cita, getCita } = useCita();
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [refetch, setRefetch] = useState(false);
  useEffect(() => {
    getCita();
  }, []);
  const openCloseModal = () => setShowModal((prev) => !prev);
  const onRefetch = () => setRefetch((prev) => !prev);
  const addCita = () => {
    setTitleModal("Nueva cita");
    setContentModal(
      <AddCita onClose={openCloseModal} onRefetch={onRefetch} />,
    );
    openCloseModal();
  };
  const updateCita = (data) => {
    setTitleModal("Actualizar cita");
    setContentModal(
      <AddCita
        onClose={openCloseModal}
        citas={data}
        onRefetch={onRefetch}
      />,
    );
    openCloseModal();
  };
  const deleteCita = async (citaId) => {
    try {
      setLoading(true);
      await deleteCitaApi(citaId, auth.token);
      onRefetch(); // Actualiza la lista de citas
      setShowModal(false); // Cierra el modal
    } catch (error) {
      console.error("Error al eliminar la cita", error);
    } finally {
      setLoading(false);
    }
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
        deleteCita={deleteCita}
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
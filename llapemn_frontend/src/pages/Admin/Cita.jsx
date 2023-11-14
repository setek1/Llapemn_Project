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
  const deleteCita = (data) => {
    setTitleModal("Eliminar  citas");
    setContentModal(
      <AddCita
        titleDelete={"¿Esta Seguro que de desea Eliminar a la ${data.nombre}?"}
        btnTitleD="Eliminar"
        onClose={openCloseModal}
        onRefetch={onRefetch}
        citas={data}
        btnTitleD2="Cerrar"
        btnClickD2={openCloseModal}
      />,
    );
    openCloseModal();
  };
  console.log(cita);
  return (
    <>
      <HeaderPage
        title="Cita"
        btnTitle="agregarCita"
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
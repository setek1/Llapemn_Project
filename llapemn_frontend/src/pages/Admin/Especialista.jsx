import { useEffect, useState } from "react";
import { HeaderPage, TableEspecialista , AddEspecialista } from "../../components/Admin";
import { useEspecialista } from "../../hooks";
import { ModalBasic } from "../../components/Common";
export function Especialista() {
  const { loading, especialista, getEspecialista } = useEspecialista();
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [refetch, setRefetch] = useState(false);
  useEffect(() => {
    getEspecialista();
  }, []);
  const openCloseModal = () => setShowModal((prev) => !prev);
  const onRefetch = () => setRefetch((prev) => !prev);
  const addEspecialista = () => {
    setTitleModal("Nuevo especialista");
    setContentModal(
      <AddEspecialista onClose={openCloseModal} onRefetch={onRefetch} />,
    );
    openCloseModal();
  };
  const updateEspecialista = (data) => {
    setTitleModal("Actualizar especialista");
    setContentModal(
      <AddEspecialista
        onClose={openCloseModal}
        citas={data}
        onRefetch={onRefetch}
      />,
    );
    openCloseModal();
  };
  const deleteEspecialista = (data) => {
    setTitleModal("Eliminar  especialista");
    setContentModal(
      <AddEspecialista
        titleDelete={"¿Esta Seguro que de desea Eliminar a ${data.nombre}?"}
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
  
  return (
    <>
      <HeaderPage
        title="Especialista"
        btnTitle="Agregar Especialista"
        btnClick={addEspecialista}
      />
      <TableEspecialista
        especialista={especialista}
        updateEspecialista={updateEspecialista}
        deleteEspecialista={deleteEspecialista}
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
import { useEffect, useState } from "react";
import { HeaderPage, TablePaciente, AddPaciente } from "../../components/Admin";
import { usePaciente } from "../../hooks";
import { ModalPaciente2 } from "../../components/Common";
export function Paciente() {
  const { loading, paciente, getPaciente } = usePaciente();
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [refetch, setRefetch] = useState(false);
  useEffect(() => {
    getPaciente();
  }, []);
  const openCloseModal = () => setShowModal((prev) => !prev);
  const onRefetch = () => setRefetch((prev) => !prev);
  const addPaciente = () => {
    setTitleModal("Nuevo paciente");
    setContentModal(
      <AddPaciente onClose={openCloseModal} onRefetch={onRefetch} />,
    );
    openCloseModal();
  };
  const updatePaciente = (data) => {
    setTitleModal("Actualizar paciente");
    setContentModal(
      <AddPaciente
        onClose={openCloseModal}
        pacientes={data}
        onRefetch={onRefetch}
      />,
    );
    openCloseModal();
  };
  const deletePaciente = (data) => {
    setTitleModal("Eliminar  Pacientes");
    setContentModal(
      <AddPaciente
        titleDelete={"¿Esta Seguro que de desea Eliminar a la ${data.nombre}?"}
        btnTitleD="Eliminar"
        onClose={openCloseModal}
        onRefetch={onRefetch}
        pacientes={data}
        btnTitleD2="Cerrar"
        btnClickD2={openCloseModal}
      />,
    );
    openCloseModal();
  };
  console.log(paciente);
  return (
    <>
      <HeaderPage
        title="Paciente"
        btnTitle="Agregar Paciente"
        btnClick={addPaciente}
      />
      <TablePaciente
        paciente={paciente}
        updatePaciente={updatePaciente}
        deletePaciente={deletePaciente}
      />
      <ModalPaciente2
        isVisible={showModal}
        onClose={openCloseModal}
        title={titleModal}
        children={contentModal}
      />
    </>
  );
}

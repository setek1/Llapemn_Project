import { useEffect, useState } from "react";
import { HeaderPage, TableEspecialista, AddEspecialista } from "../../components/Admin";
import { useEspecialista } from "../../hooks";
import { deleteEspecialistaApi } from "../../api/especialista";
import { ModalBasic } from "../../components/Common";
import { useAuth } from '../../hooks';
export function Especialista() {
  const { especialista, getEspecialista } = useEspecialista();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const { auth } = useAuth();
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
        especialistas={data}
        onRefetch={onRefetch}
      />,
    );
    openCloseModal();
  };
  const deleteEspecialista = async (id) => {
    const confirm = window.confirm("¿Estás seguro de que quieres eliminar este especialista?");
    if (confirm) {
      setLoading(true); // Esto activará el indicador de carga
      try {
        const result = await deleteEspecialistaApi(id, auth.token);
        onRefetch();
      } catch (error) {
        console.error("Error al eliminar el especialista", error);
      } finally {
        setLoading(false); // Esto desactivará el indicador de carga
      }
    }
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
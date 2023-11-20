import { useEffect, useState } from "react";
import { useUser } from "../../hooks";
import { TableUsers } from "../../components/Admin/Users/TableUsers/TableUsers";
import { ModalBasic, Loading } from "../../components/Common";
import { HeaderPage } from "../../components/Admin/HeaderPage";
import { AddEditUserForm, UserDelete } from "../../components/Admin/Users";
export function UsersAdmin() {
  const { loading, users, getUsers } = useUser();
  // Informacion/Visualizacion de Modal
  const [showModal, setshowModal] = useState(false);
  const [titleModal, setTtitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const openCloseModal = () => setshowModal((prev) => !prev);
  //Agregar Usuario
  const addUser = () => {
    setTtitleModal("Nuevo Usuario");
    setContentModal(
      <AddEditUserForm onClose={openCloseModal} onRefetch={onRefetch} />,
    );
    openCloseModal();
  };

  //update user
  const updateUser = (data) => {
    setTtitleModal("Actualizar Usuario");
    setContentModal(
      <AddEditUserForm
        onClose={openCloseModal}
        onRefetch={onRefetch}
        user={data}
      />,
    );
    openCloseModal();
  };

  //Delete User
  const deleteUser = (data) => {
    setTtitleModal("Eliminar  Usuario");
    setContentModal(
      <UserDelete
        titleDelete={`¿Esta Seguro que de desea Eliminar a ${data.first_name} ${data.last_name}?`}
        btnTitleD="Eliminar"
        onClose={openCloseModal}
        onRefetch={onRefetch}
        user={data}
        btnTitleD2="Cerrar"
        btnClickD2={openCloseModal}
      />,
    );
    openCloseModal();
  };

  //Refrescar pagina
  const [refetch, setRefetch] = useState(false);
  const onRefetch = () => setRefetch((prev) => !prev);

  useEffect(() => {
    getUsers();
  }, [refetch]);

  return (
    <div>
      <HeaderPage
        title="Trabajadores"
        btnTitle="Agregar Trabajador"
        btnClick={addUser}
      />
      {loading ? (
        <div className="flex justify-center">
          <Loading />
        </div>
      ) : (
        <TableUsers
          users={users}
          updateUser={updateUser}
          deleteUser={deleteUser}
        />
      )}
      <ModalBasic
        title={titleModal}
        isVisible={showModal}
        onClose={openCloseModal}
        children={contentModal}
      >
        {/* <h1>TITULOS</h1> */}
      </ModalBasic>
    </div>
  );
}

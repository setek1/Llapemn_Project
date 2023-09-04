import { useEffect, useState } from "react";
import { useUser } from "../../hooks";
import { TableUsers } from "../../components/Admin/Users/TableUsers/TableUsers";
import { ModalBasic } from "../../components/Common";
import { HeaderPage } from "../../components/Admin/HeaderPage";
import { AddEditUserForm } from "../../components/Admin/Users";
export function UsersAdmin() {
  const { loading, users, getUsers } = useUser();

  const [showModal, setshowModal] = useState(false);
  const [titleModal, setTtitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const openCloseModal = () => setshowModal((prev) => !prev);

  const addUser = () => {
    setTtitleModal("Nuevo Usuario");
    setContentModal(<AddEditUserForm />);
    openCloseModal();
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <HeaderPage
        title="Trabajadores"
        btnTitle="Agregar Trabajador"
        btnClick={addUser}
      />
      {loading ? <h1>"CARGANDO XUXETUMARE"</h1> : <TableUsers users={users} />}
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

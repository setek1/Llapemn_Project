import { useEffect, useState } from "react";
import { useUser } from "../../hooks";
import { TableUsers } from "../../components/Admin/Users/TableUsers/TableUsers";
import { ModalBasic } from "../../components/Common";
import { HeaderPage } from "../../components/Admin/HeaderPage";
export function UsersAdmin() {
  const { loading, users, getUsers } = useUser();

  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  const openCloseModal = () => setShowModal((prev) => !prev);

  return (
    <div>
      <HeaderPage title="Trabajadores" btnTitle="Agregar Trabajador" />
      {loading ? <h1>"CARGANDO XUXETUMARE"</h1> : <TableUsers users={users} />}
      {/* <ModalBasic
        show={true}
        title="Crear Usuario"
        children={<h2>Content</h2>}
        onClose={openCloseModal}
      /> */}
    </div>
  );
}

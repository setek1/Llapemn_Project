import { useEffect } from "react";
import { useUser } from "../../hooks";
import { TableUsers } from "../../components/Admin/Users/TableUsers/TableUsers";

export function UsersAdmin() {
  const { loading, users, getUsers } = useUser();
  console.log(users);
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {loading ? <h1>"CARGANDO XUXETUMARE"</h1> : <TableUsers users={users} />}
    </div>
  );
}

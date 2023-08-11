import React from "react";
import { useAuth } from "../../hooks";

export function HomeAdmin() {
  const { logout } = useAuth();
  return (
    <div>
      HomeAdmin
      <button onClick={logout}>Cerrar Sesion</button>
    </div>
  );
}

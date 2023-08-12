import React from "react";
import { LoginAdmin } from "../../pages/Admin";
import { useAuth } from "../../hooks";
import { TopMenu, SideMenu } from "../../components/Admin";

export function AdminLayout(props) {
  const { children } = props;
  const { auth } = useAuth();

  if (!auth) return <LoginAdmin />;
  return (
    <div className="grid">
      <div className="main">
        <SideMenu>{children}</SideMenu>
      </div>
    </div>
  );
}

import { AdminLayout } from "../layouts";
import { HomeAdmin, UsersAdmin } from "../pages/Admin/";

const routesAdmin = [
  {
    path: "/admin",
    layout: AdminLayout,
    component: HomeAdmin,
  },
  {
    path: "/Trabajadores",
    layout: AdminLayout,
    component: UsersAdmin,
  },
];

export default routesAdmin;

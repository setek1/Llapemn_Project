import { AdminLayout } from "../layouts";
import {
  HomeAdmin,
  UsersAdmin,
  SalasAdmin,
  InsumosAdmin,
} from "../pages/Admin/";

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
  {
    path: "/Salas",
    layout: AdminLayout,
    component: SalasAdmin,
  },
  {
    path: "/Productos",
    layout: AdminLayout,
    component: InsumosAdmin,
  },
];

export default routesAdmin;

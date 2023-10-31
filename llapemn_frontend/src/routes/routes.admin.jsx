import { AdminLayout } from "../layouts";
import {
  HomeAdmin,
  UsersAdmin,
  SalasAdmin,
  InsumosAdmin,
  InventarioAdmin,
  DetalleInventario,
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
  {
    path: "/Inventario",
    layout: AdminLayout,
    component: InventarioAdmin,
  },
  {
    path: "/Salas/:id",
    layout: AdminLayout,
    component: DetalleInventario,
  },
];

export default routesAdmin;

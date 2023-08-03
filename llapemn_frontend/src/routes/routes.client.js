import { ClientLayout } from "../layouts";

import { home } from "../pages/Client";

const routesClient = [
  {
    path: "/",
    layout: ClientLayout,
    component: home,
  },
  //   {
  //     path: "*",
  //     layout: ClientLayout,
  //     component: Error404,
  //   },
  //Tambien se puede hacer el error 404 de la forma anterior, tambien se debe importar
];

export default routesClient;

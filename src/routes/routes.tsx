import { DirectoryRoutes } from "../interfaces/routesInterface";
import CashiersPage from "../pages/CashiersPage";
import HomePage from "../pages/HomePage";

export const routes = {
  error404: "/not_found",
  login: "/login",
  dashboard: "/*",
  cashiers: "/cashiers",
  home: "/",
};

export const privateDir: DirectoryRoutes[] = [
  { path: routes.cashiers, element: <CashiersPage /> },
  { path: routes.home, element: <HomePage /> },
];

import { DirectoryRoutes } from "../interfaces/routesInterface";
import AddBeneficiaryPage from "../pages/AddBeneficiaryPage";
import CashiersPage from "../pages/CashiersPage";
import HomePage from "../pages/HomePage";

export const routes = {
  error404: "/not_found",
  login: "/login",
  dashboard: "/*",
  cashiers: "/cashiers",
  home: "/",
  addBeneficiary: "/addBeneficiary",
};

export const privateDir: DirectoryRoutes[] = [
  { path: routes.cashiers, element: <CashiersPage /> },
  { path: routes.home, element: <HomePage /> },
  { path: routes.addBeneficiary, element: <AddBeneficiaryPage /> },
];

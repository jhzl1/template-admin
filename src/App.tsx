import "react-perfect-scrollbar/dist/css/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import Error404 from "./pages/Error404";
import LoginPage from "./pages/LoginPage";
import PrivateRoutes from "./routes/PrivateRoutes";
import { routes } from "./routes/routes";

const App = () => {
  const { login, dashboard, error404 } = routes;

  return (
    <BrowserRouter>
      <div id="app" className="bg-slate-100 min-h-screen dark:bg-slate-700  ">
        <Routes>
          <Route path={login} element={<LoginPage />} />
          <Route path={error404} element={<Error404 />} />

          <Route
            path={dashboard}
            element={
              <PrivateRoutes>
                <DashboardPage />
              </PrivateRoutes>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

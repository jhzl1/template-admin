import "react-perfect-scrollbar/dist/css/styles.css";
import { Route, Routes } from "react-router-dom";
import AppProvider from "./context/AppProvider";
import DashboardPage from "./pages/DashboardPage";
import Error404 from "./pages/Error404";
import LoginPage from "./pages/LoginPage";
import { routes } from "./routes/routes";

const App = () => {
  const { login, dashboard, error404 } = routes;

  return (
    <AppProvider>
      <div id="app" className="bg-slate-100 min-h-screen ">
        <Routes>
          <Route path={login} element={<LoginPage />} />
          <Route path={dashboard} element={<DashboardPage />} />
          <Route path={error404} element={<Error404 />} />
        </Routes>
      </div>
    </AppProvider>
  );
};

export default App;

import { Navigate, Route, Routes } from "react-router-dom";
import { privateDir, routes } from "../../routes/routes";
import Footer from "../Footer";
import Topbar from "./Topbar";

const Desktop = () => {
  const { error404 } = routes;

  return (
    <div className="ml-64 py-5 px-10 w-full h-full flex flex-col items-stretch relative">
      <Topbar />

      <Routes>
        {privateDir.map((route, i) => (
          <Route {...route} key={i} />
        ))}
        <Route path="*" element={<Navigate to={error404} />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default Desktop;

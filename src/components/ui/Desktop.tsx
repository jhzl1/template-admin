import { Navigate, Route, Routes } from "react-router-dom";
import { privateDir, routes } from "../../routes/routes";
import Footer from "../Footer";
import Topbar from "./Topbar";

const Desktop = () => {
  const { error404 } = routes;

  return (
    <div className="lg:ml-64 md:py-5 md:px-10 w-full flex flex-col items-stretch bg-gray-100 dark:bg-slate-700 transitions">
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

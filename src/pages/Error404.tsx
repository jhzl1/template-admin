import { Link } from "react-router-dom";
import { routes } from "../routes/routes";

const Error404 = () => {
  const { home } = routes;

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col justify-center bg-white dark:bg-slate-600 p-10 rounded-xl">
        <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-600 mb-5">
          ERROR 404
        </h1>

        <span className="text-center mb-5">
          La página que intentas buscar no existe
        </span>

        <Link to={home} className="btn-link  ">
          Ir al Inicio
        </Link>
      </div>
    </div>
  );
};

export default Error404;

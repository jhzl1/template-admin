import PerfectScrollbar from "react-perfect-scrollbar";
import { itemsNavbar } from "../../config/navbar/itemsNavbar";
import useTheme from "../../hooks/useTheme";
import ItemNavbar from "./ItemNavbar";

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <nav
      id="navbar"
      className="bg-white shadow-md h-screen w-64 flex flex-col fixed left-0 dark:bg-slate-800 transitions"
    >
      <PerfectScrollbar className="relative overflow-y-auto p-5">
        <div className="border-b-2 pb-5 mb-5 border-slate-100 dark:border-slate-700 transitions">
          <img
            src={require(`../../assets/img/unidigital-${
              theme === "dark" ? "transp.png" : "black.jpg"
            }`)}
            alt=""
            className="h-12"
          />
        </div>

        {itemsNavbar.map((navbarItem, i) => (
          <ItemNavbar key={i} {...navbarItem} />
        ))}
      </PerfectScrollbar>
    </nav>
  );
};

export default Navbar;

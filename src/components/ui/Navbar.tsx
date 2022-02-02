import { motion } from "framer-motion";
import PerfectScrollbar from "react-perfect-scrollbar";
import { itemsNavbar } from "../../config/navbar/itemsNavbar";
import useTheme from "../../hooks/useTheme";
import useToggleNavbar from "../../hooks/useToggleNavbar";
import ItemNavbar from "./ItemNavbar";

const Navbar = () => {
  const { theme } = useTheme();
  const { showNavbar, handleShowNavbar } = useToggleNavbar();

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0 },
  };

  return (
    <>
      <motion.div
        className={`z-20 bg-slate-900/50 ${
          showNavbar && "w-screen fixed h-screen"
        }  transitions backdrop-blur lg:hidden cursor-pointer`}
        onClick={handleShowNavbar}
        animate={showNavbar ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0 }}
      ></motion.div>

      <nav
        id="navbar"
        className={`bg-white shadow-md h-screen w-64 ${
          showNavbar ? "left-0" : "-left-64"
        } lg:flex flex-col fixed dark:bg-slate-800 transitions z-30  lg:left-0`}
      >
        <PerfectScrollbar className="relative overflow-y-auto p-5">
          <div className="border-b-2 pb-5 mb-5 border-slate-100 dark:border-slate-700 transitions full-center">
            <img
              src={require(`../../assets/img/unidigital-${
                theme === "dark" ? "transp.png" : "black.jpg"
              }`)}
              alt=""
              className="h-10 lg:h-11"
            />
          </div>

          {itemsNavbar.map((navbarItem, i) => (
            <ItemNavbar key={i} {...navbarItem} />
          ))}
        </PerfectScrollbar>
      </nav>
    </>
  );
};

export default Navbar;

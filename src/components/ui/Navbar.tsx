import PerfectScrollbar from "react-perfect-scrollbar";
import { itemsNavbar } from "../../config/navbar/itemsNavbar";
import ItemNavbar from "./ItemNavbar";

const Navbar = () => {
  return (
    <nav
      id="navbar"
      className="bg-white shadow-md h-screen w-64 flex flex-col fixed left-0"
    >
      <PerfectScrollbar className="relative overflow-y-auto p-5">
        <div className="border-b-2 pb-5 mb-5 border-slate-100">
          <img src={require("../../assets/img/unidigital-black.jpg")} alt="" />
        </div>

        {itemsNavbar.map((navbarItem, i) => (
          <ItemNavbar key={i} {...navbarItem} />
        ))}
      </PerfectScrollbar>
    </nav>
  );
};

export default Navbar;

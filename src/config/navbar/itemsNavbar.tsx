import { ItemNavbarProps } from "../../components/ui/ItemNavbar";
import { FiHome, FiUser } from "react-icons/fi";
import { BiMoney } from "react-icons/bi";
import { routes } from "../../routes/routes";

const { cashiers } = routes;

export const itemsNavbar: ItemNavbarProps[] = [
  { title: "Inicio", path: "/", icon: <FiHome /> },
  {
    title: "Usuarios",
    icon: <FiUser />,
    subnavItem: [
      { title: "Cajeros", path: cashiers },
      { title: "Administradores", path: "/" },
    ],
  },
  { title: "Fondo global", path: "/", icon: <BiMoney /> },
];

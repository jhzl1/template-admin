import { ItemNavbarProps } from "../../components/ui/ItemNavbar";
import { FiHome, FiUser } from "react-icons/fi";
import { BsFillCreditCardFill } from "react-icons/bs";
import { MdPointOfSale } from "react-icons/md";
import { FaMoneyBill } from "react-icons/fa";
import { routes } from "../../routes/routes";

const { cashiers, addBeneficiary } = routes;

export const itemsNavbar: ItemNavbarProps[] = [
  { title: "Inicio", path: "/", icon: <FiHome /> },
  { title: "POS Físicos", path: "/", icon: <MdPointOfSale /> },
  { title: "POS Virtuales", path: "/", icon: <MdPointOfSale /> },
  {
    title: "Tarjetas prepag.",
    icon: <BsFillCreditCardFill />,
    subnavItem: [
      { title: "Registrar beneficiario", path: addBeneficiary },
      { title: "Asignar tarjeta", path: "/" },
      { title: "Recargar tarjeta", path: "/" },
    ],
  },
  {
    title: "Pagos",
    icon: <FaMoneyBill />,
    subnavItem: [{ title: "Registrar pago USD Uniticket", path: "/" }],
  },
  {
    title: "Usuarios",
    icon: <FiUser />,
    subnavItem: [
      { title: "Cajeros", path: cashiers },
      { title: "Administradores", path: "/" },
    ],
  },
];

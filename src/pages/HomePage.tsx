import { BiMoney } from "react-icons/bi";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { FaCashRegister } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";

import { WidgetItem } from "../interfaces/widgetsInterface";
import PageContainer from "../components/ui/PageContainer";
import ShortWidgets from "../components/dashboard/ShortWidgets";
import TransactionsWidget from "../components/dashboard/TransactionsWidget";
import ChartWidget from "../components/dashboard/ChartWidget";
import Shortcuts from "../components/dashboard/Shortcuts";
import useAuth from "../hooks/useAuth";

const HomePage = () => {
  const { status } = useAuth();

  console.log(status);
  const commonValuesIcon = {
    size: 30,
    color: "white",
  };

  const shortsWidgets: WidgetItem[] = [
    {
      title: "Total fondo",
      value: "$509",
      icon: <BiMoney {...commonValuesIcon} />,
    },
    {
      title: "Transacciones hoy",
      value: 30,
      icon: <RiArrowLeftRightFill {...commonValuesIcon} />,
    },
    {
      title: "Cajeros",
      value: 5,
      icon: <FaCashRegister {...commonValuesIcon} />,
    },
    {
      title: "Administradores",
      value: 5,
      icon: <RiAdminLine {...commonValuesIcon} />,
    },
  ];

  return (
    <PageContainer titlePage="Inicio" bgTransparent>
      <div className="grid grid-cols-4 gap-4 h-24 my-6">
        {shortsWidgets.map((widget, i) => (
          <ShortWidgets key={i} {...widget} />
        ))}
      </div>

      <div className="grid grid-cols-5 grid-rows-2 h-[500px] gap-4">
        <TransactionsWidget />
        <ChartWidget />

        <Shortcuts />
      </div>
    </PageContainer>
  );
};

export default HomePage;

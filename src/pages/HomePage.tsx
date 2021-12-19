import { Grid, GridItem } from "@chakra-ui/react";
import PageContainer from "../components/ui/PageContainer";
import { BiMoney } from "react-icons/bi";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { FaCashRegister, FaChartLine } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";

const HomePage = () => {
  return (
    <PageContainer titlePage="Inicio" bgTransparent>
      <Grid templateColumns="repeat(4, 1fr)" gap={4} className="h-24 my-6">
        <GridItem
          bg="white"
          rounded="xl"
          className="p-4 flex flex-row justify-between items-center shadow-lg"
        >
          <div>
            <h2 className="font-medium mb-1">Total fondo</h2>
            <span className="font-medium text-2xl text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-orange-600">
              $503
            </span>
          </div>
          <div className="bg-gradient-to-br p-2 from-orange-400 to-orange-600 rounded-lg">
            <BiMoney size={28} color="white" />
          </div>
        </GridItem>

        <GridItem
          bg="white"
          rounded="xl"
          className="p-5 flex flex-row justify-between items-center shadow-lg"
        >
          <div>
            <h2 className="font-medium mb-1">Transacciones hoy</h2>
            <span className="font-medium text-2xl text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-orange-600">
              20
            </span>
          </div>
          <div className="bg-gradient-to-br p-2 from-orange-400 to-orange-600 rounded-lg">
            <RiArrowLeftRightFill size={28} color="white" />
          </div>
        </GridItem>

        <GridItem
          bg="white"
          rounded="xl"
          className="p-5 flex flex-row justify-between items-center shadow-lg"
        >
          <div>
            <h2 className="font-medium mb-1">Cajeros</h2>
            <span className="font-medium text-2xl text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-orange-600">
              4
            </span>
          </div>
          <div className="bg-gradient-to-br p-2 from-orange-400 to-orange-600 rounded-lg">
            <FaCashRegister size={28} color="white" />
          </div>
        </GridItem>

        <GridItem
          bg="white"
          rounded="xl"
          className="p-5 flex flex-row justify-between items-center shadow-lg"
        >
          <div>
            <h2 className="font-medium mb-1">Administradores</h2>
            <span className="font-medium text-2xl text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-orange-600">
              2
            </span>
          </div>
          <div className="bg-gradient-to-br p-2 from-orange-400 to-orange-600 rounded-lg">
            <RiAdminLine size={28} color="white" />
          </div>
        </GridItem>
      </Grid>

      <Grid
        h="600px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem
          rowSpan={2}
          colSpan={1}
          bg="white"
          rounded="xl"
          className="shadow-lg rounded-lg p-5"
        >
          <div className="flex justify-between items-center">
            <h2 className="font-medium mb-1">Últimas transacciones</h2>
            <FaChartLine size={22} className="text-orange-400" />
          </div>
          <div>item</div>
          <div>item</div>
          <div>item</div>
          <div>item</div>
          <div>item</div>
        </GridItem>
        <GridItem
          colSpan={2}
          className="bg-gradient-to-br from-sky-400 to-blue-600 p-5 shadow-lg rounded-lg"
        />
        <GridItem colSpan={2} bg="white" className="shadow-lg rounded-lg" />
        <GridItem
          colSpan={4}
          className="shadow-lg rounded-lg bg-gradient-to-br from-slate-600 to-slate-800"
        />
      </Grid>
    </PageContainer>
  );
};

export default HomePage;

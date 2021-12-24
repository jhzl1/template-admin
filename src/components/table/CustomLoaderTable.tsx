import { Fade } from "@chakra-ui/react";
import LoadingIndicator from "../ui/LoadingIndicator";

const CustomLoaderTable = ({ isLoading }: { isLoading: Boolean }) => {
  return (
    <Fade
      className={`absolute z-10 bg-white/80 w-full h-full dark:bg-gray-600/80 backdrop-blur-sm full-center ${
        !isLoading && "hidden"
      }`}
      in={isLoading as never}
    >
      <div>
        <LoadingIndicator />
        <h3>Cargando...</h3>
      </div>
    </Fade>
  );
};

export default CustomLoaderTable;

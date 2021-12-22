import { Spinner } from "@chakra-ui/react";

const LoadingIndicator = () => {
  return (
    <div className="flex justify-center items-center w-full my-4">
      <Spinner color="orange.400" size="xl" thickness="3px" speed="0.7s" />
    </div>
  );
};

export default LoadingIndicator;

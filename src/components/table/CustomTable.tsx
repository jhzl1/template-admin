import { Alert, AlertIcon } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import locatelApi from "../../api/locatelApi";
import useTheme from "../../hooks/useTheme";
import CustomLoaderTable from "./CustomLoaderTable";

interface CustomTableProps {
  endpoint: string;
  columns: any[];
}

createTheme("customDark", {
  text: {
    primary: "#268bd2",
    secondary: "#d1d5db",
  },
  background: {
    default: "transparent",
  },
  context: {
    background: "#cb4b16",
    text: "#FFFFFF",
  },
  divider: {
    default: "#1e293b",
  },
});

const paginationComponentOptions = {
  rowsPerPageText: "Items por página",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};

const CustomTable: FC<CustomTableProps> = ({ endpoint, columns }) => {
  const { theme } = useTheme();

  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [error, setError] = useState<string>("");
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    const getDataApi = async () => {
      try {
        const { data } = await locatelApi.get(endpoint);

        setDataTable(data.data);
      } catch (error: any) {
        const { data, status } = error.response;
        if (status === 400) {
          setError(data.msg);
        }
      }
      setIsLoading(false);
    };

    getDataApi();
  }, [endpoint]);

  return (
    <div className="bg-white dark:bg-slate-600 rounded-lg relative overflow-hidden shadow-lg  ">
      <CustomLoaderTable isLoading={isLoading} />
      {error && (
        <Alert status="error" className="text-gray-700">
          <AlertIcon />
          {error}
        </Alert>
      )}
      {!error && dataTable.length > 0 && (
        <DataTable
          columns={columns}
          data={dataTable}
          theme={theme === "dark" ? "customDark" : "light"}
          pagination
          paginationComponentOptions={paginationComponentOptions}
        />
      )}
    </div>
  );
};

export default CustomTable;

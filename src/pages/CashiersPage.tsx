import { TableColumn } from "react-data-table-component";
import CustomTable from "../components/table/CustomTable";
import PageContainer from "../components/ui/PageContainer";

const CashiersPage = () => {
  interface DataRow {
    _id: string;
    name: string;
    email: string;
    roles: ["admin", "superAdmin", "cashier"];
  }

  const columns: TableColumn<DataRow>[] = [
    {
      name: "ID",
      selector: (row) => row._id,
    },
    {
      name: "Nombre",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Roles",
      cell: (row) => (
        <button onClick={() => console.log(row.name)}> click</button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
    },
  ];

  return (
    <PageContainer titlePage="Cajeros" bgTransparent>
      <CustomTable columns={columns} endpoint="/admin/users" />
    </PageContainer>
  );
};

export default CashiersPage;

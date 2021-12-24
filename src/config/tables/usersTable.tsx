import { TableColumn } from "react-data-table-component";

export interface DataRow {
  fracata: string;
  year: string;
  amount: string;
  blue: string;
}

export const columns: TableColumn<DataRow>[] = [
  {
    name: "Title",
    selector: (row) => row.fracata,
    center: true,
  },

  {
    name: "Yeffdar",
    selector: (row) => row.year,
    center: true,
  },
];

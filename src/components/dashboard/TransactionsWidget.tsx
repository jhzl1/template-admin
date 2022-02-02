import { FC } from "react";
import { FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";

interface TransactionItemProps {
  value: Number;
  date?: Date;
  description: String;
  isAChange?: Boolean;
}

const transactions: TransactionItemProps[] = [
  { value: 2.2, description: "Vuelto caja 1", isAChange: true },
  { value: 6.3, description: "Vuelto caja 4", isAChange: true },
  { value: 1, description: "Vuelto caja 4", isAChange: true },
  { value: 1, description: "Vuelto caja 4", isAChange: true },
  { value: 50, description: "Recarga monto general" },
];

const TransactionItem: FC<TransactionItemProps> = ({
  value,
  date,
  description,
  isAChange,
}) => {
  return (
    <div
      className={`my-2 border-l-2 ${
        isAChange ? "border-red-500" : "border-green-500"
      } pl-2 py-1 flex justify-between items-center`}
    >
      <div className="flex flex-col">
        <small className="text-[8px]">20/12/2021 - 03:35pm</small>
        <span className="text-[14px]">{description}</span>
      </div>

      <span className="text-md font-medium">${value}</span>
    </div>
  );
};

const TransactionsWidget = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 dark:bg-gray-600 transitions col-span-2 md:col-span-1 md:row-span-2 flex flex-col ">
      <div className="flex justify-between items-center">
        <h2 className="font-medium mb-1">Últimas transacciones</h2>
        <FaChartLine size={22} className="text-orange-400" />
      </div>
      <div className="flex flex-col">
        {transactions.map((transc, i) => (
          <TransactionItem key={i} {...transc} />
        ))}

        <Link to="/" className="btn-link transitions">
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default TransactionsWidget;

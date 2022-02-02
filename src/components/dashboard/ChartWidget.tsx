import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import useTheme from "../../hooks/useTheme";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartWidget = () => {
  const { theme } = useTheme();

  ChartJS.defaults.color = theme === "dark" ? "#ffff" : "#374151";

  const data = {
    labels: ["Vueltos realizados", "Vueltos en proceso", "Vueltos cancelados"],
    datasets: [
      {
        data: [12, 2, 3],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className=" bg-white dark:bg-gradient-to-br from-slate-600 to-gray-800 p-2 shadow-lg rounded-lg col-span-2 md:col-span-1 xl:col-span-2 row-span-2 transitions">
      <Doughnut data={data} options={{ maintainAspectRatio: false }} />
    </div>
  );
};

export default ChartWidget;

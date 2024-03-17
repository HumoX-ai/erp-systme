import { faker } from "@faker-js/faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
    },
  },
};

const labels = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul"];

export const data = {
  labels,
  datasets: [
    {
      label: "Kirim",
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: "rgb(75, 192, 192)",
    },
    {
      label: "Chiqim",
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: "rgb(255, 99, 132)",
    },
  ],
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}

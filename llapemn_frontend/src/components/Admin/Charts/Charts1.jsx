import { useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useHistorial } from "../../../hooks";
import _ from "lodash";

const data = [
  {
    name: "Jan",
    Expense: 4000,
    Income: 2400,
  },
  {
    name: "Feb",
    Expense: 3000,
    Income: 1398,
  },
  {
    name: "Mar",
    Expense: 2000,
    Income: 9800,
  },
  {
    name: "Apr",
    Expense: 2780,
    Income: 3908,
  },
  {
    name: "May",
    Expense: 1890,
    Income: 4800,
  },
  {
    name: "Jun",
    Expense: 2390,
    Income: 3800,
  },
  {
    name: "July",
    Expense: 3490,
    Income: 4300,
  },
  {
    name: "Aug",
    Expense: 2000,
    Income: 9800,
  },
  {
    name: "Sep",
    Expense: 2780,
    Income: 3908,
  },
  {
    name: "Oct",
    Expense: 1890,
    Income: 4800,
  },
  {
    name: "Nov",
    Expense: 2390,
    Income: 3800,
  },
  {
    name: "Dec",
    Expense: 3490,
    Income: 4300,
  },
];

export function Charts1() {
  const { historial, getHistorialChart } = useHistorial();
  const monthNames = {
    1: "Enero",
    2: "Febrero",
    3: "Marzo",
    4: "Abril",
    5: "Mayo",
    6: "Junio",
    7: "Julio",
    8: "Agosto",
    9: "Septiembre",
    10: "Octubre",
    11: "Noviembre",
    12: "Diciembre",
  };

  useEffect(() => {
    getHistorialChart();
  }, []);
  console.log(historial);
  const data2 = _.map(historial, (history) => ({
    name: monthNames[history.month],
    Utilizado: history.suma_insumos_r,
    Ingresado: history.suma_insumos_s,
  }));
  console.log("data2", data2);
  return (
    <div className="flex h-[22rem] flex-1 flex-col rounded-sm border border-gray-200 bg-white p-4 dark:bg-[#715084] dark:text-white">
      <strong className="font-medium text-gray-700 dark:text-white">
        Insumos Usados
      </strong>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data2}
            margin={{
              top: 20,
              right: 10,
              left: -10,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Ingresado" fill="#59167F" />
            <Bar dataKey="Utilizado" fill="#EDEDED" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

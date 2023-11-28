import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { useEffect, useState } from "react";
import { useInsumos } from "../../../hooks";
import _ from "lodash";

const RADIAN = Math.PI / 180;
const COLORS = ["#DC0600", "#59167F", "#B9CC00"];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export function Charts2() {
  const { getInsumosPie, insumos } = useInsumos();
  useEffect(() => {
    getInsumosPie();
  }, []);
  console.log(insumos);
  const data = _.map(insumos, (insumo) => ({
    name: insumo.nombreIn,
    value: insumo.stockIn,
  }));

  return (
    <div className="flex h-[22rem] w-[20rem] flex-col rounded-lg border border-gray-200 bg-white p-4 dark:bg-[#2E3C4A]">
      <strong className="font-medium text-gray-700 dark:text-white">
        Insumos Totales
      </strong>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer
          width="100%"
          height="100%"
          className="dark:text-white"
        >
          <PieChart width={400} height={300}>
            <Pie
              data={data}
              cx="50%"
              cy="45%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={105}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

import React from "react";
import { BiAlarmExclamation } from "react-icons/bi";
import { useInsumos } from "../../../hooks";
import { useEffect, useState } from "react";
import { map } from "lodash";
import { Link } from "react-router-dom";
const popularProducts = [
  {
    id: "3432",
    product_name: 'Macbook M1 Pro 14"',

    product_price: "$1499.00",
    product_stock: 341,
  },
  {
    id: "7633",
    product_name: "Samsung Galaxy Buds 2",

    product_price: "$399.00",
    product_stock: 24,
  },
  {
    id: "6534",
    product_name: "Asus Zenbook Pro",

    product_price: "$899.00",
    product_stock: 56,
  },
  {
    id: "9234",
    product_name: "LG Flex Canvas",

    product_price: "$499.00",
    product_stock: 98,
  },
  {
    id: "4314",
    product_name: "Apple Magic Touchpad",

    product_price: "$699.00",
    product_stock: 0,
  },
  {
    id: "4342",
    product_name: "Nothing Earbuds One",

    product_price: "$399.00",
    product_stock: 453,
  },
];
export function Low() {
  const { getInsumosLow, insumos } = useInsumos();

  useEffect(() => {
    getInsumosLow();
  }, []);

  console.log("insumos", insumos);
  return (
    <div className="w-[20rem] rounded-lg border border-gray-200 bg-white p-4 dark:bg-[#2E3C4A]">
      <strong className="font-medium text-gray-700 dark:text-white">
        Insumos Críticos
      </strong>
      <div className="mt-4 flex flex-col gap-3">
        {map(insumos, (insumo, index) => (
          <div
            key={index}
            className="mb-2 flex w-full gap-5 rounded-lg bg-[#F0F0F0] p-4 dark:bg-[#1A2B38] dark:text-white"
          >
            <div className="w-[20%]">
              <BiAlarmExclamation className="h-full w-full  object-cover text-red-500" />
            </div>
            <div className="flex w-[40%] items-center">
              <Link to={`/Productos/${insumo.id}`}>{insumo.nombreIn}</Link>
            </div>
            <div className="w-[40%] text-center">
              <p>Cantidad</p>
              {insumo.stockIn}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

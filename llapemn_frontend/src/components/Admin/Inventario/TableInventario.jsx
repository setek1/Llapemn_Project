import React from "react";
import { map } from "lodash";

export function TableInventario(props) {
  const { insumos } = props;

  return (
    <>
      <h1 className="text-center text-2xl dark:text-white">
        Inventario de Sala
      </h1>
      <table className="mt-5  w-full dark:text-white">
        <thead className="bg-[#F0F0F0] dark:bg-[#2E3C4A]">
          <tr className="dark:bg-[#2E3C4A]">
            <th className="rounded-l-lg  bg-[#F0F0F0] p-2 text-left dark:bg-[#2E3C4A]">
              Sala
            </th>

            <th className="rounded-r-lg">Stock Sala</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {map(insumos, (ins, index) => (
            <tr key={index}>
              <td className="pb-6 pr-6 pt-6 text-left">{ins.nombreIn}</td>

              <td>{ins.stockIn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

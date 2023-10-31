import React from "react";
import { map } from "lodash";

export function TableInventario(props) {
  const { insumos } = props;

  return (
    <table className="mt-5  w-full ">
      <thead className="bg-[#F0F0F0]">
        <tr>
          <th className="rounded-l-lg  bg-[#F0F0F0] p-2 text-left">Sala</th>

          <th>Stock Sala</th>
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
  );
}

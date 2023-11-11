import React from 'react'
import {map} from 'lodash'
import { IoBuildOutline, IoTrashBinOutline } from "react-icons/io5";

export function TablePaciente(props) {
    const{paciente}=props
    return (
        <div className="overflow-x-scroll md:overflow-x-auto">
          <table className="mt-5  w-full ">
            <thead className="bg-[#F0F0F0]">
              <tr className="dark:bg-[#715084] dark:text-white">
                <th className="rounded-l-lg  bg-[#F0F0F0] p-2 text-left dark:bg-[#715084]">
                  Nombre
                </th>
    
                <th>Apellido</th>
                <th>DNI</th>
                <th className=" bg-[#F0F0F0] dark:bg-[#715084]">Editar</th>
                <th className="rounded-r-lg bg-[#F0F0F0] dark:bg-[#715084]">
                  Eliminar
                </th>
              </tr>
            </thead>
            <tbody className="text-center dark:text-white">
              {map(paciente, (paci, index) => (
                <tr key={index}>
                  <td className="pb-6 pr-6 pt-6 text-left">
                    {paci.nombre}
                  </td>
    
                  <td>{paci.apellido}</td>
                  <td>{paci.dni}</td>
    
                  
                  <Actions
                    
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    
    function Actions() {
      
      return (
        <>
          <td>
            <button onClick={() => console.log('edit')}>
              <IoBuildOutline />
            </button>
          </td>
          <td>
            <button onClick={() => console.log('borrar')}>
              <IoTrashBinOutline />
            </button>
          </td>
        </>
      );
    }



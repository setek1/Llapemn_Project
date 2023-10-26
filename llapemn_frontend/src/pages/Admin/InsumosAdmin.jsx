import { useEffect, useState } from "react";
import { HeaderPage, TableInsumos } from "../../components/Admin";
import { useInsumos } from "../../hooks";

export function InsumosAdmin() {
  const { loading, insumos, getInsumos } = useInsumos();

  useEffect(() => {
    getInsumos();
  }, []);

  console.log(insumos);
  return (
    <>
      <HeaderPage title="Insumos" btnTitle="Agregar Insumo" />

      {loading ? "cargando" : <TableInsumos insumos={insumos} />}
    </>
  );
}

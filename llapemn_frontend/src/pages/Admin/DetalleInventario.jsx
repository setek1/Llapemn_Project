import React from "react";
import { useEffect, useState } from "react";
import { useInsumos } from "../../hooks";
import { useParams } from "react-router-dom";
import { IoLogoClosedCaptioning } from "react-icons/io5";
import { TableInventario } from "../../components/Admin";

export function DetalleInventario() {
  const { loading, insumos, getInsumosBySala } = useInsumos();
  const { id } = useParams();
  useEffect(() => {
    getInsumosBySala(id);
  }, []);

  console.log(insumos);
  return <>{loading ? "cargando" : <TableInventario insumos={insumos} />}</>;
}

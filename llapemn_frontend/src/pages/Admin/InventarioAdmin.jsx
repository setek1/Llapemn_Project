import React from "react";
import { useEffect, useState } from "react";
import { useInventario } from "../../hooks";
import { TableInventario } from "../../components/Admin";

export function InventarioAdmin() {
  const { loading, inventario, getInventario } = useInventario();

  return <></>;
}

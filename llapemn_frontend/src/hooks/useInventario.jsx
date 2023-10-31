import { useState } from "react";
import { getInventarioApi } from "../api/inventario";

export function useInventario() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [inventario, setInventario] = useState(null);

  const getInventario = async () => {
    try {
      setLoading(true);
      const response = await getInventarioApi();
      setLoading(false);
      setInventario(response);
    } catch (error) {
      throw error;
    }
  };

  return { loading, error, inventario, getInventario };
}

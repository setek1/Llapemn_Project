import { useState } from "react";
import { getInsumosApi } from "../api/insumos";

export function useInsumos() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [insumos, setInsumos] = useState(null);

  const getInsumos = async () => {
    try {
      setLoading(true);
      const response = await getInsumosApi();
      setLoading(false);
      setInsumos(response);
    } catch (error) {
      throw error;
    }
  };

  return {
    loading,
    error,
    insumos,
    getInsumos,
  };
}

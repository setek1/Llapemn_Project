import { useState } from "react";
import {
  getInsumosApi,
  addInsumoApi,
  deleteInsumoApi,
  updateInsumoApi,
} from "../api/insumos";
import { useAuth } from ".";

export function useInsumos() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [insumos, setInsumos] = useState(null);
  const { auth } = useAuth();

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

  const addInsumo = async (data) => {
    try {
      setLoading(true);
      await addInsumoApi(data, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const updateInsumo = async (id, data) => {
    try {
      setLoading(true);
      await updateInsumoApi(id, data, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  const deleteInsumo = async (id) => {
    try {
      setLoading(true);
      await deleteInsumoApi(id, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return {
    loading,
    error,
    insumos,
    getInsumos,
    addInsumo,
    updateInsumo,
    deleteInsumo,
  };
}

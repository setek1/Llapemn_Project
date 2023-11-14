import { useState } from "react";
import {
  getHistorialApi,
  getHistorialByInsumoApi,
  addHistorialApi,
  getHistorialChartApi,
  getHistorialApi2,
  updateHistorialApi,
} from "../api/historial";
import { useAuth } from ".";

export function useHistorial() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [historial, setHistorial] = useState(null);
  const { auth } = useAuth();

  const getHistorial = async () => {
    try {
      setLoading(true);
      const response = await getHistorialApi();
      setLoading(false);
      setHistorial(response);
    } catch (error) {
      throw error;
    }
  };

  const getHistorial2 = async () => {
    try {
      setLoading(true);
      const response = await getHistorialApi2();
      setLoading(false);
      setHistorial(response);
    } catch (error) {
      throw error;
    }
  };

  const getHistorialChart = async () => {
    try {
      setLoading(true);
      const response = await getHistorialChartApi();
      setLoading(false);
      setHistorial(response);
    } catch (error) {
      throw error;
    }
  };
  const getHistorialByInsumo = async (id_insumo) => {
    try {
      setLoading(true);
      const response = await getHistorialByInsumoApi(id_insumo);
      setLoading(false);
      setHistorial(response);
    } catch (error) {
      throw error;
    }
  };
  const addHistorial = async (data) => {
    try {
      setLoading(true);
      await addHistorialApi(data, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const updateHistorial = async (id, data) => {
    try {
      setLoading(true);
      await updateHistorialApi(id, data, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return {
    loading,
    error,
    historial,
    getHistorial,
    getHistorialByInsumo,
    addHistorial,
    getHistorialChart,
    getHistorial2,
    updateHistorial,
  };
}

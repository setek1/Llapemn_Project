import { useState } from "react";
import {
  getCitaApi,
  addCitaApi,
  updateCitaApi,
  deleteCitaApi,
} from "../api/cita";
import { useAuth } from ".";

export function useCita() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [cita, setCita] = useState(null);
  const { auth } = useAuth();

  const getCita = async () => {
    try {
      setLoading(true);
      const response = await getCitaApi();
      setLoading(false);
      setCita(response);
    } catch (error) {
      throw error;
    }
  }
  const addCita = async (data) => {
    try {
      setLoading(true);
      await addCitaApi(data, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  const updateCita = async (id, data) => {
    try {
      setLoading(true);
      await updateCitaApi(id, data, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  const deleteCita = async (id) => {
    try {
      setLoading(true);
      await deleteCitaApi(id, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  return {
    error,
    loading,
    cita,
    getCita,
    addCita,
    updateCita,
    deleteCita,
  };
}
import { useState } from "react";
import {
  getEspecialistaApi,
  addEspecialistaApi,
  updateEspecialistaApi,
  deleteEspecialistaApi,
} from "../api/especialista";
import { useAuth } from ".";

export function useEspecialista() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [especialista, setEspecialista] = useState(null);
  const { auth } = useAuth();

  const getEspecialista = async () => {
    try {
      setLoading(true);
      const response = await getEspecialistaApi();
      setLoading(false);
      setEspecialista(response);
    } catch (error) {
      throw error;
    }
  };
  const addEspecialista = async (data) => {
    try {
      setLoading(true);
      await addEspecialistaApi(data, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  const updateEspecialista = async (id, data) => {
    try {
      setLoading(true);
      await updateEspecialistaApi(id, data, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  const deleteEspecialista = async (id) => {
    try {
      setLoading(true);
      await deleteEspecialistaApi(id, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  return {
    error,
    loading,
    especialista,
    getEspecialista,
    addEspecialista,
    updateEspecialista,
    deleteEspecialista,
  };
}

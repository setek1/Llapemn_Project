import { useState } from "react";
import {
  getPacienteApi,
  addPacienteApi,
  updatePacienteApi,
  deletePacienteApi,
} from "../api/paciente";
import { useAuth } from ".";

export function usePaciente() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [paciente, setPaciente] = useState(null);
  const { auth } = useAuth();

  const getPaciente = async () => {
    try {
      setLoading(true);
      const response = await getPacienteApi();
      setLoading(false);
      setPaciente(response);
    } catch (error) {
      throw error;
    }
  };
  const addPaciente = async (data) => {
    try {
      setLoading(true);
      await addPacienteApi(data, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  const updatePaciente = async (id, data) => {
    try {
      setLoading(true);
      await updatePacienteApi(id, data, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  const deletePaciente = async (id) => {
    try {
      setLoading(true);
      await deletePacienteApi(id, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  return {
    error,
    loading,
    paciente,
    getPaciente,
    addPaciente,
    updatePaciente,
    deletePaciente,
  };
}

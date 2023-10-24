import React from "react";
import { useState } from "react";
import {
  getSalasApi,
  addSalasApi,
  updateSalaApi,
  deleteSalasApi,
} from "../api/salas";
import { useAuth } from ".";

export function useSalas() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [salas, setSalas] = useState(null);
  const { auth } = useAuth();

  const getSalas = async () => {
    try {
      setLoading(true);
      const response = await getSalasApi();
      setLoading(false);
      setSalas(response);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const addSalas = async (data) => {
    try {
      setLoading(true);
      await addSalasApi(data, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const updateSalas = async (id, data) => {
    try {
      setLoading(true);
      await updateSalaApi(id, data, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  const deleteSalas = async (id) => {
    try {
      setLoading(true);
      await deleteSalasApi(id, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return {
    loading,
    error,
    salas,
    getSalas,
    addSalas,
    updateSalas,
    deleteSalas,
  };
}

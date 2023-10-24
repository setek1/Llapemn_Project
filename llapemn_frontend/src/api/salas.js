import { BASE_API } from "../utils/constants";

export async function getSalasApi() {
  try {
    const url = `${BASE_API}/api/salas/`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function addSalasApi(data, token) {
  try {
    const url = `${BASE_API}/api/salas/`;
    const params = {
      method: "POST",
      headers: {
        Authorization: `Bearer${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function updateSalaApi(id, data, token) {
  try {
    const url = `${BASE_API}/api/salas/${id}/`;
    const params = {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function deleteSalasApi(id, token) {
  try {
    const url = `${BASE_API}/api/salas/${id}/`;
    const params = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

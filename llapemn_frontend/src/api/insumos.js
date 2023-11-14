import { BASE_API } from "../utils/constants";

export async function getInsumosApi() {
  try {
    const url = `${BASE_API}/api/insumos/`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getInsumosOrderApi() {
  try {
    const url = `${BASE_API}/api/insumos/get_recent/`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getInsumosLowApi() {
  try {
    const url = `${BASE_API}/api/insumos/get_low/`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
export async function getInsumosPieApi() {
  try {
    const url = `${BASE_API}/api/insumos/get_pie_chart/`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getInsumosBySalasApi(id_sala) {
  const filter = `id_sala=${id_sala}`;
  try {
    const url = `${BASE_API}/api/insumos/?${filter}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
export async function getInsumosByIdApi(id) {
  const filter = `id=${id}`;
  try {
    const url = `${BASE_API}/api/insumos/?${filter}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function addInsumoApi(data, token) {
  try {
    const url = `${BASE_API}/api/insumos/post_w_h/`;
    const params = {
      method: "POST",
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

export async function updateInsumoApi(id, data, token) {
  try {
    const url = `${BASE_API}/api/insumos/${id}/`;
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

export async function deleteInsumoApi(id, token) {
  try {
    const url = `${BASE_API}/api/insumos/${id}/`;
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

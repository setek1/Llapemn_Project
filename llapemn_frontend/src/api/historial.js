import { BASE_API } from "../utils/constants";

export async function getHistorialApi() {
  try {
    const url = `${BASE_API}/api/historial/`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getHistorialApi2() {
  try {
    const url = `${BASE_API}/api/historial/get_A/`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getHistorialChartApi() {
  try {
    const url = `${BASE_API}/api/historial/get_chart/`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getHistorialChartYearApi(year_actual_G) {
  try {
    const url = `${BASE_API}/api/historial/get_chart_y/${year_actual_G}/`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getHistorialByInsumoApi(id_insumo) {
  const filter = `id_insumo=${id_insumo}`;
  try {
    const url = `${BASE_API}/api/historial/?${filter}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
export async function getHistorialYearsApi() {
  try {
    const url = `${BASE_API}/api/historial/get_available_years/`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function addHistorialApi(data, token) {
  try {
    const url = `${BASE_API}/api/historial/set_password/`;
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
export async function updateHistorialApi(id, data, token) {
  try {
    const url = `${BASE_API}/api/historial/${id}/`;
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

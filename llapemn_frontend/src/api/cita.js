import{BASE_API} from '../utils/constants'


export async function getCitaApi() {
  try {
    const url = `${BASE_API}/api/cita2/`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
export async function addCitaApi(data, token) {
    try {
      const url = `${BASE_API}/api/cita2/`;
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
  export async function updateCitaApi(id, data, token) {
    try {
      const url = `${BASE_API}/api/cita2/${id}/`;
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
  export async function deleteCitaApi(id, token) {
    try {
      const url = `${BASE_API}/api/cita2/${id}/`;
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
import { BASE_API } from "../utils/constants";

export async function getInventarioApi() {
  try {
    const url = `${BASE_API}/api/inventario/`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

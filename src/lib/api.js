const API_URL = import.meta.env.PUBLIC_STRAPI_URL;

export async function fetchAPI(endpoint) {
  const res = await fetch(`${API_URL}/api/${endpoint}?populate=*`);
  if (!res.ok) {
    console.error('Erro ao buscar:', endpoint, res.status);
    return null;
  }
  const data = await res.json();
  return data.data;
}

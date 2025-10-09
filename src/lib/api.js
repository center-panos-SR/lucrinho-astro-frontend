const API_URL = import.meta.env.PUBLIC_STRAPI_URL;

export async function fetchAPI(endpoint) {
  // Verificar se a variável de ambiente está definida
  if (!API_URL) {
    console.warn('⚠️  PUBLIC_STRAPI_URL não está definida. Configure a variável de ambiente.');
    return []; // Retorna array vazio em vez de null
  }

  try {
    const res = await fetch(`${API_URL}/api/${endpoint}?populate=*`);
    if (!res.ok) {
      console.error('Erro ao buscar:', endpoint, res.status);
      return [];
    }
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error('Erro na requisição:', error);
    return [];
  }
}

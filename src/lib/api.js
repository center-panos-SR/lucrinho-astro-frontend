const API_URL = import.meta.env.PUBLIC_STRAPI_URL || 'http://localhost:1337';
const API_KEY = '933d7aed0b708dd436f0f562a77467f2ff77b9eed45b2ca21fd6313f2c5df14f9248d7bf9c78bb3e2d7e44023588f60fd86310744676abcd897132dd058f2e102d2096dc040e36c633f1c49b4f86707a42cb09dab16359a906852017574f04de8496c72dfe736f4f9377bd5c1aa531a09b7728101040823e9c640f6307b3d2e4';

export async function fetchAPI(endpoint, options = {}) {
  try {
    const headers = {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
      ...options.headers
    };

    const res = await fetch(`${API_URL}/api/${endpoint}?populate=*`, {
      ...options,
      headers
    });
    
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

// Função específica para buscar categorias
export async function fetchCategories() {
  try {
    const categories = await fetchAPI('categories');
    return categories.map(cat => ({
      id: cat.id,
      name: cat.name || cat.attributes?.name || 'Sem nome',
      slug: cat.slug || cat.attributes?.slug || (cat.name || '').toLowerCase().replace(/\s+/g, '-')
    }));
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    return [];
  }
}

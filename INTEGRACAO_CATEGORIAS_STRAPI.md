# Integração das Categorias do Strapi no Header

## 📋 Resumo

O header do site agora está **conectado dinamicamente ao Strapi**, buscando as categorias cadastradas no CMS e exibindo-as na navegação.

## ✅ Alterações Realizadas

### 1. Atualização da API (`src/lib/api.js`)
- ✅ Adicionada API Key do Strapi para autenticação
- ✅ Atualizada função `fetchAPI` com headers de autorização
- ✅ Nova função `fetchCategories()` para buscar categorias
- ✅ Tratamento de estrutura de dados do Strapi v4/v5

### 2. Header Dinâmico (`src/components/widgets/Header.astro`)
- ✅ Removidas categorias hardcoded (estáticas)
- ✅ Implementada busca dinâmica de categorias do Strapi
- ✅ Categorias agora são clicáveis e direcionam para `/blog?categoria={slug}`
- ✅ Fallback de categorias padrão caso o Strapi esteja offline
- ✅ Estilos CSS atualizados para suportar categorias dinâmicas
- ✅ Menu mobile também atualizado com categorias dinâmicas

## 🎯 Categorias Atualmente no Strapi

As seguintes categorias foram encontradas e estão sendo exibidas:

1. **Como Ganhar Dinheiro Rápido** (`como-ganhar-dinheiro-rapido`)
2. **Investimento** (`investimento`)
3. **Ferramentas** (`ferramentas`)
4. **Economia** (`economia`)
5. **Renda Extra** (`renda-extra`)
6. **Avaliações** (`avaliacoes`)

## 🔧 Configuração

### API Key do Strapi
A API Key está configurada diretamente no arquivo `src/lib/api.js`:
```javascript
const API_KEY = '933d7aed0b708dd436f0f562a77467f2ff77b9eed45b2ca21fd6313f2c5df14f9248d7bf9c78bb3e2d7e44023588f60fd86310744676abcd897132dd058f2e102d2096dc040e36c633f1c49b4f86707a42cb09dab16359a906852017574f04de8496c72dfe736f4f9377bd5c1aa531a09b7728101040823e9c640f6307b3d2e4';
```

### URL do Strapi
Por padrão, a URL do Strapi é `http://localhost:1337`. Você pode alterar isso através da variável de ambiente `PUBLIC_STRAPI_URL` (em produção).

## 🚀 Como Testar

### 1. Certifique-se que o Strapi está rodando
```bash
cd backend-strapi
npm run develop
```

### 2. Inicie o servidor Astro
```bash
cd lucrinho-astro-frontend
npm run dev
```

### 3. Acesse o site
Abra `http://localhost:4321` e verifique:
- ✅ As categorias aparecem no header
- ✅ Ao clicar em uma categoria, você é redirecionado para `/blog?categoria={slug}`
- ✅ No mobile, as categorias aparecem no menu hambúrguer

## 📱 Responsividade

### Desktop
- Categorias exibidas horizontalmente no header
- Hover effect com mudança de cor para azul (#007bff)
- Fonte: Trenda (600 weight)

### Mobile
- Categorias ocultas no header principal
- Exibidas no menu hambúrguer (sidebar)
- Design responsivo mantido

## 🔄 Sincronização Automática

Sempre que você:
- ✅ Adicionar uma nova categoria no Strapi
- ✅ Remover uma categoria
- ✅ Alterar o nome ou slug de uma categoria

O header será **atualizado automaticamente** na próxima vez que a página for carregada (ou após rebuild em produção).

## 🛡️ Fallback

Se o Strapi estiver offline ou houver erro na conexão, o header exibirá categorias padrão:
- AVALIAÇÕES
- RENDA EXTRA
- ECONÔMIA
- FERRAMENTAS
- INVESTIMENTO

## 🔗 Links das Categorias

Cada categoria gera um link no formato:
```
/blog?categoria={slug-da-categoria}
```

Exemplo:
- Investimento → `/blog?categoria=investimento`
- Renda Extra → `/blog?categoria=renda-extra`

## 📝 Notas Importantes

1. **Permissões**: Certifique-se de que a API do Strapi tem permissões públicas para `find` em `categories`
2. **CORS**: Se estiver em produção, configure o CORS no Strapi para aceitar requisições do domínio do frontend
3. **Cache**: Em produção, considere adicionar cache para as requisições de categorias

## 🎨 Estilos

Os estilos foram mantidos idênticos ao design original:
- Fonte: Trenda Semibold (14px)
- Cor padrão: #201D1E
- Cor hover: #007bff
- Espaçamento: 22.5px entre itens
- White-space: nowrap (para não quebrar linhas)

## 🧪 Teste Concluído

✅ Conexão com Strapi funcionando
✅ 6 categorias detectadas e exibidas corretamente
✅ Links gerados automaticamente
✅ Estrutura de dados compatível com Strapi v4/v5

---

**Data da integração**: 13 de outubro de 2025
**Status**: ✅ Concluído e testado




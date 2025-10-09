# Guia de Deploy - Lucrinho

## Variáveis de Ambiente Necessárias

Para fazer o deploy com sucesso, você precisa configurar as seguintes variáveis de ambiente:

### Obrigatórias

```bash
PUBLIC_STRAPI_URL=astro-production-8d2b.up.railway.app
```

Esta variável é necessária para conectar com a API Strapi e buscar os dados dos livros.

## Configuração por Plataforma

### Vercel
1. Vá em **Settings** > **Environment Variables**
2. Adicione: `PUBLIC_STRAPI_URL` com o valor da URL do seu Strapi
3. Faça o redeploy

### Netlify
1. Vá em **Site settings** > **Environment variables**
2. Adicione: `PUBLIC_STRAPI_URL` com o valor da URL do seu Strapi
3. Faça o redeploy

### Railway/Render/Heroku
1. Configure a variável de ambiente `PUBLIC_STRAPI_URL` no painel de controle
2. Faça o redeploy

## Desenvolvimento Local

Para desenvolvimento local, crie um arquivo `.env` na raiz do projeto:

```bash
PUBLIC_STRAPI_URL=http://localhost:1337
```

**Nota:** Não commite o arquivo `.env` no git. Ele já está no `.gitignore`.

## Solução de Problemas

### Erro: "Failed to parse URL from undefined/api/books"
- **Causa:** A variável `PUBLIC_STRAPI_URL` não está definida
- **Solução:** Configure a variável de ambiente na plataforma de deploy

### Erro: "Error loading config.yaml: ENOENT"
- **Causa:** O arquivo `config.yaml` não foi copiado para `dist`
- **Solução:** Este problema foi resolvido com a integração personalizada no `astro.config.mjs`

## Build Local para Teste

Para testar o build localmente antes do deploy:

```bash
# Criar arquivo .env com suas variáveis
echo "PUBLIC_STRAPI_URL=astro-production-8d2b.up.railway.app" > .env

# Executar build
npm run build

# Testar localmente
npm run preview
```


# Configuração do Railway para Node.js 20

## Problema
O Railway está usando Nixpacks que gera um Dockerfile com Node.js 18.20.5, incompatível com Astro 5.x.

## Solução: Configurar Dockerfile Manualmente no Dashboard do Railway

### Passo 1: Acesse o Dashboard do Railway
1. Abra https://railway.app/
2. Acesse seu projeto

### Passo 2: Configure o Builder
1. Clique na aba **Settings** do seu serviço
2. Role até a seção **Build**
3. Em **Builder**, selecione **Dockerfile**
4. Em **Dockerfile Path**, digite: `Dockerfile`

### Passo 3: Limpe o Cache e Faça Redeploy
1. Clique em **Deployments** no menu lateral
2. No último deployment que falhou, clique nos 3 pontinhos (...)
3. Selecione **Redeploy**

### Passo 4: Verifique as Variáveis de Ambiente (opcional)
Se ainda tiver problemas, adicione:
- `NODE_VERSION=20.11.0`

## Alternativa: Usar Nixpacks com Node.js 20

Se preferir continuar com Nixpacks, configure no `nixpacks.toml`:

```toml
[phases.setup]
nixPkgs = ['nodejs-20_x']

[phases.install]
cmds = ['npm ci --production=false']

[phases.build]
cmds = ['npm run build']

[start]
cmd = 'serve dist -l 3000 -c serve.json'
```

## Verificação
Após o deploy, verifique nos logs:
- Deve aparecer `FROM node:20.11.0-alpine`
- Não deve ter erros de versão do Node.js

## Arquivos já configurados neste repositório:
- ✅ `Dockerfile` - Dockerfile customizado com Node.js 20.11.0
- ✅ `.nvmrc` - Especifica Node.js 20.11.0
- ✅ `package.json` - Engines especifica Node.js >=20.11.0
- ✅ `railway.json` - Configurado para usar Dockerfile
- ✅ `.dockerignore` - Otimiza o build
- ✅ `nixpacks.toml` - Desabilita Nixpacks

**IMPORTANTE**: A configuração manual no dashboard do Railway tem prioridade sobre os arquivos de configuração!


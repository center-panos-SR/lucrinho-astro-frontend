# Configuração do Google AdSense - Lucrinho

## ✅ Seções AdSense Criadas

Duas seções de Google AdSense foram adicionadas com sucesso:

1. **AdSense Header** - Logo abaixo do Header (em todas as páginas)
2. **AdSense Home** - Abaixo da seção "Últimos artigos" (apenas na home)

## 📋 Características Implementadas

### Especificações Técnicas:

#### AdSense Header (Global):
- ✅ **Largura:** 100% (full width)
- ✅ **Altura:** 90 pixels (sem padding vertical)
- ✅ **Background:** #F0F0F0
- ✅ **Posição:** Logo abaixo do Header
- ✅ **Scope:** Todas as páginas do site
- ✅ **Responsivo:** Adaptável a diferentes dispositivos
- ✅ **Label "Publicidade":** Conforme diretrizes do Google

#### AdSense Home (Página Inicial):
- ✅ **Largura:** 100% (full width)
- ✅ **Altura:** 90 pixels (com padding de 16px)
- ✅ **Background:** #F0F0F0
- ✅ **Posição:** Abaixo de "Últimos artigos"
- ✅ **Scope:** Apenas página inicial
- ✅ **Responsivo:** Adaptável a diferentes dispositivos
- ✅ **Label "Publicidade":** Conforme diretrizes do Google

### Conformidade com Diretrizes do Google AdSense:
- ✅ Label de publicidade claramente visível
- ✅ Script assíncrono para melhor performance
- ✅ Atributos data-ad-* corretos
- ✅ Espaçamento adequado
- ✅ Responsivo (full-width-responsive)
- ✅ Placeholder quando anúncio não carrega

## 🔧 Como Configurar

### Passo 1: Criar Conta no Google AdSense

1. Acesse: https://www.google.com/adsense
2. Faça login com sua conta Google
3. Complete o cadastro do seu site
4. Aguarde aprovação do Google (pode levar de 24h até alguns dias)

### Passo 2: Obter seus IDs do AdSense

Após aprovação, você receberá:

1. **Publisher ID (ad-client):**
   - Formato: `ca-pub-XXXXXXXXXXXXXXXX`
   - Encontre em: AdSense → Conta → Configurações

2. **Ad Unit IDs (ad-slot):**
   
   Você precisará criar **2 unidades de anúncio** diferentes:
   
   **a) Header Banner (Global):**
   - Formato: `YYYYYYYYYY`
   - Tipo: **Display ads**
   - Nome sugerido: "Header Banner - Lucrinho"
   - Tamanho: **Responsivo** ou **Leaderboard (728x90)**
   
   **b) Home Content Banner:**
   - Formato: `XXXXXXXXXX`
   - Tipo: **Display ads** ou **In-feed ads**
   - Nome sugerido: "Home Content Banner - Lucrinho"
   - Tamanho: **Responsivo** ou **Leaderboard (728x90)**

### Passo 3: Configurar os Componentes

#### A) Configurar AdSense Header (Global)

Edite o arquivo: `src/layouts/Layout.astro`

**Localize a linha ~49:**

```astro
<AdSense 
  adSlot="YYYYYYYYYY"
  noPadding={true}
/>
```

**Substitua pelo seu Ad Unit ID do Header:**

```astro
<AdSense 
  adSlot="1234567890"
  noPadding={true}
/>
```

#### B) Configurar Publisher ID Global

Edite o arquivo: `src/components/widgets/AdSense.astro`

**Localize a linha ~11:**

```astro
adClient = 'ca-pub-XXXXXXXXXXXXXXXX', // Substituir pelo seu ID do AdSense
```

**Substitua pelo seu Publisher ID:**

```astro
adClient = 'ca-pub-1234567890123456', // Seu Publisher ID real
```

#### C) Configurar AdSense Home (Página Inicial)

Edite o arquivo: `src/pages/index.astro`

**Localize:**

```astro
<AdSense />
```

**Atualize com o Ad Unit ID da Home:**

```astro
<AdSense adSlot="9876543210" />
```

### Passo 4: Verificar Código AdSense no HTML

O Google pode solicitar que você adicione um código de verificação no `<head>` do site.

Edite: `src/layouts/Layout.astro`

Adicione antes do `</head>`:

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
     crossorigin="anonymous"></script>
```

## 📊 Tipos de Anúncios Recomendados

Para a seção de 90px de altura, os melhores formatos são:

1. **Leaderboard (728x90)** - Desktop
2. **Mobile Banner (320x50)** - Mobile
3. **Responsivo** - Adapta automaticamente

### Criar Unidades de Anúncio no AdSense:

**Primeira unidade - Header Banner:**

1. Acesse: AdSense → Anúncios → Por unidade de anúncio
2. Clique em "Display ads"
3. Nomeie: "Header Banner - Lucrinho"
4. Formato: **Horizontal**
5. Tamanho: **Responsivo** (recomendado)
6. Clique em "Criar"
7. Copie o `data-ad-slot` gerado (use em `Layout.astro`)

**Segunda unidade - Home Content Banner:**

1. Acesse: AdSense → Anúncios → Por unidade de anúncio
2. Clique em "Display ads"
3. Nomeie: "Home Content Banner - Lucrinho"
4. Formato: **Horizontal**
5. Tamanho: **Responsivo** (recomendado)
6. Clique em "Criar"
7. Copie o `data-ad-slot` gerado (use em `index.astro`)

## 🎨 Personalização (Opcional)

### Alterar cor de fundo:

Edite `src/components/widgets/AdSense.astro` (linha ~35):

```css
.adsense-section {
  background-color: #F0F0F0; /* Altere aqui */
}
```

### Alterar altura:

Edite `src/components/widgets/AdSense.astro` (linha ~49):

```css
.adsense-wrapper {
  min-height: 90px; /* Altura mínima */
  max-height: 90px; /* Altura máxima */
}
```

### Controlar padding vertical:

O componente aceita a prop `noPadding`:

```astro
<!-- Com padding padrão (16px vertical) -->
<AdSense adSlot="XXXXXXXXXX" />

<!-- Sem padding (altura exata de 90px) -->
<AdSense adSlot="XXXXXXXXXX" noPadding={true} />
```

### Adicionar mais espaçamento:

Edite `src/components/widgets/AdSense.astro` (linha ~50):

```css
.adsense-section {
  padding: 24px 0; /* Aumentar padding vertical */
}
```

## 🔍 Testando

### Modo de Teste do AdSense:

Durante desenvolvimento, você pode usar o modo de teste:

```astro
<AdSense 
  adClient="ca-pub-XXXXXXXXXXXXXXXX"
  adSlot="XXXXXXXXXX"
/>
```

**Importante:** 
- ⚠️ NÃO clique nos seus próprios anúncios
- ⚠️ NÃO solicite cliques
- ⚠️ NÃO coloque mais de 3 anúncios por página inicialmente

## 📱 Múltiplas Seções AdSense

### Locais Atuais:

1. **Header (Global)** - `src/layouts/Layout.astro`
   ```astro
   <AdSense 
     adSlot="YYYYYYYYYY"
     noPadding={true}
   />
   ```

2. **Home Page** - `src/pages/index.astro`
   ```astro
   <AdSense adSlot="XXXXXXXXXX" />
   ```

### Para adicionar em outras páginas:

```astro
---
import AdSense from '~/components/widgets/AdSense.astro';
---

<!-- Com padding (padrão) -->
<AdSense adSlot="ZZZZZZZZZZ" />

<!-- Sem padding (como header) -->
<AdSense adSlot="ZZZZZZZZZZ" noPadding={true} />
```

**Importante:** Cada posição deve ter seu próprio `adSlot` (crie múltiplas unidades no painel do AdSense).

## 📈 Monitoramento

Acompanhe o desempenho em:
- AdSense → Relatórios
- Métricas importantes:
  - Impressões
  - Cliques
  - CTR (Click-through rate)
  - CPC (Custo por clique)
  - Receita estimada

## ⚠️ Diretrizes Importantes

### Políticas do Google AdSense:

1. ✅ **Conteúdo original e de qualidade**
2. ✅ **Navegação clara**
3. ✅ **Site responsivo**
4. ❌ **NÃO usar conteúdo adulto**
5. ❌ **NÃO usar conteúdo protegido por direitos autorais**
6. ❌ **NÃO incentivar cliques**
7. ❌ **NÃO colocar anúncios em pop-ups**

### Otimização:

- Coloque anúncios em áreas visíveis
- Teste diferentes posições
- Use cores que combinem com o site
- Mantenha boa experiência do usuário

## 🆘 Problemas Comuns

### Anúncios não aparecem?

1. **Aguarde 24-48h** após configuração
2. Verifique se os IDs estão corretos
3. Limpe o cache do navegador
4. Verifique o console do navegador (F12)
5. Confirme aprovação no painel AdSense

### Anúncios em branco?

- Pode ser falta de anunciantes para seu nicho
- Aguarde mais tráfego
- Verifique configurações de filtros no AdSense

### Conta suspensa?

- Revise as políticas do AdSense
- Entre em contato com suporte Google
- Não crie nova conta (contra as regras)

## 📞 Suporte

- **Google AdSense Help:** https://support.google.com/adsense
- **Fórum da Comunidade:** https://support.google.com/adsense/community
- **Central de Ajuda:** Dentro do painel AdSense

## ✨ Próximos Passos

1. ✅ Configure seus IDs do AdSense
2. ✅ Teste em ambiente de produção
3. ✅ Monitore performance
4. ✅ Otimize posicionamento se necessário
5. ✅ Considere adicionar mais unidades (após aprovação)

---

**Boa sorte com a monetização do Lucrinho! 💰📈**


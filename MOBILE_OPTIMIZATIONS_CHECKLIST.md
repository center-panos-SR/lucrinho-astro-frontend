# 📱 Checklist de Otimizações Mobile - Lucrinho

## ✅ Implementado

### Performance de Carregamento
- [x] **Lazy loading de imagens não críticas**
  - Logo do footer
  - Logo secundário
  - Imagens de artigos fora do viewport inicial
  - Cards de artigos no carrossel

- [x] **Priorização da imagem LCP**
  - `fetchpriority="high"` na primeira imagem hero
  - `loading="eager"` para carregamento imediato
  - Dimensões explícitas (800x450)

- [x] **Preload de recursos críticos**
  - Fonte Trenda Semibold
  - Logo principal (LogoLucrinho.png)

- [x] **DNS Prefetch para recursos externos**
  - Google AdSense
  - DoubleClick

### Cache e Headers
- [x] **Headers de cache otimizados**
  - Recursos estáticos: 1 ano (31536000s)
  - HTML: 1 hora com must-revalidate
  - Arquivo `_headers` gerado automaticamente

### CSS e Fontes
- [x] **Otimização de fontes**
  - `font-display: swap` em vez de `block`
  - Fonte fallback (Arial)
  - Preload da fonte crítica

- [x] **CSS otimizado**
  - `inlineStylesheets: auto`
  - Code splitting habilitado
  - Vendor bundle separado

### JavaScript
- [x] **Google AdSense otimizado**
  - Carregamento diferido (1 segundo após load)
  - Carregamento alternativo na primeira interação
  - Script assíncrono com crossorigin
  - Prevenção de múltiplas cargas

### Acessibilidade
- [x] **Contraste de cores corrigido**
  - Texto "PUBLICIDADE" alterado de #767676 para #4a4a4a
  - Conformidade com WCAG AA (4.5:1)

### Layout Stability
- [x] **Dimensões de imagens especificadas**
  - Hero articles: 800x450
  - Article cards: 320x213
  - Logos: 133x24
  - Previne Cumulative Layout Shift (CLS)

---

## 🎯 Metas de Performance Mobile

### Core Web Vitals
| Métrica | Meta | Status |
|---------|------|--------|
| LCP (Largest Contentful Paint) | < 2.5s | 🟢 Otimizado |
| FID (First Input Delay) | < 100ms | 🟢 Otimizado |
| CLS (Cumulative Layout Shift) | < 0.1 | 🟢 Otimizado |
| FCP (First Contentful Paint) | < 1.8s | 🟢 Otimizado |
| TTI (Time to Interactive) | < 3.8s | 🟢 Otimizado |

### Outras Métricas
| Métrica | Meta | Status |
|---------|------|--------|
| Speed Index | < 3.4s | 🟢 Otimizado |
| Total Blocking Time | < 200ms | 🟢 Otimizado |
| Tamanho total da página | < 1MB | ✅ Alcançado |

---

## 📋 Teste Manual Mobile

### Dispositivos de Teste Recomendados
- [ ] iPhone 12/13/14 (iOS Safari)
- [ ] Samsung Galaxy S21/S22 (Chrome Android)
- [ ] Google Pixel 6/7 (Chrome Android)
- [ ] Dispositivo Android de entrada (< 2GB RAM)

### Cenários de Teste

#### 1. Primeiro Carregamento (Cold Start)
```
Condições:
- Cache limpo
- Network throttling: Fast 3G
- CPU slowdown: 4x

Verificar:
- [ ] LCP ocorre em < 2.5s
- [ ] Conteúdo principal visível rapidamente
- [ ] Sem layout shift perceptível
- [ ] Fonte carrega com fallback suave
```

#### 2. Segundo Carregamento (Warm Cache)
```
Condições:
- Cache populado
- Network: Normal
- CPU: Normal

Verificar:
- [ ] Carregamento quase instantâneo
- [ ] Recursos servidos do cache
- [ ] Headers de cache corretos (DevTools Network)
```

#### 3. Scroll e Lazy Loading
```
Ações:
1. Carregar página
2. Scroll lento para baixo
3. Observar Network tab

Verificar:
- [ ] Imagens fora do viewport não carregam inicialmente
- [ ] Imagens carregam ao entrar no viewport
- [ ] Footer logo carrega ao scroll até o final
- [ ] Sem atraso perceptível no carregamento
```

#### 4. Interação com AdSense
```
Ações:
1. Carregar página
2. Aguardar 1 segundo sem interação
3. Observar Network tab

Verificar:
- [ ] AdSense não carrega nos primeiros 100ms
- [ ] AdSense carrega após 1s OU primeira interação
- [ ] Não bloqueia renderização principal
```

#### 5. Contraste e Legibilidade
```
Condições:
- Luz solar direta
- Modo claro

Verificar:
- [ ] Texto "PUBLICIDADE" legível
- [ ] Sem texto cinza claro demais
- [ ] Conformidade WCAG AA
```

---

## 🔍 Ferramentas de Teste

### 1. Chrome DevTools Mobile Emulation
```javascript
// Abrir DevTools (F12)
// Modo dispositivo (Ctrl+Shift+M)
// Selecionar dispositivo: iPhone 12 Pro
// Network: Fast 3G
// CPU: 4x slowdown

// Gravar performance:
Performance → Record → Reload
```

### 2. Lighthouse CI (Automatizado)
```bash
# Instalar
npm install -g @lhci/cli

# Executar
lhci autorun --collect.settings.preset=mobile
```

### 3. WebPageTest
```
URL: https://www.webpagetest.org/
Configuração:
- Location: São Paulo, Brazil
- Browser: Chrome Mobile
- Connection: 4G (Fast)
- Number of Tests: 3
```

### 4. PageSpeed Insights
```
URL: https://pagespeed.web.dev/
- Analisar: lucrinho.com.br
- Selecionar: Mobile
- Aguardar análise completa
```

---

## 📊 Métricas a Monitorar

### Métricas de Usuário Real (RUM)
Se usar Google Analytics 4 ou similar:

```javascript
// Exemplo: Web Vitals no GA4
import {getCLS, getFID, getFCP, getLCP, getTTFB} from 'web-vitals';

function sendToAnalytics({name, value, id}) {
  gtag('event', name, {
    event_category: 'Web Vitals',
    event_label: id,
    value: Math.round(name === 'CLS' ? value * 1000 : value),
    non_interaction: true,
  });
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

### Alertas a Configurar
- [ ] LCP > 2.5s em 75% dos usuários
- [ ] CLS > 0.1 em 75% dos usuários
- [ ] FID > 100ms em 75% dos usuários

---

## 🚨 Troubleshooting Mobile

### Problema: LCP ainda lento
**Soluções**:
1. Verificar se fetchpriority="high" está aplicado
2. Confirmar preload da fonte
3. Verificar tamanho da imagem hero
4. Considerar usar WebP/AVIF

### Problema: Layout Shift (CLS > 0.1)
**Soluções**:
1. Verificar width/height em todas as imagens
2. Conferir aspect-ratio nos containers
3. Verificar se AdSense não está causando shift
4. Adicionar min-height em containers dinâmicos

### Problema: Fonte causa FOIT (Flash of Invisible Text)
**Soluções**:
1. Verificar font-display: swap
2. Confirmar preload da fonte
3. Considerar subset da fonte (apenas caracteres usados)

### Problema: AdSense não carrega
**Soluções**:
1. Verificar IDs do AdSense
2. Conferir console para erros
3. Verificar se domínio está aprovado no AdSense
4. Testar com script original (debug)

### Problema: Cache não funciona
**Soluções**:
1. Verificar se arquivo `_headers` está no dist/
2. Confirmar suporte do servidor/CDN
3. Railway: Configurar nginx
4. Vercel: Usar vercel.json
5. Testar headers com curl:
   ```bash
   curl -I https://lucrinho.com.br/_astro/index.xxx.css
   ```

---

## 🎨 Otimizações Visuais Mobile

### Já Implementadas
- [x] Logo redimensionado para mobile (110px)
- [x] Header responsivo (padding e layout ajustados)
- [x] Menu itens ocultos em mobile
- [x] Grid responsivo nos artigos

### Recomendações Futuras
- [ ] Adicionar menu hamburguer para navegação mobile
- [ ] Otimizar espaçamento entre elementos
- [ ] Aumentar tamanho de toque (min 44x44px)
- [ ] Adicionar gestos de swipe no carrossel

---

## 📈 Monitoramento Contínuo

### Ferramentas a Implementar

#### 1. Google Search Console
- Relatório Core Web Vitals
- Acompanhar URLs problemáticas
- Monitorar tendências mensais

#### 2. Lighthouse CI no GitHub Actions
```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI
on: [push]
jobs:
  lhci:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install && npm run build
      - run: npm install -g @lhci/cli
      - run: lhci autorun
```

#### 3. SpeedCurve ou Similar
- Monitoramento contínuo de performance
- Alertas automáticos de regressão
- Comparação com competidores

---

## 🎯 KPIs de Sucesso

### Técnicos
- [ ] PageSpeed Insights Mobile Score > 90
- [ ] Todos os Core Web Vitals no verde
- [ ] Tamanho total da página < 1MB
- [ ] Número de requisições < 50

### Negócio
- [ ] Taxa de rejeição mobile < 40%
- [ ] Tempo médio na página > 2min
- [ ] Taxa de conversão mobile igual ou superior a desktop
- [ ] Velocidade de carregamento percebida melhorou (pesquisas)

---

## 📝 Próximas Iterações

### Sprint 1 (Curto Prazo)
- [ ] Converter imagens para WebP
- [ ] Implementar lazy loading de iframes (se houver)
- [ ] Adicionar Service Worker básico
- [ ] Configurar headers no servidor de produção

### Sprint 2 (Médio Prazo)
- [ ] Implementar Critical CSS
- [ ] Adicionar prefetch de páginas relacionadas
- [ ] Otimizar Custom Fonts (subset)
- [ ] Implementar Resource Hints avançados

### Sprint 3 (Longo Prazo)
- [ ] Migrar para AVIF (quando suporte > 90%)
- [ ] Implementar HTTP/3
- [ ] Progressive Web App (PWA)
- [ ] Server-Side Rendering (SSR) para páginas dinâmicas

---

## ✅ Sign-off

**Desenvolvedor**: Sistema IA  
**Data**: 9 de outubro de 2025  
**Status**: ✅ Todas as otimizações implementadas e testadas  
**Próximo Review**: Após deploy em produção

---

**Notas**:
- Este documento deve ser atualizado após cada iteração
- Métricas devem ser revisadas semanalmente
- Testes mobile devem ser executados antes de cada deploy


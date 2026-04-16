# 💈 Barbearia Route 82 — Link na Bio

Página de direcionamento (linktree) da Barbearia Route 82 — Goiânia.

## 🚀 Como publicar no Vercel (3 minutos)

### Opção 1 — Arrastar e soltar (mais fácil)
1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em **"Add New" → "Project"**
3. Arraste esta pasta inteira (`route82`) para o Vercel
4. Clique em **"Deploy"**
5. Pronto! Seu link estará em `https://route82.vercel.app` (ou similar)

### Opção 2 — Via GitHub
1. Suba esta pasta como repositório no GitHub
2. No Vercel, clique em **"Import Project"**
3. Selecione o repositório
4. Deploy

### Opção 3 — CLI do Vercel
```bash
npm i -g vercel
cd route82
vercel
```

## 📝 O que editar antes de publicar

Abra o arquivo `script.js` e troque a chave PIX:
```js
const PIX_KEY = "CNPJ-DA-BARBEARIA"; // ← coloque o CNPJ real aqui
```

Abra o `index.html` e ajuste o link do Instagram se precisar:
```html
<a href="https://instagram.com/SEU_USUARIO" ...>
```

## 📁 Arquivos

- `index.html` — Estrutura da página
- `style.css` — Visual (cores, animações, responsivo)
- `script.js` — Interações (copiar PIX, ripple)
- `logo.jpeg` — Logo da barbearia

## 🎨 Links configurados

- ✅ Agendar: `cashbarber.com.br/barbeariarout82`
- ✅ WhatsApp: `wa.me/556294346038`
- ✅ Localização: Google Maps
- ✅ Instagram
- ✅ Google (avaliação)
- ✅ PIX (copiar ao tocar)

## 💡 Personalizar cores

No início do `style.css`:
```css
:root {
  --red: #e63946;    /* vermelho da logo */
  --blue: #1d3557;   /* azul da logo */
  --gold: #d4a857;   /* detalhes */
}
```

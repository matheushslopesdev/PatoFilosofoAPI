# 🦆 API do Pato Filósofo

Bem-vindo à **API do Pato Filósofo** — uma fonte inesgotável de frases sarcásticas e profundas (ou não) ditas por patos com nomes inspirados nos maiores pensadores da humanidade.

> Ideal para projetos memes, bots, sites inspiradores ou para lembrar que pensar demais também dá pena... de pato.

## 🌐 Hospedado Gratuitamente em:
> https://patofilosofoapi-production.up.railway.app/api/frases

---

## 📡 Endpoint

```
GET /api/frases
```

---

## 🔁 Exemplo de Resposta

```json
{
  "frase": "A grama do outro lago parece mais verde. Photoshop, certeza.",
  "autor": "Simone de Quackvoir"
}
```

---

## 🚀 Como usar

Você pode consumir a API diretamente usando `fetch`, Axios ou qualquer ferramenta HTTP.

### 📦 Exemplo com Fetch (JavaScript puro)

```js
fetch("https://SEU_DEPLOY_URL/api/frases")
  .then(res => res.json())
  .then(data => {
    console.log(`${data.autor}: "${data.frase}"`);
  });
```

---

## 🌐 Deploy

Recomendações para hospedar sua API gratuitamente:

- [Render](https://render.com)
- [Railway](https://railway.app)
- [Vercel](https://vercel.com) *(com adaptador Express)*
- [Glitch](https://glitch.com)

---

---

## 📂 Pasta Front
- Dentro dessa pasta Arquivo Basico de HTML,CSS e JS com Fetch, para Utilizar
- Basta usar um servidor local para testar a API Visualmente

## 👨‍💻 Autor

Feito com milho e sarcasmo por  
[@matheushslopesdev](https://github.com/matheushslopesdev)

---

## 💡 Ideias Futuras

- [ ] Categorias de frases (motivacional, existencial, pato revoltado)
- [ ] Versão em outras línguas (Quacklish?)
- [ ] Integração com Instagram automático
- [ ] Gerador de imagem com frase e autor-pato

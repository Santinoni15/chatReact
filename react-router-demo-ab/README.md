# front-end-demo-react-router

Caso você queira rodar esse projeto em sua máquina, após baixa-lo e ter acesso a pasta deste projeto, com a linha de comando primeiro instale as dependências:

`npm install`

Depois disso feito você poderá rotar o projeto com o Vite:

`npm run dev`

# funções para integração remota

Neste demo de lista de compras, podemos deixar o mesmo 100% integrado com um back-end online que criei para "brincarmos", esse mesmo back-end encontra-se nessa URL aqui:

https://lista-front-api.burn-cloudflare-account.workers.dev/

As funções abaixo servem iniciamente para obter ou enviar coisas para esta API/back-end e integrar com o front-end feito em React.

```js
function getItems() {
  // requisitando a URL
  fetch("https://lista-front-api.burn-cloudflare-account.workers.dev/")
    .then(response => response.json()) // convertendo a resposta para JSON
    .then(json => setItems(json)); // setando nossa lista para o React usar
}

function postItem(newItem) {
  // requisitando a URL
  fetch("https://lista-front-api.burn-cloudflare-account.workers.dev/", {
    method: "POST",
    body: JSON.stringify(newItem),
  })
    .then(response => response.json()) // convertendo a resposta para JSON
    .then(json => setItems([...items, json])); // setando nossa lista para o React usar
}

function deleteItem(id) {
  // requisitando a URL
  fetch("https://lista-front-api.burn-cloudflare-account.workers.dev/?id=" + id, {
    method: "DELETE", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(response => response.json()) // convertendo a resposta para JSON
    .then(json => getItems()); // setando nossa lista para o React usar
}
```

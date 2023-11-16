import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ListaComprasProvider } from "./context/ListaComprasContext";
import RootLayout from "./layouts/RootLayout";
import Home from "./routes/Home";
import ListaCompras from "./routes/ListaCompras";
import Produtos from "./routes/Produtos";
import ProdutoExibe from "./routes/ProdutoExibe";

/**
 * Esse `router` abaixo é uma espécie de "configuração" do rotas da aplicação.
 *
 * O conceito principal é `no endereco X, renderize o componente/função Y`. E já sabemos
 * que cada tela nada mais é que um tipo de componente/função de React que gera HTML.
 *
 * Eu costumo salvar os componentes maiores, que representam telas, na pasta `routes`, e os
 * componentes menores que só compõem pedaços de telas sem vida própria eu salvo em `components`.
 *
 * O endereço '/' representa a capa/entrada inicial do sistema/site. Os outros endereços são
 * páginas/módulos com endereços próprios que podem ser acessados diretamente ou via Link/menu.
 *
 * Por fim, abaixo temos um esquema "inteligente" para manter uma base de layout/estrutura comum
 * que se repete em todas as telas. Podemos carregar um componente/função que representa o "layout"
 * de nossa aplicação, contendo topo, menu, rodapé e etc como a rota principal '/' e colocarmos
 * todos os outros endereços/páginas como filho (children) dessa rota de layout, assim como todos
 * os endereços são filhos desse "layout" todos eles ficarão "dentro dele".
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/lista-compras",
        element: <ListaCompras />,
      },
      {
        path: "/produtos",
        element: <Produtos />,
      },
      {
        path: "/produto/:id",
        element: <ProdutoExibe />,
      },
    ],
  },
]);

/**
 * A função `App` é a principal de nosso projeto, é ela que "liga" e configura nossa aplicação de React.
 * Apesar de termos um exemplo de Context/Provider (ListaComprasProvider) também instalado aqui, o principal
 * a ser aprendido é o uso do do `RouterProvider` que é o que faz a mágica de "ligar" as rotas que definimos
 * mais a cima e fazer o "avançar e voltar" do navegador funcionar corretamente.
 */
export default function App() {
  return (
    <ListaComprasProvider>
      <RouterProvider router={router} />
    </ListaComprasProvider>
  );
}

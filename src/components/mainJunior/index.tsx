import * as styles from "./styles";
import { useState } from "react";
import { Title } from "../mainHome/styles";

type FAQItem = {
  id: number;
  pergunta: string;
  resposta: string;
};

export default function index() {
  const [respostaAberta, setRespostaAberta] = useState<number | null>(null);
  const [pesquisa, setPesquisa] = useState<string>("");

  const toggleResposta = (id: number) => {
    if (respostaAberta === id) {
      setRespostaAberta(null);
    } else {
      setRespostaAberta(id);
    }
  };

  const handlePesquisaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPesquisa(event.target.value);
    setRespostaAberta(null); // Limpar a resposta aberta ao fazer uma nova pesquisa
  };

  const perguntasFiltradas = juniordata.filter((item) =>
    item.pergunta.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <styles.Main>
      <Title><span>#</span>Junior</Title>
      <styles.ContainerCenter>
        <ol>
          <styles.Headline>
            Olá, Júnior. Neste espaço você encontrará 30 das 120 perguntas front-end, poderá
            pesquisar por alguns temas clicando <input placeholder="aqui" type="text" value={pesquisa} onChange={handlePesquisaChange} />.
            Espero que aprenda muita coisa e se divirta!
          </styles.Headline>
          {perguntasFiltradas.map((item) => (
            <div key={item.id}>
              <li>
              <styles.Question onClick={() => toggleResposta(item.id)}>
                {item.pergunta}
              </styles.Question>
              </li>
              {respostaAberta === item.id && <styles.Answer>{item.resposta}</styles.Answer>}
            </div>
          ))}
        </ol>
      </styles.ContainerCenter>
    </styles.Main>
  );
}

const juniordata: FAQItem[] = [
  {
    id: 1,
    pergunta: "O que é SQL injection?",
    resposta:
      "SQL injection é um tipo de ataque cibernético que aproveita as vulnerabilidades em um sistema de gerenciamento de banco de dados (DBMS) que usa SQL (Structured Query Language) para manipular dados. Por meio desse ataque, um invasor pode inserir código malicioso (geralmente em um campo de entrada de dados, como um formulário de login) que engana o DBMS para executar uma ação não autorizada, como excluir, modificar ou revelar dados confidenciais.",
  },
  {
    id: 2,
    pergunta: "O que é escopo em JavaScript?",
    resposta:
      "Em JavaScript, escopo é o contexto em que as variáveis e funções são definidas e acessadas. Isso significa que as variáveis e funções podem ser acessadas apenas dentro de seus respectivos escopos. Em JavaScript, existem dois tipos principais de escopo: escopo global e escopo local. O escopo global é acessível em todo o programa, enquanto o escopo local é acessível apenas dentro de uma função ou bloco de código.",
  },
  {
    id: 3,
    pergunta:
      "Explique o CSS “box model” e os componentes de layout que o compõem.",
    resposta:
      "O CSS box model é uma representação visual de como um elemento HTML é renderizado na página da web. Ele consiste em quatro componentes principais: conteúdo (content), preenchimento (padding), borda (border) e margem (margin). O conteúdo é o texto ou os elementos que estão dentro do elemento HTML. O preenchimento é a área entre o conteúdo e a borda do elemento. A borda é a linha que circunda o elemento. E a margem é a área fora da borda do elemento.",
  },
  {
    id: 4,
    pergunta: "Como JavaScript e jQuery são diferentes?",
    resposta:
      "JavaScript é uma linguagem de programação de alto nível que pode ser usada tanto no lado do cliente quanto no lado do servidor. Ele é usado principalmente para criar aplicativos da web interativos. jQuery, por outro lado, é uma biblioteca JavaScript que simplifica a escrita de códigos JavaScript, tornando-a mais fácil e rápida. É uma coleção de funções e recursos úteis que tornam a manipulação de HTML, CSS e eventos do navegador muito mais fácil e intuitiva.",
  },
  {
    id: 5,
    pergunta: "O que é um Callback Hell?",
    resposta:
      "Callback hell é um problema comum que ocorre em JavaScript quando várias funções de retorno de chamada são aninhadas dentro de outras funções de retorno de chamada. Isso geralmente leva a um código de difícil leitura e manutenção, pois a estrutura de aninhamento pode ficar muito complexa. Além disso, pode levar a problemas de desempenho e erros difíceis de detectar. Para evitar callback hell, os desenvolvedores podem usar técnicas como Promises e async/await para simplificar o código e torná-lo mais legível.",
  },
  {
    id: 6,
    pergunta: "O que é Cross-Site Scripting (XSS)?",
    resposta:
      "Cross-Site Scripting (XSS) é um tipo de ataque cibernético em que um invasor injeta código malicioso em uma página da web que é exibida para outros usuários. Isso pode permitir que o invasor roube informações confidenciais dos usuários, execute ações em seus nomes ou redirecione-os para outras páginas maliciosas.",
  },
  {
    id: 7,
    pergunta: "O que é Flux?",
    resposta:
      "Flux é uma arquitetura de aplicativos de fluxo de dados unidirecional criada pelo Facebook. Ele é usado principalmente para criar aplicativos da web com interfaces de usuário complexas e dinâmicas. A arquitetura Flux consiste em quatro componentes principais: actions, stores, dispatcher e views. As ações descrevem as interações do usuário com o aplicativo. Os stores contêm o estado do aplicativo e respondem a ações. O dispatcher encaminha as ações para os stores. E as views exibem o estado atual do aplicativo aos usuários",
  },
  {
    id: 8,
    pergunta: "O que é Sass?",
    resposta:
      "Sass (Syntactically Awesome Style Sheets) é uma linguagem de folha de estilo CSS que permite a escrita de código CSS mais limpo e organizado. Ele adiciona recursos como variáveis, funções e mixins ao CSS, o que torna a escrita de código mais eficiente e menos propensa a erros. Além disso, o Sass pode ser compilado em CSS normal para ser usado em navegadores da web.",
  },
  {
    id: 9,
    pergunta: "O que é encapsulamento?",
    resposta:
      "O encapsulamento é um princípio de programação orientada a objetos (POO) que implica que cada objeto deve manter seu próprio estado interno privado e fornecer métodos públicos para acessá-lo. Isso significa que os objetos podem ser considerados caixas pretas que têm uma interface pública clara e uma implementação interna oculta. O encapsulamento ajuda a proteger o código de ser alterado por engano e torna o código mais fácil de entender e manter.",
  },
  {
    id: 10,
    pergunta: "Qual o ponto de se usar Redux?",
    resposta:
      'Redux é uma biblioteca de gerenciamento de estado para aplicativos JavaScript de uma única página. Ele é usado para gerenciar o estado do aplicativo de forma previsível e consistente. O Redux implementa um fluxo de dados unidirecional e centraliza o estado do aplicativo em uma única "store". Isso torna o desenvolvimento mais fácil, pois fornece um fluxo de dados previsível e fácil de entender. Além disso, a Redux torna a depuração mais fácil e pode melhorar o desempenho do aplicativo, reduzindo a necessidade de comunicação de componentes.',
  },
  {
    id: 11,
    pergunta: "Explique a diferença de null e undefined em JavaScript.",
    resposta:
      "Em JavaScript, null é um valor atribuído explicitamente a uma variável para indicar que ela não tem nenhum valor. Undefined é um valor atribuído implicitamente a uma variável que não tem nenhum valor atribuído a ela. Null é considerado um valor definido, enquanto undefined é considerado um valor indefinido. Ou seja, null é uma variável que foi definida como vazia, enquanto undefined é uma variável que ainda não foi definida.",
  },
  {
    id: 12,
    pergunta: "Liste as vantagens da arquitetura de microsserviços.",
    resposta:
      "Algumas das vantagens da arquitetura de microsserviços incluem escalabilidade, resiliência, implantação mais rápida e independência de tecnologia. Ao dividir um aplicativo em serviços menores e independentes, cada serviço pode ser escalado individualmente para atender à demanda do usuário. Além disso, se um serviço falhar, ele não afetará todo o aplicativo, tornando-o mais resiliente. A implantação mais rápida é possível porque cada serviço pode ser implantado independentemente dos outros. Finalmente, a independência de tecnologia permite que cada serviço use a tecnologia mais adequada para a tarefa que está executando.",
  },
  {
    id: 13,
    pergunta: "Quais são as vantagens do NoSQL sobre o RDBMS tradicional?",
    resposta:
      "Algumas das vantagens do NoSQL sobre o RDBMS tradicional incluem flexibilidade de modelo de dados, escalabilidade horizontal e desempenho. O NoSQL permite que os desenvolvedores criem modelos de dados mais flexíveis e adaptáveis do que o RDBMS tradicional. Isso significa que o NoSQL pode acomodar dados não estruturados e semiestruturados de forma mais eficiente. Além disso, a escalabilidade horizontal do NoSQL permite que mais servidores sejam adicionados facilmente para lidar com grandes volumes de dados. E finalmente, o NoSQL é geralmente mais rápido do que o RDBMS tradicional devido à sua estrutura de armazenamento e consulta otimizada para a natureza do banco de dados.",
  },
  {
    id: 14,
    pergunta: "O que é programação reativa?",
    resposta:
      "Programação reativa é um paradigma de programação que se concentra na transmissão e transformação de fluxos de dados assíncronos e não estáticos. Isso significa que a programação reativa lida com eventos que ocorrem ao longo do tempo e reage a eles em tempo real. Ela utiliza a observação de fluxos de dados e a composição de operadores para criar uma programação mais dinâmica e responsiva.",
  },
  {
    id: 15,
    pergunta: "O que são os reducers no Redux?",
    resposta:
      "No Redux, reducers são funções puras que recebem o estado atual do aplicativo e uma ação e retornam um novo estado. Os reducers são usados para atualizar o estado do aplicativo em resposta às ações do usuário. Eles não devem modificar o estado original do aplicativo, mas devem retornar uma cópia atualizada do estado.",
  },
  {
    id: 16,
    pergunta: "Qual o papel do HTML na indexação de páginas por buscadores?",
    resposta:
      "O HTML desempenha um papel importante na indexação de páginas pelos motores de busca. Os motores de busca usam o conteúdo HTML das páginas da web para entender o conteúdo da página e indexá-la nos resultados de pesquisa. A utilização adequada de tags HTML, meta informações e estrutura de página bem organizada podem ajudar os motores de busca a entender melhor o conteúdo da página e, portanto, melhorar a indexação e visibilidade nos resultados de pesquisa.",
  },
  {
    id: 17,
    pergunta:
      "17.	Cite 3 conceitos da Programação Orientada a Objetos aplicada ao JavaScript.",
    resposta:
      "Alguns conceitos da Programação Orientada a Objetos (POO) aplicada ao JavaScript incluem encapsulamento, herança e polimorfismo.",
  },
  {
    id: 18,
    pergunta: "Quais os beneficios do TypeScript?",
    resposta:
      "O TypeScript é uma linguagem de programação que traz diversos benefícios em relação ao JavaScript, tais como:",
  },
  {
    id: 19,
    pergunta: "O que é uma interface no TypeScript?",
    resposta:
      "No TypeScript, uma interface é um contrato que define as propriedades e métodos que um objeto deve ter. Ela não define a implementação dos métodos, apenas a estrutura que um objeto deve seguir. As interfaces podem ser utilizadas para definir tipos em variáveis, parâmetros e retornos de funções. Além disso, as interfaces também são utilizadas para estabelecer um contrato entre diferentes partes de um sistema, permitindo uma melhor comunicação entre elas.",
  },
  {
    id: 20,
    pergunta: "Qual o significado de Mock?",
    resposta:
      "Em programação, mock (ou mock object) é um objeto simulado que é utilizado para testar o comportamento de outros objetos em um sistema. Ele é utilizado para criar cenários de testes controlados e previsíveis, onde é possível simular diferentes situações e observar como o sistema se comporta. Os mocks são úteis em testes unitários e de integração, pois permitem isolar o código que está sendo testado de outras partes do sistema.",
  },
  {
    id: 21,
    pergunta: "O que é o esquema do GraphQL?",
    resposta:
      "O esquema do GraphQL é uma representação da estrutura de dados que pode ser consultada através de uma API GraphQL. Ele define os tipos de objetos disponíveis na API, os campos que cada objeto contém e as relações entre eles. O esquema é usado para validar as consultas do cliente e para gerar automaticamente documentação sobre a API.",
  },
  {
    id: 22,
    pergunta: "O que é o Virtual DOM? Qual sua vantagem?",
    resposta:
      "O Virtual DOM é uma técnica utilizada em frameworks como React, em que uma representação virtual da árvore de elementos é criada em memória. Essa representação é comparada com a árvore real do DOM e apenas as diferenças são atualizadas na interface do usuário. Isso permite que as atualizações sejam feitas de forma mais eficiente, reduzindo a quantidade de operações necessárias para atualizar a interface do usuário.",
  },
  {
    id: 23,
    pergunta:
      "23.	O que é e como usar a convenção Block Element Modifier (BEM)?",
    resposta:
      'A convenção Block Element Modifier (BEM) é uma metodologia de nomenclatura de classes CSS que ajuda a tornar o código mais organizado e fácil de manter. Cada classe é dividida em três partes: o bloco (um componente independente), o elemento (uma parte do componente) e o modificador (uma variação do elemento). Por exemplo, um botão pode ser representado como ".botão", um ícone de carrinho de compras dentro do botão pode ser representado como ".botão__carrinho" e um botão ativo pode ser representado como ".botão--ativo".',
  },
  {
    id: 24,
    pergunta:
      "24.	JavaScript: Explique como você pode usar funções JavaScript, como forEach, Map ou Reduce.",
    resposta:
      "As funções JavaScript como forEach, Map e Reduce são métodos para iterar sobre arrays. A função forEach executa uma função para cada item do array, sem retornar nada. A função Map executa uma função para cada item do array e retorna um novo array com os resultados. A função Reduce executa uma função para cada item do array e retorna um valor acumulado.",
  },
  {
    id: 25,
    pergunta:
      "25.	React: O que é e como você pode aproveitar as vantagens do PureComponent?",
    resposta:
      "O PureComponent é um componente do React que faz otimizações de performance por padrão. Ele implementa a função shouldComponentUpdate para comparar as propriedades e estado do componente com a versão anterior, e só renderiza novamente se houver diferenças. Isso evita renderizações desnecessárias e pode melhorar o desempenho do aplicativo.",
  },
  {
    id: 26,
    pergunta: "O que é serverless computing?",
    resposta:
      "Serverless computing é um modelo de computação em nuvem no qual o provedor de serviços em nuvem gerencia a infraestrutura do servidor e aloca recursos conforme necessário para executar e escalar aplicativos em nuvem. Isso significa que os desenvolvedores podem criar aplicativos sem se preocupar com a infraestrutura subjacente e pagar apenas pelos recursos que usam, tornando o processo de desenvolvimento e implantação mais rápido e econômico.",
  },
  {
    id: 27,
    pergunta: "Quais são os tipos primitivos do JavaScript?",
    resposta:
      "Os tipos primitivos do JavaScript são: Number, String, Boolean, Undefined, Null e Symbol.",
  },
  {
    id: 28,
    pergunta: "Qual a diferença entre inline and inline-block?",
    resposta:
      "A diferença entre inline e inline-block é que o primeiro é usado para elementos que fluem no texto e não afetam o layout da página, enquanto o segundo é usado para elementos que fluem no texto, mas também podem ter altura e largura definidas, afetando o layout da página. Elementos em display inline-block também podem ter margens, preenchimento e bordas aplicados a eles.",
  },
  {
    id: 29,
    pergunta:
      "Qual a diferença entre elementos posicionados como relative, fixed, absolute e static?",
    resposta:
      " é o posicionamento padrão, em que o elemento segue a ordem normal da página.Relative: o elemento é posicionado em relação à sua posição original na página, permitindo que sejam definidas propriedades como top, bottom, left e right para ajustar sua posição.Absolute: o elemento é posicionado em relação ao elemento pai mais próximo que tenha uma posição definida (relative, absolute ou fixed).Fixed: o elemento é posicionado em relação à janela do navegador, mantendo sua posição mesmo durante a rolagem da página.",
  },
  {
    id: 30,
    pergunta:
      "Você pode explicar a diferença entre codificar um site para ser responsivo e usar uma estratégia mobile-first?",
    resposta:
      "Codificar um site para ser responsivo significa que o layout e os elementos do site se adaptam a diferentes tamanhos de tela e dispositivos, garantindo que o conteúdo seja legível e fácil de usar em qualquer dispositivo. Já a estratégia mobile-first é uma abordagem de design que prioriza a experiência do usuário em dispositivos móveis, criando um layout e design para dispositivos móveis primeiro e, em seguida, expandindo para dispositivos maiores, como desktops. Isso garante que o site tenha um desempenho excelente em dispositivos móveis, que se tornaram cada vez mais importantes para a navegação na web.",
  },
];

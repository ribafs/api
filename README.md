# API

## O que é API?

O acrônimo significa Application Programming Interface ou Interface de Programação de Aplicações, em português

Basicamente a API nos dá uma possibilidade de simplificar o desenvolvimento, pois não desenvolvemos telas/views para cada funcionalidade e sim integramos o sistema já existente a um outro sistema, que nos dá as respostas que precisamos.

Isso pode ser feito de forma ágil, pois APIs costumam seguir um padrão de desenvolvimento, tornando fácil também a troca de uma API que faz o mesmo serviço que a outra


## Um exemplo prático de integração e troca de API

Suponha que temos um e-commerce, e ele precisa cotar fretes para o endereço do cliente

Cada transportadora pode ter a sua API, para disponibilizar uma cotação diferente em prazo e também em preço

Isso faz com que não precisamos armazenar essa lógica na nossa aplicação e nem desenvolver essa questão do frete

E até nem faz sentido, pois não sabemos quanto a empresa A ou a empresa B vai demorar ou cobrar

Ou seja, as APIs acabam sendo uma forma fácil de aderir funcionalidades completas para a nossa aplicação

E caso uma dessas empresas não seja mais vantajosas, podemos simplesmente desfazer a integração e integrar com uma outra

Por isso a importância de entender o que é uma API e também como elas funcionam, pois vai te deixar mais seguro para desenvolver os sistemas da empresa que você trabalha ou até mesmo os seus sistemas

## E quem faz a API? Existe algum problema?

Com certeza, quem cria a API está disponibilizando acesso a dados importantes e também ao sistema onde a API está, por isso é super importante se atentar nos dados que são enviados, e também com a segurança da API

Por mais que seja comercial, ainda há o problema de algum eventual invasão

Quando desenvolvemos uma API, o cliente é quem integra ou utiliza ela e há uma regra bem clara em TI: não podemos confiar no cliente.


## E o tal do HTTP?

O HTTP é um protocolo muito importante para a web em geral, significa: Hipertext Transfer Protocol

Ele permite a obtenção de diversos recursos, como HTML para a nossa aplicação e é um recurso super completo e até com seu nível de complexidade

Porém para a nossa alegria, vamos nos atentar a parte das requisições utilizando o HTTP, que são utilizadas pelas APIs, e também uma pequena parte do que forma o HTTP

https://github.com/matheusbattisti/


## Diferenças entre um aplicativo API e um sem

- Num aplicativo comum, tipo MVC, criamos rotas, models, controllers e views em geral. Cada action do controller redireciona para uma view, geralmente a index.

- Num aplicativo com API criamos de forma semelhante, acom algumas diferenças:
    - Não criamos views (elas serão criadas pela aplicação que consumir nossa API)
    - Os controllers geram geralmente saídas em JSON
    - Pelo visto conclue-se que uma API é um aplicativo pela metada e que usa recursos, geralmente, do backend (um banco de dados e uma linguagem de back-end). A API
     se completa com o aplicativo que a consome e aqui algo interessante, pois vários aplicativos podem consumi-la e até ao mesmo tempo. Apenas ressalve-se que o
     servidor precisa ter os recursos necessários para atender aos clientes.

## Open tudo, o futuro é das APIs

Existe aplicativo para tudo hoje. Você chama um carro, pede todo tipo de comida e bebida, faz supermercado, compartilha fotos e vídeos, sabe se o voo que vai pegar já aterrissou. Para ser capaz de fazer tudo isso, cada aplicação precisa se conectar com outros programas e servidores; e tudo isso só é possível por causa das APIs, que são o futuro da digitalização.

As Interfaces de Programação de Aplicativos, em uma tradução para o português, são um componente crítico do desenvolvimento de sistemas e permitem que os desenvolvedores criem aplicações mais organizadas, escaláveis, de fácil manutenção e com grande potencial de expansão, já que, com APIs bem implementadas, a construção de novas funcionalidades e integrações com outros sistemas fica facilitada e mais rápida.

Elas não apareceram outro dia. As primeiras aplicações surgiram ainda no tempo do estouro da bolha das pontocom, lá na virada do século. Segundo o site apievangelist.com, em fevereiro de 2000, Marc Benioff, fundador e presidente da Salesforce, anunciou em um evento "a primeira solução que efetivamente permite à internet oferecer a funcionalidade de um software ERP por uma fração do custo". Meses mais tarde, o Ebay também lançou uma API para uniformizar as conexões de terceiros com seus servidores.

Em 2006, Twitter e Facebook lançaram suas respectivas APIs. Foi a época que a rede de Zuckerberg passou a ganhar terreno sobre concorrentes como o MySpace e popularizar games como o Farmville. Mesmo ano em que a Amazon começou a operar o EC2, um serviço que hoje chamamos de cloud computing e que foi essencial para disseminação das APIs.

De acordo com a pesquisa anual RapidAPI Developer, com 1.500 desenvolvedores, executivos e gerentes de engenharia, 61.3% disseram que usaram mais APIs em 2020 do que em 2019 e 26,2% usaram na mesma proporção. É uma tendência que só tende a se aprofundar na medida em que a indústria enxerga nas APIs uma forma potente de acelerar a transformação digital.

Segundo a Akamai, provedor líder mundial de rede de distribuição de conteúdo, 83% do tráfego da internet usado pelas pessoas vêm por meio de APIs. Ao conectarem suas mídias digitais, como aplicativos móveis, sites da web, aplicativos de mídia social, aplicativos bancários e marketplaces online, as pessoas utilizam APIs sem nem saber.

As APIS são empregadas não apenas pelas empresas de tecnologia. Alguns setores estão sendo obrigados a oferecer APIs devido à regulamentação setorial, como o bancário, tendência que vai se aprofundar com o Open Banking, enquanto outros são motivados pela interoperabilidade, como o de telecomunicações. Com a disrupção tecnológica, há ainda os que têm nas APIs uma grande oportunidade, casos do varejo, mídia e entretenimento, para citar alguns.

A transformação digital por meio das APIs beneficia também as pequenas e médias empresas, que podem oferecer melhores produtos e serviços de forma mais fácil e econômica por meio de outras plataformas, delegando negócios que não são o core para provedores terceirizados, como é o caso do uso do Google Maps pelos aplicativos de transporte, delivery ou de reservas de hospedagem.

Aliás, já existe o Open Delivery, em que empresas de entrega de comida se conectam com companhias de varejo, telefonia e meios de pagamento. O padrão permite reduzir as ineficiências no processo do delivery, tais como pedidos sem resposta ou entrega fora do prazo, o que reduz custos. Era também a intenção da OpenTravel Alliance, criada ainda em 1999 e que tem evoluído seguidamente graças às APIs, unificando companhias aéreas, hotéis, locadoras de carros, etc.

No Brasil, o Open Banking, que se iniciou em 2021, é uma demonstração dos ganhos para empresas e clientes que a integração de sistemas por meio das APIs pode trazer. Trata-se de um conjunto de regras e tecnologias que vai permitir o compartilhamento de dados e serviços de clientes entre instituições financeiras por meio da integração de seus respectivos sistemas.

A abertura dos dados está sendo implementada por fases desde o início do ano. A quarta e última grande fase é chamada de Open Finance, prevista para ser iniciada em 15 de dezembro, quando começarão a ser abertos os dados para integração de outros setores financeiros, como compartilhamento de dados de serviços relacionados a câmbio, credenciamento, investimento, previdência e seguros – e que deve ser estendida a empresas de saúde, o Open Health.

Em outro setor do mercado financeiro, o Open Insurance será o próximo grande passo, pela importância econômica do segmento e complexidade que envolve. Ele terá um conjunto de regras próprias para abertura dos dados entre as empresas e será implementado em três fases, até julho de 2022.

Assim como no Open Banking, a expectativa é promover maior oferta de produtos, menores preços e, claro, inovação. Com o uso das APIs, empresas focadas em tecnologia podem criar novas soluções digitais para clientes das seguradoras, dos bancos ou de outros setores, como o de varejo, que já têm suas plataformas integradas com empresas de meios de pagamentos.

Essa é a ideia do Open Finance. É muito mais do que a troca de informações entre bancos. O objetivo é incluir a integração de dados para um ecossistema ainda maior, conectando varejistas, fintechs e outros parceiros estratégicos.

E a revolução do Open Finance também se aplica a outros segmentos. Na verdade, o futuro é open, tema do seminário APIX 2021, maior evento voltado para APIs e Digital das Américas, promovido pela Sensedia, no qual nós, da Zappts, fomos patrocinadores e palestrantes.

Em uma das sessões do evento, Pablo Augusto, um dos fundadores da Zappts, falou sobre a construção de uma plataforma para criar e gerenciar programas de loyalty, com uma abordagem API-First, a iClubs.  A abordagem API-First significa que toda arquitetura do sistema é desenhada a partir de uma API a ser utilizada por aplicações do cliente e outros serviços. Essa abordagem permite que as equipes de front-end, back-end e de testes trabalhem simultaneamente, enquanto a API é construída, reduzindo muito o time to market e dando também maior flexibilidade para modificar ou corrigir as aplicações quando necessário.

A pesquisa State of APIs do Google Cloud, realizada com empresas de oito países, concluiu que essa tendência foi verdadeira para 58% das empresas.

As APIs são o coração da inovação aberta e essenciais para a tão falada aceleração da transformação digital. Pesquisa da Harvard Business Review estimou que até 60% do faturamento de um e-commerce no topo do mercado venha de APIs, taxa que chega a 90% no caso de um site agregador de viagens.

Não é à toa que a OpenAPI Initiative tem ganho tantos adeptos entre pesos pesados da indústria que reconhecem o valor de padronizar a especificação das APIs e criaram uma estrutura de governança focada em criar, desenvolver e promover um formato aberto. São empresas como Google, Microsoft, IBM, Oracle, SAP e até o governo britânico.

Por isso é tão importante que as empresas mudem para uma mentalidade API-First. Os grandes pioneiros da nova economia criaram esse modelo de sucesso. A incumbência da nova geração é aprofundar a tecnologia para produzir serviços mais integrados e eficientes.

Bem-vindo à era open tudo!

Rafael M. Tiba, CEO da Zappts.

https://tiinside.com.br/17/09/2021/open-tudo-o-futuro-e-das-apis/

## Alguns Varbos HTTP para API 

GET 	Fetch resource(s)
POST 	Create a new resource
PATCH 	Update a new resource
PUT 	Update a resource
DELETE 	Delete a resource


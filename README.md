Guilherme Alves Neves Tavares - 11218730 <br>
Guilherme Jun Yazaki Grillo - 11208350 <br>
Gustavo de Oliveira Silva  - 10734366 <br>
<br>
Trabalho da disciplina SCC0219, Introdução ao Desenvolvimento Web
# Cao-Cuidado-Petshop
  <p>   O projeto é um sistema web completo para um Petshop fictício chamado Cão Cuidado. Este petshop realiza vendas de produtos para diversos animais, além de disponibilizar serviços como banho e tosa para os pets dos clientes. Adicionalmente, o estabelecimento também trabalha com a adoção de animais abandonados, exibindo no website uma lista de todos que ainda podem ser adotados. </p>
 
## Rodando o projeto - frontend
### Pré-requisitos
* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org/en/) mínimo v.12

### Passos
Clone o repositório:
```bash
git clone https://github.com/Gustavo-de-Oliveira/Cao-Cuidado-Petshop.git
```
Acesse o projeto na pasta /frontend:
```bash
cd frontend
```
Instale as dependências:
```bash
npm install
```
Execute a aplicação:
```bash
npm run dev
```
Irá rodar na porta:3000 -> acesse http://localhost:3000

Para acessar o site em deploy uso o link: https://cao-cuidado-petshop-gustavo-de-oliveira.vercel.app/

## Rodando o projeto - backend
### Pré-requisitos
* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org/en/) mínimo v.12

### Passos
Clone o repositório:
```bash
git clone https://github.com/Gustavo-de-Oliveira/Cao-Cuidado-Petshop.git
```
Acesse o projeto na pasta /backend:
```bash
cd backend
```
Instale as dependências:
```bash
npm install
```
Execute a aplicação:
```bash
npm start
```
Irá rodar na porta:8000 -> acesse http://localhost:8000
 
## Requisitos
<p> <ul>
 
  <li> O sistema deve comportar dois tipos de usuários:
      <ul>
        <li> Cliente: Aquele que acessa o website para adquirir produtos e serviços.</li>
        <li> Administrador: É responsável por gerenciar os produtos, animais a serem adotados e os horários de agendamento.</li>
      </ul>
  </li> <br>
 
  <li> O sistema deve permitir que os usuários realizem seu cadastro no site, as informações dos clientes a serem armazenadas são: <i> email, nome, senha, data de nascimento, endereço e formas de pagamento,.</i> </li><br>
 
  <li> Os administradores devem poder colocar produtos e serviços em oferta, alterando, assim, seu preço atual. Todos itens em oferta devem aparecer na página inicial do site.</li><br>
 
  <li> Um usuário que já adquiriu um item ou serviço deve ser capaz de avaliar o produto. A avaliação consiste obrigatoriamente de uma nota, e pode conter um comentário </li><br>
 
  <li> O sistema deve permitir que o cliente coloque itens do catálogo em um "carrinho", para comprar todos efetuando apenas um único pagamento. Adicionalmente, o sistema deverá calcular um desconto que será proporcional ao valor da compra do cliente. </li> <br>
 
  <li> O sistema deve garantir que os usuários possam cadastrar diversas formas de pagamento que serão sugeridas ao cliente na hora de pagar.</li><br>
 
  <li> Os administradores podem adicionar, remover e gerenciar animais da adoção. Para cadastrar um animal, deve ser fornecida uma descrição geral sobre o animal. Os dados a serem armazenados sobre cada animal são: <i> Espécie, raça, idade, descrição, vacinas e imagens.</i> 
    <ul>
      <li> O sistema deve permitir que os clientes sinalizem ao petshop que têm interesse em adotar um animal.</li>
      <li> O sistema deve conter uma lista com todos horários disponíveis na semana para os clientes visitarem os animais em adoção.</li>
      <li> Os clientes devem poder agendar um horário para visitar o petshop paara conhecer os animais em adoção. </li>
    </ul>
  </li>
</ul>
</p>
 
 ## Descrição
 <p>
 As páginas web do site foram feitas em HTML5 e CSS3. O servidor foi feito em nodeJS, utilizando mongoDB para a base de dados.
 
 ### Modelagem do Banco de Dados
 O diagrama a seguir representa o Modelo Entidade-Relacionamento do sistema, e será útil para ilustrar como as principais funcionalidades do sistema serão implementadas:
 
  ![Petshop (2)](https://user-images.githubusercontent.com/48142112/127043245-37af8309-3c5d-4e9a-b5a4-081af9421875.png)

 <ul>
  <li> Os tipos de usuários do sistema foram implementados com uma generalização, de forma que clientes e administradores são diferenciados por um atributo booleano que indica se o usuário é administrador, ou não</li> 
  <li> As vendas do sistema serão armazenadas de forma que, serão associados, para cada pedido, o cliente que o realizou, e a lista de itens envolvidos. Além disso, será possível associar uma avaliação para cada item comprado. </li>
  <li> A adoção será instanciada dado um par <i> Cliente </i> e <i> Animal </i>, de forma que, cada adoção será identificada pelo par e pela data em que foi realizada. Nota-se também que, os animais são identificados por um código numérico</li>
   <li> Nota-se que o mongoDB utiliza de identificadores sintéticos para toda entidade. </li>
 </ul>
</p>

### Telas da Aplicação
O protótipo das páginas do website estão contidas em: [Figma](https://www.figma.com/file/ajgzL9tCnb0tVoOSCGWkdZ/C%C3%A3o-Cuidado-Pet-Shop?node-id=0%3A1)

#### Tela Inicial
  <p> Ao acessar o sistema, o cliente é direcionado para esta página. Nela, o usuário encontra as ofertas da semana, as promoções selecionadas, e as marcas com as quais o petshop trabalha </p>
  
#### Tela de Lista
  <p> As telas de lista estão relacionadas a um tipo de animal, de forma que, o usuário pode acessar cada Tela de Lista pelo header das páginas. Nesta tela o usuário tem acesso aos produtos vendidos pelo petshop, podendo realizar buscas ou filtrá-los por categoria, preço ou marca.</p>
  
#### Tela de Item
  <p> O usuário tem acesso a essa tela ao selecionar um produto ou serviço. Nela, o produto é descrito com imagens, descrição geral, especificação técnica, perguntas mais frequentes, avaliações e comentários dos usuários. Além disso, na tela do produto, é possível adicioná-lo ao carrinho e ver outros produtos relacionados</p>

#### Tela de Carrinho
  <p> O usuário é redirecionado para esta tela ao clicar em seu carrinho. Ela exibe todos itens adicionados ao carrinho do usuário. </p>

#### Tela "Sobre Nós"
  <p> Esta tela contém uma descrição sobre o petshop. </p>


### Diagrama de Navegação

![Untitled Diagram](https://user-images.githubusercontent.com/48142112/119587739-af1b7d80-bda5-11eb-8857-b0cbc2a02dee.png)

Obs: Este é um diagrama que ilustra a navegação lógica em que as páginas podem ser acessadas porém, ela desconsidera os headers e footers do website. As Páginas "Inicial", "Lista", "Carrinho", e "About" podem ser acessadas a partir de qualquer outra página do website, através do header.

## Testes
Foi realizado 1 teste de UI (interface de usuário), utilizando o framework [Cypress](https://www.cypress.io/). O Cypress permite a visualização dos testes automatizados em um browser criado por ele.

O teste realizado verifica se o valor final do carrinho, após adicionar produtos e somar os valores com o frete, está correto. Para testar, faça os passos:

1. Verifique se está na pasta /frontend:
```bash
/cd frontend
```
2. Verifique se o projeto está rodando localmente (localhost:3000):
```bash
npm run dev
```
3. Rode o teste com cypress
```bash
npm run test:open
```
4. O Cypress abrirá uma janela com uma lista de testes. Clique no único item da lista, o 'cart.spec.js'.
5. Abrirá outra janela, carregando e rodando o teste.


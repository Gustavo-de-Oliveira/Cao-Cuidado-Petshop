Guilherme Alves Neves Tavares - 11218730 <br>
Guilherme Jun Yazaki Grillo - 11208350 <br>
Gustavo de Oliveira Silva  - 10734366 <br>
<br>
Trabalho da disciplina SCC0219, Introdução ao Desenvolvimento Web
# Cao-Cuidado-Petshop
  <p>   O projeto é um sistema web completo para um Petshop fictício chamado Cão Cuidado. Este petshop realiza vendas de produtos para diversos animais, além de disponibilizar serviços como banho e tosa para os pets dos clientes. Adicionalmente, o estabelecimento também trabalha com a adoção de animais abandonados, exibindo no website uma lista de todos que ainda podem ser adotados. </p>
 
## Requisitos
<p> <ul>
 
  <li> O sistema deve comportar dois tipos de usuários:
      <ul>
        <li> Cliente: Aquele que acessa o website para adquirir produtos e serviços.</li>
        <li> Administrador: É responsável por gerenciar os produtos, animais a serem adotados e os horários de agendamento.</li>
      </ul>
  </li> <br>
 
  <li> O sistema deve permitir que os clientes realizem seu cadastro no site, as informações dos clientes a serem armazenadas são: <i> CPF, nome, data de nascimento, endereço, telefone, formas de pagamento, e-mail e senha.</i> </li><br>
    
  <li> O sistema deve permitir a adição, remoção e gerenciamento de administradores do sistema, as informações dos administradores a serem armazenadas são: <i> CPF, nome, telefone, e-mail, cargo e senha </i>.</li><br>
 
  <li> Um administrador de determinado cargo, pode adicionar, remover e alterar as informações de outro administrador de um cargo com hierarquia menor. (incluir hierarquia)</li> <br>
 
  <li> O sistema deve permitir que os administradores adicionem e removam produtos do estoque. Para cada produto, deve ser fornecida uma descrição geral, bem como uma ficha técnica. As informações dos produtos a serem armazenadas são: <i> nome, marca, animais, descrição, ficha técnica, preço atual, imagens, preço real, quantidade em estoque, avaliações e dúvidas frequentes.</i>
   <ul>
     <li> Deve ser possível criar categorias de um mesmo produto, de forma que, itens de cada categoria tenha podem, ou não, ter preços diferentes. </li>
     <li> Deve ser possível filtrar os produtos por nome, marca, animais relacionado e preço. </li>
     <li> Para cada produto, deve haver uma lista de produtos relacionados, que deve ser atualizada dinamicamente conforme os produtos que mais são comprados juntos com ele.</li>
   </ul>
  </li><br>
 
  <li> O sistema deve permitir que os administradores adicionem e removam os serviços do estoque. Para cadastrar um serviço, deve ser fornecida uma descrição geral. Os dados a serem armazenados sobre cada produto são: <i> Nome, animais, descrição, duração, horários disponíveis, preço atual, preço real, avaliação e dúvidas frequentes.</li>
  <ul>
    <li> Para cada serviço, o sistema deve armazenar uma lista, cujo tamanho depende da duração do serviço, com todos os horários disponíveis para a semana. Sempre que o cliente realizar o agendamento no site, este horário não deve mais aparecer como disponível. </li>
    <li> Deve ser possível filtrar os serviços com marca e animais relacionados.
  </ul>
  </li><br>
 
  <li> Os administradores devem poder colocar produtos e serviços em oferta, alterando, assim, seu preço atual. Todos itens em oferta devem aparecer na página inicial do site.</li><br>
 
  <li> Um usuário que já adquiriu um item ou serviço deve ser capaz de avaliar o produto. A avaliação consiste obrigatoriamente de uma nota, e pode conter um comentário </li><br>
 
  <li> O sistema deve permitir que o cliente coloque itens do catálogo em um "carrinho", para comprar todos efetuando apenas um único pagamento. Adicionalmente, o sistema deverá calcular um desconto que será proporcional ao valor da compra do cliente. </li> <br>
 
  <li> O sistema deve garantir que os usuários possam cadastrar diversas formas de pagamento que serão sugeridas ao cliente na hora de pagar.</li><br>
 
  <li> Os administradores podem adicionar, remover e gerenciar animais da adoção. Para cadastrar um animal, deve ser fornecida uma descrição geral sobre o animal. Os dados a serem armazenados sobre cada animal são: <i> Espécie, raça, idade, descrição, vacinas e imagens.</i> 
    <ul>
      <il> O sistema deve permitir que os clientes sinalizem ao petshop que têm interesse em adotar um animal.</il>
      <il> O sistema deve conter uma lista com todos horários disponíveis na semana para os clientes visitarem os animais em adoção.</il>
      <il> Os clientes devem poder agendar um horário para visitar o petshop paara conhecer os animais em adoção. </il>
    </ul>
  </li>
 
</ul> </p>



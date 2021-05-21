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
  
  <li> O sistema deve permitir que os usuários se cadastrem, inserindo as seguintes informações: <i> CPF, nome, data de nascimento, emdereço, telefone, formas de pagamento, e-mail e senha.</i> </li><br>
    
  <li> O sistema deve permitir a adição, remoção e gerenciamento de administradores do sistema, as informações a serem guardadas são: <i> CPF, nome, telefone, e-mail, cargo e senha </i>.</li><br>
  
  <li> Um administrador de determinado cargo, pode adicionar, remover e alterar as informações de outro administrador de um cargo com hierarquia menor. (incluir hierarquia)</li> <br>
  
  <li> O sistema deve permitir que os administradores adicionem e removam produtos do estoque. Para cada produto, deve ser fornecida uma descrição geral, bem como uma ficha técnica. Os dados dos produtos a serem armazenados são: <i> nome, marca, animais, descrição, ficha técnica, preço atual, imagens, preço real, quantidade em estoque, avaliações e dúvidas frequentes.</i> 
   <ul>
     <li> Deve ser possível criar categorias de um mesmo produto, de forma que, itens de cada categoria tenha podem, ou não, ter preços diferentes. </li>
     <li> Deve ser possível filtrar os produtos por nome, marca, animais relacionado e preço. </li>
     <li> Para cada produto, deve haver uma lista de produtos relacionados, que deve ser atualizada dinamicamente conforme os produtos que mais são comprados juntos com ele.</li>
   </ul>
  </li><br>
  
  <li> O sistema deve permitir que os administradores adicionem e removam serviços do estoque. Para cadastrar um serivço, deve ser fornecida uma descrição geral. Os dados a serem armazenados sobre cada produto são: <i> Nome, animais, descrição, duração, horários disponíveis, preço atual, preço real, avaliação e dúvidas frequentes.</i>
  <ul>
    <li> Para cada serviço, o sistema deve armazenar uma lista, cujo tamanho depende da duração do serviço, com todos os horários disponíveis para a semana. Sempre que o cliente realizar o agendamento no site, este horário não deve mais aparecer como disponível. </li>
    <li> Deve ser possível filtar os serviços com marca e animais relacionado.
  </ul>
  </li><br>
  
  <li> Os administradores devem poder colocar produtos e serviços em oferta, alterando, assim, seu preço atual. Todos itens em oferta devem aparecer na página inicial do site.</li><br>
  <li> Um usuário que já adquiriu um item ou serviço deve ser capaz de avaliar o produto. A avaliação consiste obrigatoriamente de uma nota, e pode conter um comentário </li>
  
  <li> O sistema deve garantir que os usuários possam cadastrem diversas formas de pagamento no sistema, assim, eles terão a opção de realizar compras automaticamente </li><br>
</ul> </p>

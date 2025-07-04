/*
*Javascript - é uma linguagem de programação usada principalmente para tornar páginas da web interativas.
* Variável - é um trecho da memória do computador que podemos armazenar o que quiser.
let nome = "Ederson"            /* <let> - Cria uma variável chamada <nome> e atribui a string <"Ederson">;
let sobrenome = "Santos"        /* <let> - Cria uma variável chamada <sobrenome> e atribui a string <"Santos">;
    console.log(nome)           /*<console.log> - imprime o que está dentro dos parenteses, no caso a variável <nome>;
    console.log(sobrenome)      /*<console.log> - imprime o que está dentro dos parenteses, no caso a variável <sobrenome>.

*Função - é um bloco de código  reutilizável que só é executado quando for chamado.
function faleNome(){    /* é uma função usada para falar o nome, que só é executado quando chamado.
    console.log(nome)   /* comando para imprimir o valor da variável <nome>.
}
faleNome - /* comando que executa a função, faleNome é o nome da função. 

*Algoritmo - são passos para realizar uma tarefa.
*() descobrir quando os usuários clicaram no botão
Aqui dentro do HTML, adicionamos o comando <onclick="trocaCor">, esse comando serve para mostrar quando um botão é clicado.
</div>       <!-- cria uma caixa-->
    <div class="caixa-menu">      <!-- cria uma caixa interna da classe caixa menu.
        <img onclick="trocaCor()" class=" botao-menu " src="img/thumb3.png" alt="imagem-copinho-starbucks"> <!-- adiciona imagem ao botão menu, <onclick="trocaCor()"> comando serve para mostra quando um botão for clicado e traca a cor do fundo.-->
        <img onclick="trocaCor()" class=" botao-menu " src="img/thumb2.png" alt="imagem-copinho-starbucks"> <!-- adiciona imagem ao botão menu, <onclick="trocaCor()"> comando serve para mostra quando um botão for clicado e traca a cor do fundo.-->
        <img onclick="trocaCor()" class=" botao-menu " src="img/thumb1.png" alt="imagem-copinho-starbucks"> <!-- adiciona imagem ao botão menu, <onclick="trocaCor()"> comando serve para mostra quando um botão for clicado e traca a cor do fundo.-->
    </div>                        <!-- fecha caixa da classe caixa menu-->
</div> <!-- fecha uma caixa -->

*() assim que o botão for clicado
    *() trocar a cor no fundo
dentro do Javascript - document = HTML
    - document = HTML
    - querySelector  = seleciona algo desejado dentro do HTML e trsnafere par o Javascript
    <div class="caixa-menu">      <!-- cria uma caixa interna da classe caixa menu-->
        <img onclick="trocaCor('#d752b1')" class=" botao-menu " src="img/thumb3.png" alt="imagem-copinho-starbucks"> <!-- adiciona imagem ao botão menu, <onclick="trocaCor()"> comando serve para mostra quando um botão for clicado e traca a cor do fundo.-->
            <!-- O comando onclick="trocaCor('#d752b1')" troca a corde fundo por <'#d752b1' do círculo  -->
       
        <img onclick="trocaCor('#eb7495')" class=" botao-menu " src="img/thumb2.png" alt="imagem-copinho-starbucks"> <!-- adiciona imagem ao botão menu, <onclick="trocaCor()"> comando serve para mostra quando um botão for clicado e traca a cor do fundo.-->
            <!-- O comando onclick="trocaCor(''#eb7495')" troca a corde fundo por <'#eb7495'> do círculo -->
       
        <img onclick="trocaCor('#017143')" class=" botao-menu " src="img/thumb1.png" alt="imagem-copinho-starbucks"> <!-- adiciona imagem ao botão menu, <onclick="trocaCor()"> comando serve para mostra quando um botão for clicado e traca a cor do fundo.-->
            <!-- O comando onclick="trocaCor('#017143')" troca a corde fundo por <'#017143'> do círculo  -->
    </div>  <!-- fecha caixa da classe caixa menu-->
   

    *() trocar a imagem prinicipal 
    div class="caixa-menu">      <!-- cria uma caixa interna da classe caixa menu-->
        img onclick="trocaCor('#d752b1'); trocaImagem('img/img3.png')" class=" botao-menu " src="img/thumb3.png" alt="imagem-copinho-starbucks">
           * <!--cria uma imagem clicável na página, onde o comando onclick="trocaCor('#d752b1') muda  fundo do círculo para ('#d752b1') e trocaImagem('img/img3.png')" personaliza e define o que acontece ao clicar nessa imagem, trocando a imagem principal exibida dentro do círculo para essa nova <img3.png>-->    
        
        <img onclick="trocaCor('#eb7495'); trocaImagem('img/img2.png')" class=" botao-menu " src="img/thumb2.png" alt="imagem-copinho-starbucks"> <!-- adiciona imagem ao botão menu, <onclick="trocaCor()"> comando serve para mostra quando um botão for clicado e traca a cor do fundo.-->
            *<!-- cria uma imagem clicável na página, onde o comando onclick="trocaCor('#eb7495') muda  fundo do círculo para ('#eb7495') e trocaImagem('img/img2.png')" personaliza e define o que acontece ao clicar nessa imagem, trocando a imagem principal exibida dentro do círculo para essa nova <img2.png> -->
       
        img onclick="trocaCor('#017143'); trocaImagem('img/img1.png')" class=" botao-menu " src="img/thumb1.png" alt="imagem-copinho-starbucks"> <!-- adiciona imagem ao botão menu, <onclick="trocaCor()"> comando serve para mostra quando um botão for clicado e traca a cor do fundo.-->
            *<!-- cria uma imagem clicável na página, onde o comando onclick="trocaCor('#017143') muda  fundo do círculo para ('#017143') e trocaImagem('img/img1.png')" personaliza e define o que acontece ao clicar nessa imagem, trocando a imagem principal exibida dentro do círculo para essa nova <img1.png> -->
        </div>  <!-- fecha caixa da classe caixa menu-->


*/

let circulo = document.querySelector (".circulo") /* Esse código JavaScript seleciona um elemento HTML com a classe circulo,guardando-o na variável circulo, usa o <método document.querySelector()>, que retorna o primeiro elemento corresponde ao seletor CSS fornecido.*/
let imagem = document.querySelector (".starbucks")

function trocaCor(cor) {   /* é uma função usada para trocar a cor*/
    /* console.log("circulo")   /* comando para imprimir p valor da função */
circulo.style.background = cor  /* altera a cor de fundo do elemento circulo, atribuindo o valor da variável cor, a cor é selecionada quando  clicamos em < <img onclick="trocaCor('cor')" class=" botao-menu " src="img/thumb3.png" alt="imagem-copinho-starbucks">>*/
}

function trocaImagem(img) { /*é uma função usada para trocar a imagem*/
    /* console.log("imagem")*/
    imagem.src = img   /* altera a imagem ao clicar imagem do copo quando  clicamos em < <img onclick="trocaCor('cor')" trocaImagem('img/img.png')" class=" botao-menu " src="img/thumb3.png" alt="imagem-copinho-starbucks">>*/
}   
faleNome()


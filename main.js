/////////////////////////////////////
//              DADO 1
/////////////////////////////////////
// gerar numero aleatorio de 1 - 6
var numeroAleatorio1 = Math.floor(Math.random() * 6) + 1;

// mudar o src do html do primeiro dado
 var imagemAleatoriaDado = "dice" + numeroAleatorio1 + ".png";      // dice1.png    - dice6.png
 var imagemSrcAleatoria = "img/" + imagemAleatoriaDado;             // images/dice1.png             images/dice6.png


// mudar atributo do elemento img
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imagemSrcAleatoria);



/////////////////////////////////////
//              DADO 2
/////////////////////////////////////
// gera numero aleatorio
var numeroAleatorio2 = Math.floor(Math.random() * 6) + 1;

// muda src do html do segundo numero
var imagemSrcAleatoria2 = "img/dice" + numeroAleatorio2 + ".png";

// recupera o img e seta o novo atributo, mudar o src dele para o que criou acima
document.querySelectorAll("img")[1].setAttribute("src", imagemSrcAleatoria2);

/////////////////////////
//     CONDICAO
/////////////////////////
if (numeroAleatorio1 > numeroAleatorio2) {
  document.querySelector("h1").innerHTML = "🏆 Player 1 ganhou!! ";
} else if (numeroAleatorio2 > numeroAleatorio1) {
  document.querySelector("h1").innerHTML = "🏆 Player 2 ganhou!! ";
} else {
  document.querySelector("h1").innerHTML = "EMPATOU";
}

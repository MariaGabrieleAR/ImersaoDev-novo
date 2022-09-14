var nome ="Gabi"
var notaDoPrimeiroBimestre = document.querySelector("#nota1").value;
var notaDoSegundoBimestre =document.querySelector("#nota2");
var notaDoTerceiroBimestre =document.querySelector("#nota3");
var notaDoQuartoBimestre = document.querySelector("#nota4");
var botao = document.querySelector("#btn");

botao.addEventListener("click",calcularMedia);

function calcularMedia(e){
    e.preventDefault()
    console.log(notaDoPrimeiroBimestre)
}


var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre +notaDoTerceiroBimestre +notaDoQuartoBimestre) / 4

var notaFixada = notaFinal.toFixed(1)

console.log("Bem vinda " + nome)
console.log(notaFinal)
console.log(notaFixada)
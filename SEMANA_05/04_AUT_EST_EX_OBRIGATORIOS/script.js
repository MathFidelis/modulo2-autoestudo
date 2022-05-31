function calcular(){
    let val1   = parseInt(document.getElementById("val1").value);
    let val2   = parseInt(document.getElementById("val2").value);
    let sinal  = document.getElementById("sinal").value;
    let result = document.getElementById("result");

    if(sinal == "+") result.value = val1 + val2;
    if(sinal == "-") result.value = val1 - val2;
    if(sinal == "*") result.value = val1 * val2; 
    if(sinal == "/") result.value = val1 / val2;
}

function CalcAndShow(x,y){
    
    let val1 = parseInt(document.getElementById("number1").value);
    
    let val2 = parseInt(document.getElementById("number2").value);
    
    let op = document.getElementById("op").value;
    
    var result = Calcu(val1, val2, op);

    document.getElementById("tempo").innerHTML = result;


}

function Calcu(x, y, op){
    let resultado;
    resultado = eval(x + op + y) 
    return resultado;
};


function caixa() {
    let valorTotal = document.getElementById('valor').value;
    let notasDeDez = parseInt(valorTotal / 10);

    valorTotal = valorTotal % 10
    let notasDeCinco = parseInt(valorTotal / 5)

    valorTotal = valorTotal % 5
    let notasDeUm = parseInt(valorTotal / 1);
    
    console.log(notasDeDez);
    console.log(notasDeCinco);
    console.log(notasDeUm);
    document.getElementById('vem').innerHTML = 'RESULTADO: notas de 10: ' + notasDeDez + ' notas de 5: ' + notasDeCinco + ' notas de 1: ' + notasDeUm;

}

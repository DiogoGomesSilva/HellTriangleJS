//Métodos de Testes
var Inputs = [
    {input: "A", description: "Validar se letras são válidas"},
    {input: 1, description: "Validar se um números são válido"},
    {input: "343413241324afadsferqe", description: "Validar input aleátorios são válidas"},
    {input: "[[6]]", description: "Validar se um Array que não forma um triângulo é válido"},
    {input: "[[6], [1, 2, 5]]", description: "Validar se um Array que não forma um triângulo é válido"},
    {input: "[[6], [1, 2, 5]]", description: "Validar se um Array que não forma um triângulo é válido"},
    {input: "[[6], [3, 5], [9, 7, 1], [4, 6, 8, 4], asd]", description: "Validar se um Array que não é todo composto por arrays é válido"},
    {input: "[[6], [1, 2], [1, 2, 3], [1, 2, 3]]", description: "Validar se um Array que é formado de arrays crescentes é válido"},
    {input: "[[6], [1, 2], [1, 2, gasdga]]", description: "Validar se um Array que não é todo composto por arrays é válido"},
    {input: "[[6], [1, 2], [1, 2, gasdga]]", description: "Validar se um Array que não é todo composto por arrays é válido"},
    {input: "[[6], [1, 2], [1, 2, {'t':'t'}]]", description: "Validar se um Array que não é todo composto por arrays é válido"},
    {input: "[[6], [1, 2], [1, 2, 3], ]", description: "Validar se um Array composto de arrays crescentes e com dados incorretos é válido"},
    {input: "[[6], [3, 5], [9, 7, 1], [4, 6, 8, '4']]", description: "Validar se um Array composto de arrays crescentes e com dados incorretos é válido"},
    {input: "[[6], [3, 5], [9, 7, 1], [4, 6, 8, 4]]", description: "Validar se um Array composto de arrays crescentes é válido"},
    {input: "[[6], [3, 5], [9, 7, 1], [4, 6, 8, 4], [4, 6, 8, 4, 9]]", description: "Validar se um Array composto de arrays crescentes é válido"},
    {input: "[[6], [3, 5], [9, 7, 1], [4, 6, 8, 4], [4, 6, 8, 4, 9], [4, 6, 8, 4, 9, -1]]", description: "Validar se um Array composto de arrays crescentes é válido"},
]

var InputValores = [    
    {input: "[[6], [3, 5], [9, 7, 1], [4, 6, 8, 4]]", description: "Validar se total é igual a 26", valor:"26"},
    {input: "[[6], [3, 5], [9, 7, 1], [4, 6, 8, 4], [4, 6, 8, 4, 9]]", description: "Validar se total é igual a 34", valor:"34"}
];


function ValidaInputIncorreto(){ 
    var mensagem = "";    
    for (let index = 0; index < Inputs.length; index++) {
        const item = Inputs[index].input;
        var retorno = TriangleView.validateInput(item); 
        var color = retorno ? '#1ccf1c' : '#ff0d0d'; 
        mensagem += "<br><strong>" + Inputs[index].description + "</strong><br>"; 
        mensagem += "Input: " + item + " <strong> válido: <span style='color:" + color + "'>" + retorno + "</span></strong><br>"; 
    }
    for (let indexValor = 0; indexValor < InputValores.length; indexValor++) {
        const item = InputValores[indexValor].input;
        var retorno = TriangleView.showResult(item) == InputValores[indexValor].valor; 
        var color = retorno ? '#1ccf1c' : '#ff0d0d'; 
        mensagem += "<br><strong>" + InputValores[indexValor].description + "</strong><br>"; 
        mensagem += "Input: " + item + " <strong> válido: <span style='color:" + color + "'>" + retorno + "</span></strong><br>"; 
    }

    document.querySelector('#msgTestes').innerHTML = mensagem; 
}
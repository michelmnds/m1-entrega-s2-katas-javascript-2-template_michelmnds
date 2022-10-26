function add(n1, n2){
    let soma = n1;
    
    for (let i = 0; i <= n2; i++){
        soma = n1++
    }
    return soma
}
let retorno = add(2,6);
console.log(retorno);


function multiply(numero, vezes){
    let multiplicacao = numero; 
    
    for (let i = 0; i < vezes - 1; i++){
       multiplicacao = add(numero, multiplicacao);
    }
    return multiplicacao;

}
let retorno1 = multiply(10, 10)
console.log(retorno1);


function power(x, n){
    potencia = 1;

    for (let i = 0; i < n; i++){
        potencia  = multiply(potencia, x);
    }
    return potencia
}
let retorno2 = power(2,8)
console.log(retorno2)


function factorial(n3){
    fact = n3;
    
    for (n3, n3 > 1; n3--;){
        fact = multiply(fact, n3)
    }
    return fact
}
let retorno3 = factorial(4);
console.log(retorno3);
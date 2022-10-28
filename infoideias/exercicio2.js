/*

    Desenvolva uma função que receba como parâmetro um número inteiro e retorne o numero primo imediatamente anterior ao número recebido

    Exemplo para teste:

    Numero = 10 resposta = 7
    Número = 29 resposta = 23

     * */

function primoAnterior (numero) {
    if (numero > 2){

        let numeroPrimo = numero -1;
        let continua = true;

        do {
            let ePrimo = true;

            for(let i = 2; i < numeroPrimo; i++){

                if(numeroPrimo % i == 0){
                    ePrimo = false;
                }
            }

            if(ePrimo){
                return numeroPrimo;
            }else {
                numeroPrimo--;
            }
        } while (continua)
    }else {
        return numero;
    }
}

console.log(primoAnterior(29));
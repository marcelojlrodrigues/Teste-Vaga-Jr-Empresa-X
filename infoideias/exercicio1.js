 /*

    Desenvolva uma função que receba como parâmetro o ano e retorne o século ao qual este ano faz parte. O primeiro século começa no ano 1 e termina no ano 100, o segundo século começa no ano 101 e termina no 200.

	Exemplos para teste:

	Ano 1905 = século 20
	Ano 1700 = século 17

 * */


function SeculoAno (ano){
    let yearMax = 100;
    let yearMin = 1;
    let seculo = 1;
    let continua = true;

    do{
        if(ano >= yearMin && ano <= yearMax){
            return seculo;
            continua = false;
        }

        yearMax += 100;
        yearMin += 100;
        seculo +=1;

    }while(continua)


}

console.log(SeculoAno(1988));
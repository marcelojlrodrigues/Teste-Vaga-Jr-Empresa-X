

    /*
   Desenvolva uma função que receba como parâmetro um array de números inteiros e responda com TRUE or FALSE se é possível obter uma sequencia crescente removendo apenas um elemento do array.

	Exemplos para teste 

	Obs.:-  É Importante  realizar todos os testes abaixo para garantir o funcionamento correto.
         -  Sequencias com apenas um elemento são consideradas crescentes

    [1, 3, 2, 1]  false
    [1, 3, 2]  true
    [1, 2, 1, 2]  false
    [3, 6, 5, 8, 10, 20, 15] false
    [1, 1, 2, 3, 4, 4] false
    [1, 4, 10, 4, 2] false
    [10, 1, 2, 3, 4, 5] true
    [1, 1, 1, 2, 3] false
    [0, -2, 5, 6] true
    [1, 2, 3, 4, 5, 3, 5, 6] false
    [40, 50, 60, 10, 20, 30] false
    [1, 1] true
    [1, 2, 5, 3, 5] true
    [1, 2, 5, 5, 5] false
    [10, 1, 2, 3, 4, 5, 6, 1] false
    [1, 2, 3, 4, 3, 6] true
    [1, 2, 3, 4, 99, 5, 6] true
    [123, -17, -5, 1, 2, 3, 12, 43, 45] true
    [3, 5, 67, 98, 3] true

     * */
    
	function sequenciaCrescente(array){

        for(let i=1; i < array.length; i++){

            if (!(array[i-1] < array[i])){
                array.splice(i-1,1)

                for(let i=1; i < array.length; i++){
                    if (!(array[i-1] < array[i])){

                        return false;
                    }
                }
            return true;

            }
        }
    

    }
let array = [1, 1]//true
//array = [40, 50, 60, 10, 20, 30];

//array = [3, 6, 5, 8, 10, 20, 15];

console.log(sequenciaCrescente(array));

/* Um resumo do meu pensamento lógico para resolver este desafio

É possível o array ficar em ordem crescente apenas retirando um número?

obs: 1) Se retirar um número e permanecer números repetidos, significa que o array não está em ordem crescente

obs: 2) Se houver apenas um número deve-se considerar que o array está em ordem crescente

Minha lógica:

Faço um loop para retirar o primeiro número que eu encontrar e não estiver obedence a ordem crescente que se pede:

     - Se mesmo após isso o array não obedecer as obs1 e obs2, significa que ele não atende os requisitos, então deve-se retornar false.

Após isso, deve-se verificar se o novo array, está em ordem crescente, pois senão estiver, deve-se novamente retornar false, entende-se tbm, que se após a execução do loop anterior, ele ainda ter um número repetido, cai na obs1, (ou seja, não está em ordem crescente) caso contrário deve-se retornar true

Ou seja, na minha lógica, eu estou replicando para o computador o que um humano faria para checar um a um se os arrays atendem o que foi proposto ou não.

*/
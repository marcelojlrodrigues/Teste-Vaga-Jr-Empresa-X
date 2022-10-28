    /*

    Desenvolva uma função que receba como parâmetro um array multidimensional de números inteiros e retorne como resposta o segundo maior número.

    Exemplo para teste:

	Array multidimensional = array (
	array(25,22,18),
	array(10,15,13),
	array(24,5,2),
	array(80,17,15)
	);

    esse array em js seria assim:

    let multidimensional = [[22,22,18],
    [10,15,13],
    [24,5,2],
    [80,17,15]];

	resposta = 25

    Esse array em js seria assim:

    let multidimensional = [[22,22,18],
    [10,15,13],
    [24,5,2],
    [80,17,15]];

	resposta = 25
     * */
function segundoMaior(arrayMultimensional){

// transformando um array multidimensional em um único array com o reduce

let novoArray = arrayMultimensional.reduce(function (prev, next){
    return prev.concat(next);
})


/* Uma forma mais didática de se entender a solução
primeiro pega-se o maior valor, depois o seu index, e por último com o splice retira-se ele desse array
*/

novoArray.splice((novoArray.indexOf(Math.max.apply(Math, novoArray))),1)

// depoiiisss, já se retorna o novo valor máximo do array, visto que na linha acima eu já tinha retirado o antigo valor máximo. 
// Resumindo, para chegar no segundo maior valor, retirei o maior, para aplicar a função maior novamente e chegar no segundo maior com mais praticidade

return Math.max.apply(Math,novoArray)

}

let multidimensional = [[22,22,18],
    [10,15,13],
    [24,5,2],
    [80,17,15]];

console.log(segundoMaior(multidimensional));
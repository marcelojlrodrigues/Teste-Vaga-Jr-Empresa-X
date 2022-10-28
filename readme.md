Pessoal, ainda estou aprendendo formatar os readme, todos bem legais como o pessoal formata, por enquanto, vou deixar só o texto com algumas informações para as pessoas entederem o proprósito de cada exercício e de como busquei soluções para ele.

Recebi este teste de uma empresa, na qual me candidatei a uma vaga de PHP Júnior, referente a primeira fase do processo seletivo, como estou estudando JS, resolvi resolvê-lo em js também para comparar as dificuldades / facilidades de cada linguagem para propor as soluções, e postar no meu github para compartilhar com os alunos da turma que estou estudando JS. 

São 4 desafios de códigos, em um primeiro momento, me pareceu um lógica complexa, mas após uma análise mais aprofundada e com mais calma do que estava sendo pedido, percebi que não eram assim tão difíceis de serem resolvidos, mas também não considero algo tão simples para alguém que esteja iniciando.

Esse teste tinha duração máxima recomendada de 6 horas possuindo 4 desafios de códigos:

1)  Desenvolva uma função que receba como parâmetro o ano e retorne o século ao qual este ano faz parte. O primeiro século começa no ano 1 e termina no ano 100, o segundo século começa no ano 101 e termina no 200.

	Exemplos para teste:

	Ano 1905 = século 20
	Ano 1700 = século 17

Para esse, criei uma função dinâmica, que pudesse retornar qualquer século para qualquer ano inserido, ao invés de criar um if ou um case para situações pre-estabelecidas.

2) Desenvolva uma função que receba como parâmetro um número inteiro e retorne o numero primo imediatamente anterior ao número recebido

    Exemplo para teste:

    Numero = 10 resposta = 7
    Número = 29 resposta = 23

Para esse apenas criei um outra lógica, para receber um número x e buscar o número primo imediatamente inferior a ele e retornar como pedido na função

3) 
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

Esse aqui exigiu um pouco mais de pesquisa. Já tinha visto como percorrer arrays multidimensionais em outras linguagens, com dois for, por exemplo, no caso do php, usei dois foreach (um para percorrer a linha, e outro para percorrer cada valor da linha), já no caso do js, usei a função nativa reduce, para receber esse array multidimensional e retornar um único resultado, que foi ele reduzido a um único array para que eu pudesse aplicar algumas funções para que pudesse chegar no resultado exigido

4) Desenvolva uma função que receba como parâmetro um array de números inteiros e responda com TRUE or FALSE se é possível obter uma sequencia crescente removendo apenas um elemento do array.

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

  Esse exercício foi o que mais me exigiu pensar em uma lógica apropriada para resolve-lo, embora percebi que a sua solução não fosse tão complicada quanto eu imaginei a princípio. Perceba-se, que usei a mesma lógica que um ser humano usaria para resolve-lo, a única diferença que aplicada um computador. Primeiro eu verifico o número que está fora de contexto, após isso eu verifico se o array está em ordem crescente, e no código, apenas tratei de colocar os returns nos lugares apropriados com os valores apropriados.

  o/ Show de bola, desafio concluído, como perdi o tempo para enviar para empresa, acabei de não participar o restante do processo, mas agora já estou mais afiado do que antes!

  
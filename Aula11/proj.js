/*Assim que se comenta em js*/

//tag para fazer interações
<script></script>

//declara variavel
let variavel;
var varialvel2;

//identação obs:prompt lê a informação
<script>
let inteiro = parseInt(prompt("Digite um valor inteiro"));
</script>
//em js a entradasempre será textual
<script>
let char =prompt("Digite seu nome");
</script>

//alert mostra a informação
<script>
alert ("Erro! " + nome +"inválido")
</script>
//ou com DOM
<script>
document.write("Erro! ", nome)
</script>

// Importa o módulo 'fs' (filesystem) do Node.js
const fs = require('fs');
// O conteúdo que você quer escrever no arquivo
const conteudo = 'Olá, este é o conteúdo do arquivo!';
// O nome do arquivo a ser criado
const nomeArquivo = 'meuArquivo.txt';
// Escreve o conteúdo no arquivo
fs.writeFile(nomeArquivo, conteudo, (err) => {
  if (err) {
    console.error('Erro ao criar o arquivo:', err);
    return;
  }
  console.log(`Arquivo ${nomeArquivo} criado com sucesso!`);
});
//exemplo de calculo de média
<script>
let nota1 = parseFloat (prompt (“nota 1”));
let nota2 = parseFloat (prompt (“nota 2”));
let nota3 = parseFloat (prompt (“nota 3”));

let media = (nota1+nota2+nota3)/3;
alert (“media final = ” +media);
</script>

//exemplo de estrutura condicional IF
<script>
let num1 = parseInt (prompt (“Digite o primeiro número inteiro”));
let num2 = parseInt (prompt (“Digite o segundo número inteiro”));

if(num1>num2)
{
	document.write(num1, “é maior que ”, num2)
}
else
{
	document.write(num2, “é maior que ”, num1)
}
</script>

//exemplo de laço de repetição FOR
<script>
let n = parseInt (prompt (“Digite quantas vezes deseja repetir a mensagem”));
for(let i=0; i<n; i++)
{
	document.write( “Olá mundo <br> ”)
}
</script>

//exemplo de laço de repetição WHILE
<script>
let n = parseInt (prompt (“Digite um número, 5 para sair”));
while(n!=5)
{
	alert( “Olá mundo”)
n= parseInt (prompt(“digite um número, 5 para sair”))
}
</script>

//exemplo de laço de repetição DO WHILE
<script>
 let n;
 do { 
n = parseInt(prompt("Digite um número, 5 para sair"));
 if (n != 5) 
{ 
alert("Olá mundo");
 }
 } while (n != 5); 
</script>

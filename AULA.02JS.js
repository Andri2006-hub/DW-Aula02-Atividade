console.log(
 1) ("Tipos primitivos + typeof ==")

// Declarando 1 variável para cada tipo primitivo
const str = "hello";           // string
const num = 42;               // number  
const bool = true;            // boolean
const undef = undefined;      // undefined
const nul = null;             // null
const big = 123456789012345678901234567890n;  // bigint
const sym = Symbol("id");     // symbol

console.log("typeof str:", typeof str);  // "string"
console.log("typeof num:", typeof num);  // "number"
console.log("typeof bool:", typeof bool); // "boolean"
console.log("typeof undef:", typeof undef); // "undefined"
console.log("typeof nul:", typeof nul);   // "object" (bug histórico do JS!)
console.log("typeof big:", typeof big);   // "bigint"
console.log("typeof sym:", typeof sym);   // "symbol"

console.log(
 2) ("BigInt e Symbol ==")
// BigInt: criando número grande com sufixo 'n'
const bigInt = 999999999999999999n;
console.log("bigInt:", bigInt);           // 999999999999999999n
console.log("typeof bigInt:", typeof bigInt); // "bigint"

// Symbol: sempre únicos, mesmo com mesma descrição
const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log("sym1 === sym2:", sym1 === sym2); // false
console.log("typeof sym1:", typeof sym1);     // "symbol"

console.log()
== 3 ( "== Operadores matemáticos, lógicos e comparação ==")
// Matemáticos
console.log("5 + 3:", 5 + 3);              // 8
console.log("10 * 2:", 10 * 2);            // 20

// Lógicos
console.log("true && false:", true && false); // false
console.log("true || false:", true || false); // true

// Comparação (incluindo == vs ===)
console.log("5 == '5':", 5 == "5");        // true (conversão de tipo)
console.log("5 === '5':", 5 === "5");      // false (comparação estrita)
console.log("null == undefined:", null == undefined); // true

console.log(
 4) ("Concatenação e conversão dinâmica ==")
// + com number e string faz concatenação
console.log("2 + '2':", 2 + "2");          // "22"
// + com (+"2") força conversão para number primeiro
console.log("2 + (+'2'):", 2 + (+"2"));    // 4
// Mais um exemplo de concatenação dinâmica
console.log("42 + ' é a resposta':", 42 + " é a resposta"); // "42 é a resposta"

console.log(
 5) ("Escopo léxico e blocos {} ==")
// {} sozinho cria bloco (escopo léxico com let/const)
{
  const dentroBloco = "só existe aqui";
  console.log("Dentro do bloco:", dentroBloco); // "só existe aqui"
}
// console.log(dentroBloco); // ERRO! Não acessível fora

// De fora pra dentro (variável externa visível dentro)
const deFora = "visível em qualquer lugar";
{
  console.log("Dentro usando deFora:", deFora); // "visível em qualquer lugar"
}

// var vaza do bloco (hoisting + function scope)
if (true) {
  var vazou = "var vaza do if";
}
console.log("var vazou:", vazou);          // "var vaza do if"

console.log(
 6) ("Shadowing com const ")
// const fora do if
const blocoExterno = "valor externo";

if (true) {
  console.log("1) Antes do shadowing:", blocoExterno); // "valor externo"
  
  // Shadowing: nova const com MESMO NOME dentro do escopo
  {
    const blocoExterno = "outro valor (shadowing)";
    console.log("2) Dentro do shadowing:", blocoExterno); // "outro valor (shadowing)"
  }
  
  console.log("3) Depois do shadowing:", blocoExterno); // "valor externo"
}

console.log("4) Fora do if:", blocoExterno); // "valor externo" (não foi alterado!)

console.log(
7) ("Imutabilidade de primitivos ==")
// String é imutável - métodos retornam NOVO valor
let texto = "hello";
console.log("Antes toUpperCase():", texto);           // "hello"
texto.toUpperCase(); // Não reatribui!
console.log("Depois toUpperCase() sem reatribuição:", texto); // "hello" (igual!)

texto = texto.toUpperCase(); // REATTRIBUIÇÃO necessária
console.log("Depois reatribuição:", texto);           // "HELLO"

console.log(
 8) ("Assincronismo com setTimeout ==")
// Event Loop: setTimeout entra na fila e roda DEPOIS do código atual
console.log("A) Código síncrono executa primeiro");

setTimeout(() => {
  console.log("B) setTimeout(0) roda depois do C"); 
}, 0);

console.log("C) Continua executando antes do timeout");

// Segundo exemplo com dois timeouts
console.log()
 ("Exemplo com dois timeouts ---")
setTimeout(() => {
  console.log("Timeout 0ms executou");
}, 0);

setTimeout(() => {
  console.log("Timeout 100ms executou");
}, 100);

console.log("D) Código síncrono continua...");

/*
Invert String

- Descrição do Problema: 

 -- Implemente uma função que recebe uma string como entrada e retorna a string invertida. Por exemplo, se a entrada for "hello", a saída deve ser "olleh". Sua função deve ser capaz de lidar com strings contendo espaços, pontuação e caracteres especiais.

- Requisitos:

1. A função deve aceitar uma única string como argumento.
2. A função deve retornar a string invertida.
3. A função deve preservar todos os caracteres, incluindo espaços e pontuação, na ordem invertida.

- Exemplos:

-- Entrada: "hello"
   Saída: "olleh"

-- Entrada: "OpenAI"
   Saída: "IAnepO"

-- Entrada: "Invert this string!"
   Saída: "!gnirts siht trevnI"
*/

// Loop version
const invertString = (myString) => {
  if (typeof myString !== 'string') {
    throw new Error ('myString is not a string')
  } 
  let invertedStr = '';
  for (let i = myString.length - 1; i >= 0; i--) {
    invertedStr += myString[i];
    // invertedStr = invertedStr.concat(myString[i])
  }
  return invertedStr;
}

// Split and Reduce version
// const invertString = (myString) => {
//   if (typeof myString !== 'string') {
//     throw new Error ('myString is not a string')
//   } 
//   return myString.split('').reduce((invertedStr, char) => char + invertedStr, '');
// }
// try {
//   console.log(invertString("hello")); // "olleh"
//   console.log(invertString("OpenAI")); // "IAnepO"
//   console.log(invertString("Invert this string!")); // "!gnirts siht trevnI"
//   console.log(invertString(123)); // throw an Erro: myString is not a string
// } catch (error) {
//   console.error('Erro:', error.message);
// }


export default invertString
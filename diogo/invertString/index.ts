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

const invertString = (str) => {
  let strinvert = "";
  for (let i = str.length - 1; i >= 0; i--){
    strinvert += str[i];
  }
  return strinvert;
}
export default invertString;

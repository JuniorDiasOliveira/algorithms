const fs = require("fs");
const path = require("path");
const descriptions = require("./descriptions");

if (process.argv.length < 3) {
  console.error("Por favor, forneça um nome para a pasta.");
  process.exit(1);
}

const folderName = process.argv[2];

const pathArthur = path.join(__dirname, "..", "arthur", folderName);
const pathDiogo = path.join(__dirname, "..", "diogo", folderName);

const createFolderAndFiles = (dirPath) => {
  fs.mkdirSync(dirPath, { recursive: true });

  const indexPath = path.join(dirPath, "index.ts");
  const specPath = path.join(dirPath, "index.spec.ts");
  const problemName = path.basename(dirPath);

  const { indexContent, specContent } = getContent(problemName);

  fs.writeFileSync(indexPath, indexContent);
  fs.writeFileSync(specPath, specContent);
};

function getContent(problemName) {
  const problemDescription = descriptions[problemName];

  if (!problemDescription) {
    console.error("Descrição nao encontrada");
    process.exit(1);
  }

  const indexContent = `${problemDescription}

const ${problemName} = () => {}

export default ${problemName}
`;

  const specContent = `// Use this file to write tests for the problem

import defaultFunc from "./index";

describe('${problemName} tests', function() {
  it('should return true', function() {
    expect(true).toBe(true);
  });
});
`;

  return { indexContent, specContent };
}

createFolderAndFiles(pathArthur);
createFolderAndFiles(pathDiogo);

console.log(
  `Pastas e arquivos criados com sucesso em '${arthur}' e '${diogo}'`
);

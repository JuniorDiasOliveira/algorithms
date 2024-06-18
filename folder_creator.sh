#!/bin/bash

if [ -z "$1" ]; then
  echo "Por favor, forneça um nome para a pasta."
  exit 1
fi

FOLDER_NAME=$1

PATH_A="./arthur/$FOLDER_NAME"
PATH_B="./diogo/$FOLDER_NAME"

create_folder_and_files() {
  local path=$1

  mkdir -p $path

  touch $path/index.ts
  echo "$path/index.ts" > "const $1 = () => {}"
  touch $path/index.spec.ts
}

create_folder_and_files $PATH_A

create_folder_and_files $PATH_B

echo "Pastas e arquivos criados com sucesso em '$PATH_A' e '$PATH_B'"

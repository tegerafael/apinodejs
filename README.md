# apinodejs

>Passo a passo para a instalação das bibliotecas, criação das migrations, seeds

npm init -y

npm install express

npm install body-parser

npm install --save-dev nodemon

npm install mysql2

npm install sequelize sequelize-cli path

npx sequelize-cli init

npx sequelize-cli model:create --name Pessoas --attributes nome_pes:string,ativo_pes:boolean,email_pes:string,role_pes:string

npx sequelize-cli db:migrate

npx sequelize-cli seed:generate --name demo-pessoa

npx sequelize-cli db:seed:all

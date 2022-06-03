Test SQL code:

Create database votacao;

USE votacao;

CREATE TABLE tbl_votacao(
id int NOT NULL AUTO_INCREMENT UNIQUE,
titulo varchar(50) NOT NULL,
data_inicio date NOT NULL,
data_fim date NOT NULL,
opcao_1 varchar(50) NOT NULL,
votos_1 int DEFAULT 0,
opcao_2 varchar(50) NOT NULL,
votos_2 int DEFAULT 0,
opcao_3 varchar(50) NOT NULL,
votos_3 int DEFAULT 0,
PRIMARY KEY (id)
);

INSERT INTO tbl_votacao(titulo, data_inicio, data_fim, opcao_1, votos_1, opcao_2, votos_2, opcao_3, votos_3)
 VALUES("Quem vai ganhar a corrida?", "2022/06/01", "2022/06/02", "Carro 01", 10, "Carro 02", 5, "Carro 10", 10);
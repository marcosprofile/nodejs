/* Criar um banco */
CREATE DATABASE sistemaDeCadastro;


/* Acessar um banco */
USE sistemaDeCadastro;


/* Criar uma tabela */
CREATE TABLE usuarios(
	nome VARCHAR(50),
	email VARCHAR(50),
	idade INT
);


/* Inserir dados em uma tabela */
INSERT INTO usuarios(nome, email, idade) VALUES(
	"João Lima",
    "email@teste.com",
    27
);


/* Acessar uma tabela */
SELECT * FROM usuarios;


/* Criar uma tabela e alterar uma coluna específica */
SELECT * FROM usuarios WHERE idade = 27;
SELECT * FROM usuarios WHERE nome = "Marcos L. Ferreira";
SELECT * FROM usuarios WHERE idade >= 32;


/* Deletar de uma tabela dados que correspondem a coluna informada */

/* Abaixo estamos removendo usuários com a idade igual a 38
*  e usuários com o nome igual a João Lima
*/
DELETE FROM usuarios WHERE idade = 38;
DELETE FROM usuarios WHERE nome = "João Lima";


/* Atualizar dados de uma tabela e alterar a coluna informada */
/* Abaixo estamos atualizando a idade de usuários com o nome igual a Thiago Alves */
UPDATE usuarios SET idade = 34 WHERE nome = "Thiago Alves";
# Investment 

## Uma API para controle de investimento 

### Comando para clonar o repositório: 
_**git clone https://github.com/ViniciusCaique/docker-express-api.git**_

### Comando para instalar as dependencias do projeto: 
_**npm install**_

### Comando para iniciar o docker compose junto com a imagem: 
_**docker-compose up -d --build**_


### -h: localhost, -P: porta, --potrocol=tcp: é opcional e habilita aplicações trocarem mensagem com a network, -u: usuario, -p: passwordd, não é bom informar na linha de código. 
_**mysql -h localhost -P 3306 --protocol=tcp -u {username} -p**_


### Encerra o docker compose:
_**docker-compose down**_


### Endpoints

- Usuario   
    - Cadastrar 
    - Atualizar
    - Listar todos
    - Mostrar detalhes
    - Apagar



### Cadastrar usuario
`POST` /api/usuario

|campo|tipo|Obrigratório|Descrição
|------ |------|:-----------: |---------
|nome|text|sim|Campo para o usuario informa seu nome
|email|text|sim|Campo onde o usuario informa o email
|password|text|sim|Campo reservado para a senha do usuario


**Exemplo de corpo de requisição** 
```js
{
    "nome": "Fernando",
    "email": "Fernando@gmail.com",
    "password": "jP5@o37ZKxd3"
}
```


**Exemplo de corpo da respota**

**Cógigos de respota**

|código| descrição
| - | -
|201 | dados cadastrado com sucesso
|400 | os campos enviados sao invalidos


### Atualizar usuario
`PUT`/api/usuario/{id}


**Exemplo de corpo de requisição** 
```js
{
    "nome": "Cesar",
    "email": "Cesar@gmail.com",
    "password": "jP5@o37ZKxd3"
}
```

**Cógigos de respota**

|código| descrição
| - | -
|201 | dados cadastrado com sucesso
|400 | os campos enviados sao invalidos


### Listar todos
`GET` /api/usuario
```js
{
    "nome": "Fernando",
    "email": "Fernando@gmail.com",
    "password": "jP5@o37ZKxd3"
}
{
    "nome": "Cesar",
    "email": "Cesar@gmail.com",
    "password": "X1z12Z@Bprd3"
}
```


**Cógigos de respota**

|código| descrição
| - | -
|200 | dados retornados com sucesso
|402 | não existe usuario cadastrado


### Detalhar usuario

`GET` /api/usuario/{id}
```js
{
    "id": 1,
    "nome": "Fernando",
    "email": "Fernando@gmail.com",
    "password": "jP5@o37ZKxd3"
}
``` 

**Cógigos de respota**

|código| descrição
| - | -
|200 | dados retornados com sucesso
|402 | não existe usuario cadastrada    


### Apagar usuario
`DELETE`/api/usuario/{id}

|código| descrição
| - | -
|204 | dado apagado com sucesso
|401 | não existe dado com o id informado

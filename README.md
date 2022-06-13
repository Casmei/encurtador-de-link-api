# API - Encurtador de Links

É muito comum que tenhamos contato, nas mais diversas aplicações, com URLs totalmente ilegíveis devido à quantidade de parâmetros passados.
Os encurtadores são ferramentas simples: produzem um novo URL (curto) que irão redirecionar para a URL que deseja. Isso é básico, mas abre 
uma gama de possibilidades que podem ser aproveitadas, sobretudo, na área de marketing.

## Gerar Link encurtado

### Request

`POST /new`

    curl -i -H 'Accept: application/json' -d 'url:https://algumsite/asdada/asdfasf/uXjVOtE0G08=/' http://localhost:3000/new

### Response

    Status: 201 Created

```json 
     {
       "link":"http://localhost:3000/drqw2"
     }
```    
## Redirecionamento

### Request

`GET /:code`

    curl -i -H 'Accept: application/json' -d 'code:drqw2' http://localhost:3000/:code

### Response

    Status: 200 Ok
    
    render: https://algumsite/asdada/asdfasf/uXjVOtE0G08=/


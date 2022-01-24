# Construir uma API para manutenção de _laboratórios_ e _exames_

**Laboratório**
    - [x]cadastrar um novo laboratório;
    - [x]obter uma lista de laboratórios ativos;
    - [x]atualizar um laboratório existente;
    - [x]remover logicamente um laboratório ativo.

**Exames**
    - [x]cadastrar um novo exame;
    - [x]obter uma lista de exames ativos;
    - [x]atualizar um exame existente;
    - [x]remover logicamente um exame ativo.

_Associação_
    - associar um exame ativo à um laboratório ativo;
    - desassociar um exame ativo de um laboratório ativo;

**Importante:**
    - Um exame pode estar associado a mais de um laboratório;
    - O cadastro de um laboratório/exame é considerado ativo e recebe um `id` gerado automaticamente.

# Banco de Dados

   **Laboratório** 
        - [x]nome
        - [x]endereço
        - [x]status [ativo, inativo]
        
   **Exame**
        - [x]nome
        - [x]tipo [analise clinica, imagem]
        - [x]status [ativo, inativo]

# Funcionalidades extras

    - Endpoint que faz a busca por nome do exame e retorna todos os laboratórios associados a esse exame.
    - Possibilidade de executar cadastro, atualização e remoção em lote;
    - Configurar a aplicação para rodar em um container
    - Publicação do ambiente em um serviço cloud de hospedagens (Heroku, AWS, GCP, etc)
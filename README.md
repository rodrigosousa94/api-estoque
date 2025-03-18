# API de Gestão de Estoque - Node.js, Express & Sequelize 🚀

Bem-vindo à API de Gestão de Estoque, um sistema desenvolvido para facilitar o gerenciamento de organizações, usuários, produtos e movimentações de estoque.
Essa API foi construída utilizando Node.js, Express, Sequelize, Bcrypt e JWT garantindo segurança, escalabilidade e eficiência na administração de inventário.

# 📌 Visão Geral

A API permite a criação e gerenciamento de organizações, onde cada organização possui seu próprio conjunto de usuários, produtos e estoques. 
Além disso, é possível registrar movimentações de entrada e saída dos produtos no estoque.

# 💡 Tecnologias Utilizadas

- Node.js - Ambiente de execução para JavaScript no backend.
- Express - Framework minimalista para construção de APIs.
- Sequelize - ORM para interagir com bancos de dados relacionais.
- MySQL - Banco de dados relacional para armazenar informações.
- Bcrypt - Para criptografia de senhas dos usuários.
- JWT (JSON Web Token) - Para autenticação e controle de acesso.

# 🏗️ Estrutura dos Serviços (Services)

A API é organizada em módulos independentes para facilitar a manutenção e escalabilidade:

# 1. organization.js

- Criação de organizações.
- Cada organização já inicia com um usuário administrador.
- Listagem e gerenciamento das organizações cadastradas.

# 2. user.js

- Criação de usuários dentro de uma organização.
- Autenticação e controle de permissões com JWT.
- Gerenciamento de usuários dentro da organização.
- Armazenamento seguro de senhas com Bcrypt.

# 3. product.js

- Cadastro de produtos dentro de uma organização.
- Listagem e edição de produtos.
- Associação dos produtos com os estoques da organização.

# 4. inventory.js

- Gestão do estoque de cada organização.
- Relacionamento entre produtos e estoque.

# 5. inventoryMoviment.js

- Registro das movimentações de estoque (entrada e saída de produtos).

# 🔧 Funcionalidades

✅ Criação e gerenciamento de organizações.
✅ Cadastro de usuários dentro de cada organização.
✅ Controle de permissões para usuários com JWT.
✅ Cadastro e gestão de produtos.
✅ Controle de estoque por organização.
✅ Registro de movimentações de entrada e saída de produtos.
✅ Proteção de senhas com Bcrypt.

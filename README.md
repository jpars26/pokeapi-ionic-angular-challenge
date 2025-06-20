PokeApp - Desafio Ionic/Angular
Este é um projeto de desafio desenvolvido com Ionic e Angular que consome a PokéAPI para exibir informações sobre Pokémon.

✨ Funcionalidades
Listagem de Pokémon: Navegue por uma lista de Pokémon com paginação.
Detalhes do Pokémon: Veja informações detalhadas de cada Pokémon, como habilidades, tipos e uma breve descrição.
Favoritos: Marque seus Pokémon preferidos e veja sua lista de favoritos. Os favoritos são salvos localmente no seu dispositivo.
🚀 Tecnologias Utilizadas
Ionic
Angular
TypeScript
PokéAPI
Capacitor
⚙️ Como Executar o Projeto
Clone o repositório:

git clone https://github.com/seu-usuario/pokeapi-ionic-angular-challenge.git
cd pokeapi-ionic-angular-challenge/pokeapp
Instale as dependências:

npm install
Execute o projeto em modo de desenvolvimento:

npm start
O aplicativo estará disponível em http://localhost:4200/.

Outros Comandos
Build para produção:

npm run build
Executar testes unitários:

npm run test
Análise de código (Lint):

npm run lint
📂 Estrutura do Projeto
O código-fonte principal está localizado em pokeapp/src/app.

pokeapp/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── pokemon-list/   # Página de listagem dos Pokémon
│   │   │   └── pokemon-detail/ # Página de detalhes do Pokémon
│   │   ├── services/
│   │   │   ├── pokeapi.service.ts    # Serviço para comunicação com a PokéAPI
│   │   │   └── favorites.service.ts  # Serviço para gerenciar os favoritos
│   │   ├── app-routing.module.ts # Configuração das rotas
│   │   └── app.module.ts         # Módulo principal da aplicação
│   └── ...
└── ...
Este README foi gerado com o auxílio de uma IA.

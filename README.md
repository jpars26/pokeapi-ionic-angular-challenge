# PokeApp - Desafio Ionic/Angular

Este é um projeto de desafio desenvolvido com Ionic e Angular que consome a [PokéAPI](https://pokeapi.co/) para exibir informações sobre Pokémon.

## ✨ Funcionalidades

*   **Listagem de Pokémon**: Navegue por uma lista de Pokémon com paginação.
*   **Detalhes do Pokémon**: Veja informações detalhadas de cada Pokémon, como habilidades, tipos e uma breve descrição.
*   **Favoritos**: Marque seus Pokémon preferidos e veja sua lista de favoritos. Os favoritos são salvos localmente no seu dispositivo.

## 🚀 Tecnologias Utilizadas

*   [Ionic](https://ionicframework.com/)
*   [Angular](https://angular.io/)
*   [TypeScript](https://www.typescriptlang.org/)
*   [PokéAPI](https://pokeapi.co/)
*   [Capacitor](https://capacitorjs.com/)

## ⚙️ Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/pokeapi-ionic-angular-challenge.git
    cd pokeapi-ionic-angular-challenge/pokeapp
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Execute o projeto em modo de desenvolvimento:**
    ```bash
    npm start
    ```
    O aplicativo estará disponível em `http://localhost:4200/`.

### Outros Comandos

*   **Build para produção:**
    ```bash
    npm run build
    ```

*   **Executar testes unitários:**
    ```bash
    npm run test
    ```

*   **Análise de código (Lint):**
    ```bash
    npm run lint
    ```

## 📂 Estrutura do Projeto

O código-fonte principal está localizado em `pokeapp/src/app`.

```
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
```

---

*Este README foi gerado com o auxílio de uma IA.*

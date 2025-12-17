# 🧠 Memory Game

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![HTML5](https://img.shields.io/badge/HTML5-Game-orange)
![CSS3](https://img.shields.io/badge/CSS3-Animation-blue)
![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-green)
![License](https://img.shields.io/badge/license-MIT-green)

Jogo da memória desenvolvido com **HTML, CSS e JavaScript puro**, onde o objetivo é **encontrar todos os pares de cartas** no menor tempo possível.

Projeto criado com foco **educacional e de portfólio**, demonstrando:
- Lógica de programação
- Manipulação do DOM
- Controle de estado
- Eventos e interações do usuário
- Animações com CSS


## 🎮 Demonstração

> O jogo roda diretamente no navegador, sem necessidade de bibliotecas externas.

📌 **Objetivo:**  
Encontrar todos os pares de cartas iguais virando duas cartas por vez.


## 🕹️ Como Jogar

1. Clique em uma carta para virá-la
2. Clique em outra carta
3. Se forem iguais → o par é mantido
4. Se forem diferentes → as cartas viram novamente
5. O jogo termina quando todos os pares forem encontrados


## 📌 Funcionalidades

- 🃏 Cartas embaralhadas automaticamente
- 🔄 Sistema de virar cartas
- ❌ Bloqueio durante animações
- 🧠 Comparação de pares
- 🏁 Detecção de fim de jogo
- 🎨 Animações visuais simples e fluidas


## 🏗️ Arquitetura do Projeto

Fluxo lógico do jogo:

```
HTML (estrutura das cartas)
↓
CSS (estilo e animações)
↓
JavaScript

* Estado do jogo
* Regras
* Eventos
```

## 📂 Estrutura de Diretórios

```
memory_game/
├── css
│   ├── game.css
│   ├── login.css
│   └── reset.css
├── images
│   ├── back.png
│   ├── beth.png
│   ├── bg.jpg
│   ├── brain.png
│   ├── cerebro.jpg
│   ├── jerry.png
│   ├── jessica.png
│   ├── logo.png
│   ├── meeseeks.png
│   ├── morty.png
│   ├── pessoa-passaro.png
│   ├── pickle-rick.png
│   ├── rick.png
│   ├── scroopy.png
│   └── summer.png
├── js
│   ├── game.js
│   └── login.js
├── pages
│   └── game.html
├── index.html
└── README.md
````

## ⚙️ Tecnologias Utilizadas

- **HTML5**
- **CSS3**
  - Animações
  - Transições
- **JavaScript (ES6+)**
  - Manipulação do DOM
  - Eventos
  - Controle de estado


## 🚀 Como Executar o Projeto

### Opção 1 — Abrir direto no navegador
```bash
Abra o arquivo index.html no navegador
````

### Opção 2 — Live Server (VSCode)

1. Instale a extensão **Live Server**
2. Clique com o botão direito em `index.html`
3. Selecione **Open with Live Server**


## 🧠 Lógica do Jogo (Resumo)

* As cartas são duplicadas e embaralhadas
* O jogador só pode virar duas cartas por vez
* Se as cartas forem iguais → permanecem abertas
* Se diferentes → são ocultadas após um delay
* O jogo termina ao encontrar todos os pares


## 🚀 Possíveis Evoluções

* ⏱️ Contador de tempo
* 🏆 Sistema de pontuação
* 🔄 Botão de reiniciar
* 🎮 Níveis de dificuldade
* 📱 Suporte a dispositivos móveis
* 🔊 Efeitos sonoros

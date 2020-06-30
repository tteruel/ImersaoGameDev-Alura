
//Variaveis do jogo
let imagemCenario;
let imagemArvore;
let cenario;
let somDoJogo;
let somDoPulo;
let somDaColisao;
let gameOverScreen;
let imagemAbelha;
let imagemInicio;
let imagemTelaInicial;
let fonteTelaInicial;
let imagemGameStart;
let jogoRodando = false;
let botaoGerenciador;
let arvore;
let pontuacao;
let inimigoAtual = 0;
let imagemVida;
let vida;
let cenaAtual = "telaInicial";
let cenas = []
let telaInicial;
let fita;

let andar = false;
const matrizGameStart = [[0, 0]];





//Personagem
let imagemPersonagem;
const matrizPersonagem = [
    [0,0],  [220,0],  [440,0], [660,0],
    [0,270], [220,270], [440,270], [660,270],
    [0,540], [220,540], [440,540], [660,540],
    [0,810], [220,810], [440,810], [660,810]
  ];
let personagem;


//Inimigo Gota
let imagemInimigo;
const matrizInimigo = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 102],
  [104, 102],
  [208, 102],
  [312, 102],
  [0, 204],
  [104, 204],
  [208, 204],
  [312, 204],
  [0, 306],
  [104, 306],
  [208, 306],
  [312, 306],
  [0, 408],
  [104, 408],
  [208, 408],
  [312, 408],
  [0, 510],
  [104, 510],
  [208, 510],
  [312, 510],
  [0, 612],
  [104, 612],
  [208, 612],
  [312, 612],
];
let inimigo;


//Troll
const matrizTroll = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
];
let imagemTroll;

//Gota Voadora
const matrizGotinhaVoadora = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
];
let imagemGotinhaVoadora;

const inimigos = [];

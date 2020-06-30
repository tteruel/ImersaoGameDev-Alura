function preload(){
  imagemCenario = loadImage("imagens/cenario/floresta.png");
  imagemArvore = loadImage("imagens/cenario/Arvore.png");
  imagemPersonagem = loadImage("imagens/personagem/correndo.png");
  imagemInimigo = loadImage("imagens/inimigos/gotinha.png");
  imagemAbelha = loadImage("imagens/cenario/bee.png");
  imagemTroll = loadImage("imagens/inimigos/troll.png");
  imagemGotinhaVoadora = loadImage("imagens/inimigos/gotinha-voadora.png");
  imagemInicio = loadImage("imagens/cenario/Tela Inicio.png");
  imagemTelaInicial = loadImage("imagens/cenario/telaInicial.png");
  fonteTelaInicial = loadFont("imagens/assets/fonteTelaInicial.otf");
  imagemGameStart = loadImage("imagens/assets/game-start.png");
  gameOverScreen = loadImage("imagens/assets/game-over.png");
  
  imagemVida = loadImage("imagens/assets/coracao.png");
 
  fita = loadJSON("fita/fita.json");
  
  
  somDoJogo = loadSound("sons/trilha_jogo.mp3");
  somDoPulo = loadSound("sons/somPulo.mp3");
  somDaColisao = loadSound("sons/somColisao.mp3");  
}
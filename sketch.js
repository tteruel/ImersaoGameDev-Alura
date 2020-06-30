function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  
  jogo = new Jogo();
  jogo.setup();
  telaInicial = new TelaInicial();
  cenas = {
    jogo: jogo,
    telaInicial: telaInicial
    
  };
  botaoGerenciador = new BotaoGerenciador("Iniciar", width/2, height/2);
  
  
  somDoJogo.play();
  somDoJogo.setVolume(0.1);
  somDoJogo.loop(); // é executado várias vezes a mesma música
}

function keyPressed() {
  jogo.keyPressed(key);
}

 function draw() {
    cenas[cenaAtual].draw();
}
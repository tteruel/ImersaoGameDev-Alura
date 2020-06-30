class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa;
  }

   setup() {
    cenario = new Cenario(imagemCenario, 5);
    arvore = new Cenario(imagemArvore, 4);
    /* abelha = new CriaturaCenario(matriz, 
                                  imagemAbelha, 
                                  x, 
                                  y, 
                                  largura, 
                                  altura, 
                                  larguraSprite, 
                                  alturaSprite
                                  );*/
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 55, 220, 270, 220, 270);
    const gota = new Inimigo(matrizInimigo, imagemInimigo, width, 35, 110, 120, 110, 104, 15);
    const troll = new Inimigo(matrizTroll, imagemTroll, width, 5, 400, 400, 400, 400, 10);
    const gotaVoadora = new Inimigo(matrizGotinhaVoadora, imagemGotinhaVoadora, width, 200, 200, 150, 200, 150, 13);
    inimigos.push(gota);
    inimigos.push(gotaVoadora);
    inimigos.push(troll);
  }


  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pular();
      somDoPulo.play();
    }
    if(key === 'ArrowRight'){
      cenario.move();
    }
  }
  
  
  draw(){
  
    cenario.exibe();
    //cenario.move();
    arvore.exibe();
    arvore.move();
    vida.draw();
    pontuacao.exibe();
    pontuacao.adicionaPonto();
    personagem.exibe();
    personagem.aplicaGravidade();
    const linhaAtual = this.mapa[this.indice] 

    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    
    inimigo.exibe();
    inimigo.move();
    
    
    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece();
      if(this.indice > this.mapa.length - 1){
       this.indice = 0; 
      }
      console.log("inimigo: " + linhaAtual.inimigo);
    }
    
    inimigo.velocidade = linhaAtual.velocidade;


    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida();
      personagem.ficaInvencivel();
      somDaColisao.play();
      
      if(vida.vidas === 0) {
          image(gameOverScreen, width / 2 - 200, height / 2);
          noLoop();
      }

    }
  }    
}
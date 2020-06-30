class Personagem extends Animacao {
 constructor (matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
   super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
  
   this.variacaoY = variacaoY;
   this.chao = height-this.altura-this.variacaoY; //yInicial
   this.y = this.chao;
   
   
   this.pulos = 0;
   this.gravidade = 2;
   this.velocidadePulo = 3;
   this.alturaDoPulo = 30;
   this.invencivel = false
 }
  
  

  
  pular(){
    this.pulos++;
    if(this.pulos<=2){
    this.velocidadePulo = -this.alturaDoPulo;
    }
    //this.y = this.y - 50;
    console.log(this.chao, this.y);
  //this.aplicarGravidade();
    console.log(this.chao, this.y);
  }
  
    aplicaGravidade(){
      this.y = this.y + this.velocidadePulo;
      this.velocidadePulo = this.velocidadePulo + this.gravidade;
      
      if(this.y > this.chao){
        this.y = this.chao;
        this.pulos = 0;
      }
  }
  ficaInvencivel(){
   this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false}, 1000)
    
  }
  
  estaColidindo(inimigo){
    if(this.invencivel){
       return false; 
    }
    const precisao = .7;
   /* noFill();
    
    circle(this.x+this.largura/2, 
                    this.y+this.y/4, 
                    this.largura*precisao
                    );
    circle(inimigo.x+inimigo.largura/2, 
                    inimigo.y+inimigo.altura/2, 
                    inimigo.largura*precisao
                    );
    
   // circle(inimigo.x,
                //    inimigo.y ,
                  //  inimigo.largura * precisao,
                    //inimigo.altura * precisao);
    //isso é feito para desenhar um retangulo marcando a área da figura dos desenhos e ver onde eles se colidem.
    //fazendo essa variável precisão, vc diminui o espaço passado no collide, fazendo assim com que pareça com que as figuras colidem quando chegam mais perto.
    */
    const colisao = collideCircleCircle(
                    this.x+this.largura/2, 
                    this.y+this.y/4, 
                    this.largura*precisao,
                    inimigo.x+inimigo.largura/2, 
                    inimigo.y+inimigo.altura/2, 
                    inimigo.largura*precisao
                    );
    
    return colisao;
  }
}
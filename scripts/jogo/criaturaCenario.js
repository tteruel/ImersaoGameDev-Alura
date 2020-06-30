class CriaturaCenario extends Animacao{
   constructor (matriz, imagem, x, y, largura, altura, larguraSprite, alturaSprite){
   super(matriz, imagem, x, y, largura, altura, larguraSprite, alturaSprite);
   this.velocidade = 2;
 }
  move(){
    this.x = this.x - this.velocidade;
    
    if(this.x < -this.largura){
      this.x = width + this.largura + 150;
    }
  }
}
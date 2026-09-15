let birdImage;
let pipeImage;
let fundo;
let tema;
let hit;

let bird;
let pipes = [];


async function setup() {
  createCanvas(400, 500);
  
  birdImage = await loadImage('bird.png');
  pipeImage = await loadImage('pipe.png');
  fundo = await loadImage('fundo.jpg')
  tema = await loadSound('tema.mp3')
  hit = await loadSound('hit.mp3')
  
  bird = new Bird(25, width/2, birdImage);
  pipes.push(new Pipe(width,pipeImage));
  tema.play();
}

function draw() {
  background(fundo);
  bird.exibi();
  bird.update();
  bird.chao();

  if (frameCount % 200 === 0){
    pipes.push(new Pipe(width, pipeImage));
  }

for(let pipe of pipes){
  pipe.exibir();
  pipe.update();

  if(bird.colidiu(pipe)){
    hit.play();
    textSize(40);
    text('Gameover', 120, 200);
    noLoop();
  }
}
}
//---------Função pressionar espaço------------
function keyPressed()
{
  if (key === ' ')
  {
    bird.up()
  }
}
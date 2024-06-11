function setup() {
  createCanvas(400, 400);
}

  function draw() {
  background("white");
  fill ("purple")
  textSize(50)
  textAlign(CENTER,CENTER);
  textFont('fontbold');

  
  let maximo = width;
  let minimo=0;
    
  console.log("Alegria".length);
  let palavra= "Alegria";
  let quantidade= map(mouseX, 0, width,1, palavra.length)
  let parcial=palavra.substring(0,quantidade);
  text(parcial,200,200) 
}
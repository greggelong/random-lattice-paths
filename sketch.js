let sz;
let rowcol = 20;

let ball;

let moves = ['r','d'];

let instr ="";

let rights,downs;

let clr;



function setup() {
  

  if (windowWidth > windowHeight){

  	createCanvas(windowHeight-20,windowHeight-20);
  }else{

  createCanvas(windowWidth-20,windowWidth-20);

}
  sz = width/rowcol

  background(0);
  mypara = createP("paths")
  
  textSize(16)
  frameRate(10);


  stroke(0,255,0);
  showlatt();
  ball = createVector(0,0);
  clr = color(255,0,0);
  fill(clr); 
  rect(ball.x,ball.y, sz,sz)


}

function draw() {
	
   if (rights < rowcol-1 && downs < rowcol-1){
  // case both areless than 9
  a = random(moves)
  if (a === 'r'){
    instr += 'r';
    rights++;
    ball.x += sz;
  }else{
    instr += 'd';
    downs++;
    ball.y += sz;
  }
 
}
  else if(rights === rowcol-1 && downs < rowcol-1){
    // if rights is 9 add downs
      instr += 'd';
      downs++;
      ball.y+= sz;
  }
  else if(downs === rowcol-1 && rights <rowcol-1){
    // if downs is 9 add
      instr += 'r';
      rights++;
      ball.x+= sz;
  }
  else{
   
    //reset
    background(0, 50);
    clr = color(random(255),random(255),random(255));
    showlatt();
    rights = 0;
    downs =0;
    ball.x = 0;
    ball.y = 0;
    instr =""

  }
  //text(instr, width/2,height/2);
  mypara.html("Path: "+instr);
  fill(clr);
  rect(ball.x,ball.y,sz,sz);
}



function showlatt(){
	stroke(0,255,0,100);
	for(let j =0; j<height; j+=sz){   // height and width are the same
		for (let i = 0; i <width; i+=sz){
			noFill();
			rect(i,j,sz,sz)
		}
	}
}


 



 
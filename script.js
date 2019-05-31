let bx = 200;
let by = 550;
let br = 50;
let vx = 6;
let vy = 7;
let px = 300;
let py = 775;
let pw = 200;
let ph = 25;
let block = [];

function setup() {
  createCanvas(1000, 800);
  fill("teal");
  noStroke();
  makeBricks();
}

function draw() {
  background("black");
  ballMove();
  paddleMove();
  interact();
  printBricks();
  ellipse(bx, by, br, br);
  rect(px, py, pw, ph);
  checkCollision();
  victory();
  }

function ballMove() {
  by = by + vy;
  bx = bx + vx;
  if (bx  + 25 >= 1000) {
    vx = -vx;
  }
  if (bx - 25 <= 0) {
    vx = -vx;
  }
  if (by - 25 <= 0) {
    vy = -vy;
  }
}

function paddleMove() {
  if (keyIsDown(LEFT_ARROW)) {
    px -= 7;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    px += 7;
  }
}

function interact() {
  if (bx > px && bx < px + pw && by >= py){
    vy = -vy;
  }
    if (by >= height) {
      textSize(50);
      textAlign(CENTER);
   text("You Lose!", 500, 400);
    noLoop();
  }
}

function makeBricks() {
  for (let i = 0; i < 30; i++) {
  blocks = {
    x: random(0, width),
    y: random(0, height - 550)
  };
  block.push(blocks);
  }
}

function printBricks() {
  for (let blocks of block) {
  rect(blocks.x, blocks.y, 50, 50);
  }
}

function checkCollision() {
  for(let i = block.length - 1; i >= 0; i--) {
    if(bx >= block[i].x && bx <= block[i].x + 50 && by - br <= block[i].y + 50 && by - br >= block[i].y) {
      block.splice(i , 1);
      vy = -vy;
      return;
    }
    if(bx >= block[i].x && bx <= block[i].x + 50 && by + br <= block[i].y + 50 && by + br >= block[i].y) {
      block.splice(i , 1);
      vy = -vy;
      return;
  }
  if(by >= block[i].y && by <= block[i].y + 50 && bx - br <= block[i].x + 50 && bx - br >= block[i].x) {
      block.splice(i , 1);
      vx = -vx;
      return;
  }
  if(by >= block[i].y && by <= block[i].y + 50 && bx + br <= block[i].x + 50 && bx + br >= block[i].x) {
     block.splice(i , 1);
     vx = -vx;
      return;
  }
  }
}

function victory() {
  if(block.length == 0){
    textSize(50);
    textAlign(CENTER);
    text("You Win!", 500, 400);
    noLoop();
  }
}
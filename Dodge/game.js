var isGameOver;
var player;
var playerImage;
var enemy;
var enemyImage;
var backgroundImage;

function preload() {
  playerImage = loadImage("https://i.redd.it/h2wfn7uku4hy.jpg/");
  enemyImage = loadImage("http://4.bp.blogspot.com/_B5E5HPIKKBY/TCgENnaXouI/AAAAAAAAAZs/JHip18_p03M/s320/Screen+shot+2010-06-27+at+10.08.28+PM.png");
  backgroundImage = loadImage("http://i0.kym-cdn.com/entries/icons/original/000/021/862/lucioano.jpg");
}

function setup() {
  isGameOver = false;
  createCanvas(256, 256);
  player = createSprite(width / 2, height - (playerImage.height / 2), 0, 0);
  player.addImage(playerImage);
  enemy = createSprite(width / 2, 0, 0, 0);
  enemy.addImage(enemyImage);
  enemy.rotationSpeed = 4.0;
}

function draw() {
  if (isGameOver) {
    gameOver();
  } else {
    if (enemy.overlap(player)) {
      isGameOver = true;
    }
    background(backgroundImage);
    if (keyDown(RIGHT_ARROW) && player.position.x < (width - (playerImage.width / 2))) {
      player.position.x += 2;
    }
    if (keyDown(LEFT_ARROW) && player.position.x > (playerImage.width / 2)) {
      player.position.x -= 2;
    }
    enemy.position.y = enemy.position.y + 3;
    if (enemy.position.y > height) {
      enemy.position.y = 0;
      enemy.position.x = random(5, width - 5);
    }
    drawSprites();
  }
}

function gameOver() {
  background(0);
  textAlign(CENTER);
  fill("white");
  text("Game Over!", width / 2, height / 2);
  text("Click anywhere to try again", width / 2, 3 * height / 4);
}

function mouseClicked() {
  isGameOver = false;
  player.position.x = width / 2;
  player.position.y = height - (playerImage.height / 2);
  enemy.position.x = width / 2;
  enemy.position.y = 0;
}
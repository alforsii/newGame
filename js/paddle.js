class Paddle {
  constructor(game) {
    this.game = game;
    this.width = 150;
    this.height = 30;
    this.pos = {
      x: this.game.width / 2 - this.width / 2,
      y: this.game.height - this.height - 5,
    };
    this.maxSpeed = 10;
    this.speed = 0;
    this.id;
  }

  drawPaddle() {
    this.game.ctx.fillStyle = '#0f0';
    this.game.ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
    this.game.ctx.fill();
  }

  update(deltaTime) {
    if (!deltaTime) return;
    this.pos.x += 5 / deltaTime;
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
    this.pos.x += this.speed;
  }
  moveRight() {
    this.speed = this.maxSpeed;
    this.pos.x += this.speed;
  }
}

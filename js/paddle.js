class Paddle {
  constructor(game) {
    this.game = game;
    this.width = 150;
    this.height = 30;
    this.pos = {
      x: this.game.width / 2 - this.width / 2,
      y: this.game.height - this.height - 5,
    };
    this.maxSpeed = 50;
    this.speed = 0;
    this.id;
  }

  drawPaddle() {
    this.game.ctx.fillStyle = '#0f0';
    this.game.ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
    this.game.ctx.fill();
  }

  moveLeft() {
    const leftId = setInterval(() => {
      this.speed = -this.maxSpeed;
      this.pos.x += this.speed;
      if (this.pos.x + this.width / 2 < 0) {
        clearInterval(leftId);
        this.pos.x = 5;
      }
    }, 100);
  }
  moveRight() {
    const rightId = setInterval(() => {
      this.speed = this.maxSpeed;
      this.pos.x += this.speed;
      if (this.pos.x + this.width / 2 > 800) {
        clearInterval(rightId);
        this.pos.x = 800 - this.width - 5;
      }
    }, 100);
  }
}

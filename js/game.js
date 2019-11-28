class Game {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.paddle = new Paddle(this);
    new InputHandler(this);
  }

  gameLoop() {
    setInterval(() => {
      this.clear();
      this.paddle.drawPaddle();
    }, 1000 / 60);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}

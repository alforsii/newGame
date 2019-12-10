class Paddle {
  constructor(game) {
    this.game = game;
    this.width = 150;
    this.height = 30;
    this.pos = {
      x: this.game.width / 2 - this.width / 2,
      y: this.game.height - this.height - 5,
    };
    this.vx = 0;
    this.controller = { left: false, right: false };
  }

  drawPaddle() {
    if (this.controller.left) {
      this.vx -= 1;
    }
    if (this.controller.right) {
      this.vx += 1;
    }
    this.pos.x += this.vx;
    this.vx *= 0.9;

    this.game.ctx.fillStyle = '#0f0';
    this.game.ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
    this.game.ctx.fill();
  }

  keyListener() {
    document.addEventListener('keydown', event => {
      const key = event.keyCode;
      const keyStatus = event.type === 'keydown' ? true : false;
      event.preventDefault();
      if (key === 37) {
        this.controller.left = keyStatus;
      }
      if (key === 39) {
        this.controller.right = keyStatus;
      }
    });
    document.addEventListener('keyup', event => {
      const key = event.keyCode;
      const keyStatus = event.type === 'keyup' ? false : true;
      event.preventDefault();
      if (key === 37) {
        this.controller.left = keyStatus;
      }
      if (key === 39) {
        this.controller.right = keyStatus;
      }
    });
  }
}

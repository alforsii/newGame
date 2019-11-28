class Game {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.paddle = new Paddle(this);
    new InputHandler(this);
    this.start = null;
    window.requestAnimationFrame(this.gameLoop);
    // requestAnimationFrame(this.gameLoop);
  }

  gameLoop(timeStamp) {
    if (!start) this.start = timestamp;
    let deltaTime = timeStamp - start;

    this.clear();
    this.paddle.update(deltaTime);
    this.paddle.drawPaddle();
    window.requestAnimationFrame(this.gameLoop);
  }

  //  step(timestamp) {
  //     if (!start) start = timestamp;
  //     var progress = timestamp - start;
  //     element.style.transform = 'translateX(' + Math.min(progress / 10, 200) + 'px)';
  //     if (progress < 2000) {
  //       window.requestAnimationFrame(step);
  //     }
  //   }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}

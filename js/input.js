class InputHandler {
  constructor(game) {
    this.game = game;
    document.addEventListener('keydown', event => {
      const key = event.keyCode;
      event.preventDefault();
      if (key === 37) {
        this.game.paddle.moveLeft();
      }
      if (key === 39) {
        this.game.paddle.moveRight();
      }
    });
  }
}

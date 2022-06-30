const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

const image = new Image();
image.src = './assets/PelletTown.png';

const fieldImage = new Image();
fieldImage.src = './assets/farmland.png';

const playerDownImage = new Image();
playerDownImage.src = './assets/playerDown.png';
const playerUpImage = new Image();
playerUpImage.src = './assets/playerUp.png';
const playerLeftImage = new Image();
playerLeftImage.src = './assets/playerLeft.png';
const playerRightImage = new Image();
playerRightImage.src = './assets/playerRight.png';

class Sprite {
  constructor({ position, image, frames = { max: 1 }, sprites }) {
    this.position = position;
    this.image = image;
    this.frames = { ...frames, val: 0, elapsed: 0 };

    this.image.onload = () => {
      this.width = this.image.width / this.frames.max;
      this.height = this.image.height;
    };
    this.moving = false;
    this.sprites = sprites;
  }

  draw() {
    c.drawImage(
      this.image,
      this.frames.val * this.width,
      0,
      this.image.width / this.frames.max,
      this.image.height,
      this.position.x,
      this.position.y,
      this.image.width / this.frames.max,
      this.image.height
    );

    if (this.moving) {
      if (this.frames.max > 1) {
        this.frames.elapsed++;
      }
      if (this.frames.elapsed % 10 === 0) {
        if (this.frames.val < this.frames.max - 1) this.frames.val++;
        else this.frames.val = 0;
      }
    }
  }
}

const background = new Sprite({
  position: {
    x: -785,
    y: -650,
  },
  image: image,
});

const field = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  image: fieldImage,
});

const player = new Sprite({
  position: {
    x: 400,
    y: 300,
  },
  image: playerDownImage,
  frames: {
    max: 4,
    //  hold: 10
  },
  sprites: {
    up: playerUpImage,
    left: playerLeftImage,
    right: playerRightImage,
    down: playerDownImage,
  },
});

const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
};

function animate() {
  window.requestAnimationFrame(animate);
  background.draw();
  player.draw();
  field.draw();

  player.moving = false;

  if (keys.w.pressed && lastKey === 'w') {
    background.position.y += 3;
    player.moving = true;
    player.image = player.sprites.up;
  } else if (keys.a.pressed && lastKey === 'a') {
    background.position.x += 3;
    player.moving = true;
    player.image = player.sprites.left;
  } else if (keys.s.pressed && lastKey === 's') {
    background.position.y -= 3;
    player.moving = true;
    player.image = player.sprites.down;
  } else if (keys.d.pressed && lastKey === 'd') {
    background.position.x -= 3;
    player.moving = true;
    player.image = player.sprites.right;
  }
}

animate();

let lastKey = '';
window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'w':
      keys.w.pressed = true;
      lastKey = 'w';
      break;
    case 'a':
      keys.a.pressed = true;
      lastKey = 'a';
      break;

    case 's':
      keys.s.pressed = true;
      lastKey = 's';
      break;

    case 'd':
      keys.d.pressed = true;
      lastKey = 'd';
      break;
  }
});

window.addEventListener('keyup', (e) => {
  switch (e.key) {
    case 'w':
      keys.w.pressed = false;
      break;
    case 'a':
      keys.a.pressed = false;
      break;
    case 's':
      keys.s.pressed = false;
      break;
    case 'd':
      keys.d.pressed = false;
      break;
  }
});

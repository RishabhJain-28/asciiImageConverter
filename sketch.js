// Image to ASCII
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/166-ascii-image.html
// https://youtu.be/55iwMYv8tGI

// ASCII video: https://editor.p5js.org/codingtrain/sketches/KTVfEcpWx
// ASCII image canvas: https://editor.p5js.org/codingtrain/sketches/r4ApYWpH_
// ASCII image DOM: https://editor.p5js.org/codingtrain/sketches/ytK7J7d5j
// ASCII image source text: https://editor.p5js.org/codingtrain/sketches/LNBpdYQHP
// ASCII image weather API: https://editor.p5js.org/codingtrain/sketches/DhdqcoWn4

// const density = "Ñ@#W$9876543210?!abc;:+=-,._";
// const density = "Ñ@#W$9876543210?!abc;:+=-,._ ";
const density =
  "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,\"^`'. ";
let img;

function preload() {
  // img = loadImage("gloria48.jpg");
  // img = loadImage("test11.jpg");
  // img = loadImage("t1.jpeg");
  // img = loadImage("t1.jpg");
  // img = loadImage("base.jpg");
  // img = loadImage("oldWallpapers/yey.jpg");
  // img = loadImage("yey.jpg");
  // img = loadImage("z1.jp/g");
  // img = loadImage("x5.jpeg");
  img = loadImage("hehe/r1-c.jpg");
}

function setup() {
  // const c = createCanvas(960, 1280);
  const c = createCanvas(3456, 4608);
  // const c = createCanvas(1920, 1080);
  // const c = createCanvas(4000, 3000);
  // const c = createCanvas(7680, 4320);
  button = createButton("click me");
  button.position(0, 0);
  button.mousePressed(() => {
    saveCanvas(c, "myCanvas", "jpg");
  });
  // createCanvas(1000, 1000);
  // function changeBG() {
  //   let val = random(255);
  //   background(val);
  // }
  noLoop();
  // img.resize(175, 175);
  img.resize(150, 150);
}

function draw() {
  background(0);
  // image(img, 0, 0);

  let w = width / img.width;
  let h = height / img.height;
  img.loadPixels();
  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      const pixelIndex = (i + j * img.width) * 4;
      const R = img.pixels[pixelIndex + 0];
      const G = img.pixels[pixelIndex + 1];
      const B = img.pixels[pixelIndex + 2];
      const avg = (R + G + B) / 3;
      // const avg = (R * 1.1 + G * 1 + B * 1.5) / 3;
      // const avg = 0.291 * R + 0.587 * G + 0.114 * B;
      // const avg = 0.3 * R + 0.32 * G + 0.37 * B;
      noStroke();
      const MUL = 1;
      fill(R * MUL, G * MUL, B * MUL);
      // fill(`rgba(${R},${G},${B}, 1)`);
      // fill(255);
      //square(i * w, j * h, w);

      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, len, 0));

      textSize(w);
      textAlign(CENTER, CENTER);
      text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5);
    }
  }
}

function download() {
  var imageData = canvas
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream"); // here is the most important part because if you dont replace you will get a DOM 18 exception.

  window.location.href = imageData; // it will save locally
}

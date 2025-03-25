const sWeek4 = (p) => {
  let cols, rows;
  let size = 10;
  let t = 0;
  let speed = 0.03;

  p.setup = () => {
    let cnv = p.createCanvas(p.windowWidth, p.windowHeight);
    cnv.parent("sketch4");
    p.colorMode(p.HSB);
    cols = p.width / size;
    rows = p.height / size;
  };

  p.draw = () => {
    p.background(0);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i * size + size / 2;
        let y = j * size + size / 2;
        let d = p.dist(x, y, p.width / 2, p.height / 2);
        let modValue = p.floor(d / 3 + t) % 3;

        let hueVal = p.map(d, 0, p.width / 2, 200, 360);
        let brightness = p.map(d, 0, p.width / 2, 100, 40);
        p.fill(hueVal, 100, brightness);
        p.noStroke();

        if (modValue == 0) {
          p.rect(x - size / 4, y - size / 4, size / 2, size / 2);
        } else {
          p.ellipse(x, y, size / 3);
        }
      }
    }

    t += speed;
  };
};

new p5(sWeek4);

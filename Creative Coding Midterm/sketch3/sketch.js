const sWeek5 = (p) => {
  let size = 8;
  let t = 0;
  let speed = 0.05;

  p.setup = () => {
    let cnv = p.createCanvas(p.windowWidth, p.windowHeight);
    cnv.parent("sketch3");
    p.colorMode(p.HSB);
    p.noStroke();
  };

  p.draw = () => {
    p.background(0);
    let cols = p.width / size;
    let rows = p.height / size;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = (i + 0.5) * size;
        let y = (j + 0.5) * size;
        let distFromCenter = p.dist(x, y, p.width / 2, p.height / 2);
        let dfcMod = p.floor(distFromCenter / 2 + t) % 5;

        let hue = p.map(distFromCenter, 0, p.width / 2, 0, 360);
        let brightness = p.map(distFromCenter, 0, p.width / 2, 70, 100);

        p.fill(hue, 100, brightness);
        p.push();
        p.translate(x, y);

        if (dfcMod === 0) {
          p.ellipse(0, 0, size * 0.5);
        } else if (dfcMod === 1) {
          p.stroke(hue, 100, brightness);
          p.strokeWeight(0.5);
          p.line(-size / 4, 0, size / 4, 0);
          p.line(0, -size / 4, 0, size / 4);
          p.noStroke();
        } else if (dfcMod === 2) {
          p.rectMode(p.CENTER);
          p.rect(0, 0, size * 0.4, size * 0.4);
        } else if (dfcMod === 3) {
          p.triangle(-size / 4, size / 4, size / 4, size / 4, 0, -size / 4);
        } else {
          p.rect(0, 0, size * 0.5, size * 0.5);
        }

        p.pop();
      }
    }

    t += speed * 1.5;
  };
};

new p5(sWeek5);

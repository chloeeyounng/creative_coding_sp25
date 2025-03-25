const sSketch5 = (p) => {
  let cellSize = 20;
  let t = 0;
  let speed = 0.005;

  p.setup = () => {
    let cnv = p.createCanvas(p.windowWidth, p.windowHeight);
    cnv.parent("sketch5");
    p.colorMode(p.HSB, 360, 100, 100);
    p.noStroke();
  };

  p.draw = () => {
    p.background(0, 0, 20);
    let cols = p.floor(p.width / cellSize);
    let rows = p.floor(p.height / cellSize);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = (i + 0.5) * cellSize;
        let y = (j + 0.5) * cellSize;
        let noiseVal = p.noise(i * 0.1, j * 0.1, t);
        let shapeType = p.floor(p.map(noiseVal, 0, 1, 0, 4));
        let size = cellSize * p.map(noiseVal, 0, 1, 0.5, 1);
        let hue = p.map(noiseVal, 0, 1, 0, 360);

        p.push();
        p.translate(x, y);
        p.rotate(noiseVal * p.PI);
        p.fill(hue, 80, 100);

        if (shapeType === 0) {
          p.ellipse(0, 0, size);
        } else if (shapeType === 1) {
          p.rectMode(p.CENTER);
          p.rect(0, 0, size, size);
        } else if (shapeType === 2) {
          p.triangle(-size / 2, size / 2, 0, -size / 2, size / 2, size / 2);
        } else {
          p.stroke(0, 0, 100);
          p.strokeWeight(1);
          p.line(-size / 2, 0, size / 2, 0);
          p.line(0, -size / 2, 0, size / 2);
          p.noStroke();
        }

        p.pop();
      }
    }

    t += speed;
  };
};

new p5(sSketch5);

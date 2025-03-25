const sWeek2 = (p) => {
  let columns = 10;
  let rows = 10;
  let grid = [];

  p.setup = () => {
    let cnv = p.createCanvas(p.windowWidth, p.windowHeight);
    cnv.parent("sketch2");

    let w = p.width / columns;
    let h = p.height / rows;

    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        grid.push({ x: i * w, y: j * h, w, h, color: 100 });
      }
    }
  };

  p.draw = () => {
    p.background(0);

    grid.forEach((cell) => {
      let d = p.dist(
        p.mouseX,
        p.mouseY,
        cell.x + cell.w / 2,
        cell.y + cell.h / 2
      );
      cell.color = p.map(d, 0, p.width, 255, 50);

      p.fill(cell.color);
      p.rect(cell.x, cell.y, cell.w, cell.h);
    });
  };
};

new p5(sWeek2);

const sWeek1 = (p) => {
  let capture;
  let capimg;

  p.setup = () => {
    let cnv = p.createCanvas(p.windowWidth, p.windowHeight);
    cnv.parent("sketch1");
    p.pixelDensity(1);
    p.background(100);

    capture = p.createCapture(p.VIDEO);
    capture.size(640, 480);
    capture.hide();
  };

  p.draw = () => {
    capimg = capture.get();

    if (capimg.width > 0) {
      capimg.loadPixels();

      for (let i = 0; i < capimg.pixels.length; i += 4) {
        let r = capimg.pixels[i + 0];
        let g = capimg.pixels[i + 1];
        let b = capimg.pixels[i + 2];

        capimg.pixels[i + 0] = p.mouseX;
        capimg.pixels[i + 1] = g;
        capimg.pixels[i + 2] = p.mouseY;
      }

      capimg.updatePixels();
      p.image(capimg, 0, 0, p.width, p.height);
    }
  };
};

new p5(sWeek1);

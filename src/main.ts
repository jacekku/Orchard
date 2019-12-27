import * as p5 from 'p5'
import { Tree } from './tree';
import { GameObjectHandler } from './gameObjectHandler';
import { GraphicsHandler } from './graphicsHandler';

const sketch = (p: p5) => {
  let buffer: p5.Graphics;

  p.preload = () => {
      GraphicsHandler.instance.loadImages(p)
  }

  p.setup = () => {
    p.createCanvas(600, 600)
    buffer = p.createGraphics(p.width, p.height);
    buffer.noSmooth()
    const t = new Tree(100, 100)
  }

  p.draw = () => {
    p.background(128)
    GameObjectHandler.instance.tick()
    GameObjectHandler.instance.show(buffer)
    p.image(buffer, 0, 0)
  }
}

new p5(sketch)
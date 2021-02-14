import * as p5 from "p5";
import setup from "./mains/Setup";
import draw from "./mains/Draw";
import GameController from "./GameController";
import { keyPressed, preload, mouseClicked } from "@jacekku/library";

const sketch = (p: p5) => {
  let buffer: p5.Graphics = null;

  p.preload = () => preload(p);
  p.setup = () => (buffer = setup(p, buffer));
  p.draw = () => draw(p, buffer);
  p.mouseClicked = (event: MouseEvent) => mouseClicked(event);
  p.keyPressed = () => keyPressed(p);
  new GameController(-1000, -1000);
};
new p5(sketch);

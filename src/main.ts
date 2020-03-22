import * as p5 from 'p5'
import { preload } from './mains/Preload'
import { setup } from './mains/Setup'
import { draw } from './mains/Draw'
import { mouseClicked, keyPressed } from './mains/Input'
import { ExtendedEvent } from './enums/ExtendedEvent'

const sketch = (p: p5) => {
  let buffer: p5.Graphics = null;

  p.preload = () => preload(p)
  p.setup = () => buffer = setup(p, buffer)
  p.draw = () => draw(p, buffer)
  p.mouseClicked = (event: Event) => mouseClicked(event)
  p.keyPressed = () => keyPressed(p)
}

new p5(sketch)
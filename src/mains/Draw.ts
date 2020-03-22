import * as p5 from 'p5'
import { GameObjectHandler } from '../GameObjectHandler'



export function draw(p: p5, buffer: p5.Graphics) {
    p.background(128)
    GameObjectHandler.instance.tick()
    GameObjectHandler.instance.show(buffer)
    p.image(buffer, 0, 0)
}
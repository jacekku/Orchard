import { GameObject } from './GameObject'
import * as p5 from 'p5'
import { GraphicsHandler } from './graphicsHandler'

export class Tree extends GameObject {
    constructor(x: number, y: number) {
        super(x, y)
    }


    show(p: p5) {
        const img: p5.Image = GraphicsHandler.instance.getImage('asdf')
        p.image(img, this.x, this.y)
    }
}
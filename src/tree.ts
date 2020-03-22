import * as p5 from 'p5'
import { GraphicsHandler } from './GraphicsHandler'
import { GameObject } from './GameObject'

export class Tree extends GameObject {
    growthStage: number

    constructor(x: number, y: number) {
        super(x, y)
        this.growthStage = 0
    }

    show(p: p5) {
        const img: p5.Image = GraphicsHandler.instance.getImage('oak_tree', this.growthStage)
        p.image(img, this.x, this.y)
    }
    tick(){
        super.tick()
        if (this.age % 100 === 0 && this.growthStage < 9) {
            this.growthStage += 1 
        }
    }
}
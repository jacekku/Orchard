import { GameObjectHandler } from './gameObjectHandler'
import p5 = require('p5')

export class GameObject {
    x: number
    y: number
    age: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.age = 0
        GameObjectHandler.instance.addObject(this)
    }

    show(p: p5.Graphics) {
        p.rect(this.x, this.y, 16, 16)
    }
    tick() {
        this.age += 1
    }
}
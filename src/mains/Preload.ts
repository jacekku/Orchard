import * as p5 from 'p5'
import { GraphicsHandler } from '../GraphicsHandler'

export function preload(p: p5) {
    GraphicsHandler.instance.loadImages(p)
}
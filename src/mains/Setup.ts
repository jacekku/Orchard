import * as p5 from 'p5'
import { Tree } from '../Tree';
import { Player } from '../Player';

export function setup(p: p5, buffer: p5.Graphics): p5.Graphics {
    p.createCanvas(512, 512)
    buffer = p.createGraphics(p.width, p.height);
    buffer.noSmooth()
    return buffer
}
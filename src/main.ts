import p5 = require('p5')

const sketch = (p: p5) => {
    p.setup = () => {
      p.createCanvas(600,600)
    }

    p.draw = () => {
      p.background(128)
    }
}


new p5(sketch)


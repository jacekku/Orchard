import * as p5 from 'p5'

export class GraphicsHandler {

    private static singleton: GraphicsHandler
    private images: p5.Image[]

    loadImages(p: p5) {
        this.images = [p.loadImage('../assets/oak_sheet.png')]
    }

    getImage(name: string, stage?: number): p5.Image {
        return this.images[0]
    }

    static get instance(): GraphicsHandler {
        if (!GraphicsHandler.singleton) {
            GraphicsHandler.singleton = new GraphicsHandler()
        }
        return GraphicsHandler.singleton
    }
}
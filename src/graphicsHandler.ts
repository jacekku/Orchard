import * as p5 from 'p5'
import { StagableImage, StagableImageConfiguration } from './stagableImage'

export class GraphicsHandler {

    private static singleton: GraphicsHandler
    private images: StagableImage[]

    constructor() {
        this.images = []
    }

    loadImages(p: p5) {
        p.loadJSON('../assets/images/images.json', (json: any) => this.handleJSON(json, p))
    }

    private handleJSON(json: any, p: p5) {
        json.images.forEach((config: StagableImageConfiguration) => this.loadImage(config, p))
    }

    private loadImage(configuration: StagableImageConfiguration, p: p5) {
        p.loadImage(configuration.file, loadedImage => this.addImage(loadedImage, configuration))
    }
    private addImage(image: p5.Image, configuration: StagableImageConfiguration) {
        this.images.push(new StagableImage(image, configuration))
    }

    getImage(name: string, stage: number = 0): p5.Image {
        const img = this.tryGetImage(name)
        return img ? img.getStage(stage) : this.tryGetImage('no_texture').images[0]
    }

    private tryGetImage(name:string) {
        return this.images.find(img => img.name === name)
    }


    static get instance(): GraphicsHandler {
        if (!GraphicsHandler.singleton) {
            GraphicsHandler.singleton = new GraphicsHandler()
        }
        return GraphicsHandler.singleton
    }
}
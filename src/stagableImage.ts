import p5 = require("p5");

export class StagableImage {
	name: string
	stages: number
	stageWidth: number
	stageHeight: number
	image: p5.Image
	images: p5.Image[]

	constructor(wholeImage: p5.Image, configuration: StagableImageConfiguration) {
		this.name = configuration.name
		this.image = wholeImage
		this.stages = configuration.stages
		this.stageWidth = configuration.stageWidth
		this.stageHeight = configuration.stageHeight
		this.images = []
		this.generateImages()
	}
	private generateImages() {
		for (let x = 0; x < this.stages; x++) {
			this.images.push(
				this.image.get(x * this.stageWidth, 0, this.stageWidth, this.stageHeight)
			)
		}
	}
	getStage(stage: number): p5.Image {
        return this.images[stage % this.stages]
    }
}

export interface StagableImageConfiguration {
	stages: number
	stageWidth: number
	stageHeight: number
	name: string
	file: string
}
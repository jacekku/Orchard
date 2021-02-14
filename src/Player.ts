import {
    GameEventListener, InputHandler, GameObject,
    EventType, ExtendedEvent
} from "@jacekku/library";

export default class Player extends GameObject implements GameEventListener {

    private movementSpeed: number = 1

    events: EventType[] = [
        EventType.KeyPressed
    ]

    constructor(x: number, y: number) {
        super(x, y)
        InputHandler.instance.register(EventType.KeyPressed, this)
    }


    eventFired(event: ExtendedEvent): void {
        console.log(event.key)
        if (event.key == 'w') this.y -= this.movementSpeed
        if (event.key == 's') this.y += this.movementSpeed
        if (event.key == 'a') this.x -= this.movementSpeed
        if (event.key == 'd') this.x += this.movementSpeed

    }
}


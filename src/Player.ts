import { GameObject } from "./GameObject";
import { GameEventListener, InputHandler } from "./InputHandler";
import { EventType } from "./enums/EventType";
import { ExtendedEvent } from "./enums/ExtendedEvent";

export class Player extends GameObject implements GameEventListener {

    events: EventType[] = [
        EventType.KeyPressed
    ]

    constructor(x:number,y:number){
        super(x,y)
        InputHandler.instance.register(EventType.KeyPressed, this)
    }

    
    eventFired(event: ExtendedEvent): void {
        switch (event.key){
            case 'w': 
                this.y -= 16
                break
            case 's':
                this.y += 16
                break
            case 'a': 
                this.x -= 16
                break
            case 'd':
                this.x += 16
                break
            default:break;
        }
    }
}


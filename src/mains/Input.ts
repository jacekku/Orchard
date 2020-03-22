import * as p5 from 'p5'
import { EventType } from '../enums/EventType'
import { InputHandler } from '../InputHandler'
import { ExtendedEvent } from '../enums/ExtendedEvent'


export function mouseClicked(event: Event) {
    const extendedEvent: ExtendedEvent = ExtendedEvent.builder()
        .event(event)
        .eventType(EventType.MousePressed)
        .build()
    InputHandler.instance.fireEvent(extendedEvent)
}

export function keyPressed(p: p5) {
    const event: ExtendedEvent = ExtendedEvent.builder()
        .eventType(EventType.KeyPressed)
        .key(p.key)
        .build()
    InputHandler.instance.fireEvent(event)
}
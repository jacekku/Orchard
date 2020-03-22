import { EventType } from "./EventType"

export class ExtendedEvent {
    constructor(event?: Event, key?: string, eventType?: EventType) {
        this.event = event
        this.key = key
        this.eventType = eventType
    }
    readonly event: Event
    readonly key: string
    readonly eventType: EventType
    static builder() {
        return new ExtendedEventBuilder()
    }
}

class ExtendedEventBuilder {
    private _event: Event
    private _key: string
    private _eventType: EventType
    event(event: Event) {
        this._event = event
        return this
    }
    key(key: string) {
        this._key = key
        return this
    }
    eventType(eventType: EventType) {
        this._eventType = eventType
        return this
    }
    build() {
        return new ExtendedEvent(this._event, this._key, this._eventType)
    }
}
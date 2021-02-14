import * as p5 from "p5";
import {
  GameObjectHandler,
  InputHandler,
  ExtendedEvent,
  EventType,
} from "@jacekku/library";

export default function draw(p: p5, buffer: p5.Graphics) {
  GameObjectHandler.instance.tick();
  GameObjectHandler.instance.show(buffer);
  p.image(buffer, 0, 0);
}

import {GameObject} from './gameObject'
import p5 = require('p5');

export class GameObjectHandler {
    private objects: GameObject[] = [];
    private static singleton: GameObjectHandler;

    private constructor(){}

    addObject(object:GameObject){
        this.objects.push(object)
    }
    removeObject(object:GameObject){
        this.objects = this.objects.filter(obj => obj !== object)
    }
    show(p: p5.Graphics){
        this.objects.forEach(obj => {
            obj.show ? obj.show(p) : null
        });
    }
    tick(){
        this.objects.forEach(obj => {
            obj.show ? obj.tick() : null
        })
    }

    static get instance(){
        if(!GameObjectHandler.singleton){
            GameObjectHandler.singleton = new GameObjectHandler()
        }
        return GameObjectHandler.singleton
    }
    
}
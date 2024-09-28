import { TODOLIST2 } from "./adatok.js"

export default class TablazatModell{
    #lista=[]
    constructor(){
        this.#lista=TODOLIST2
        console.log("modell",this.#lista)
    }
    getList(){
        return this.#lista
    }

    torles(index){
        //az adott indexű helyről töröl egy elemet
        this.#lista.splice(index,1)
    }
}
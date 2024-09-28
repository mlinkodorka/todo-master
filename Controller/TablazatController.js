import TablazatModell from "../Modell/TablazatModell.Js"
import TablazatMegjelenit from "../View/TablazatMegjelenit.js"

export default class TablazatController{
    constructor(){
        //példányosítja a view-t és a modellt
        this.tModell = new TablazatModell()
        const lista=this.tModell.getList()
        console.log("controller", lista)
        this.tMegjelenit = new TablazatMegjelenit(lista, $(".tarolo"));
        this.torlesEsemeny()
    }

    torlesEsemeny(){
        $(window).on("torles",(event)=>{
            console.log(event.detail)
            let index=event.detail.id
            this.tModell.torles(index)
            const lista=this.tModell.getList()
            this.tMegjelenit=new TablazatMegjelenit(lista,$(".tarolo"))
        })
    }
}
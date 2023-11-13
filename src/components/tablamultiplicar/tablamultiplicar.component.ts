import { Component, ViewChild, ElementRef } from "@angular/core";
@Component({
    selector: "app-tabla-multiplicar",
    templateUrl: "./tablamultiplicar.component.html",
    styleUrls: []
})

export class TablaMultiplicarComponent {
    @ViewChild("cajanumero") cajanumero!: ElementRef;
    public num!: number;
    public operaciones!: Array<number>;
    constructor(){
        this.operaciones=[1,2,3,4,5,6,7,8,9,10];
    }
    crearTabla() {
        this.num=this.cajanumero.nativeElement.value;
    }
}
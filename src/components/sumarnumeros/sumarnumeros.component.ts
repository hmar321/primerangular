import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
    selector: "app-sumar-numeros",
    templateUrl: "./sumarnumeros.component.html",
    styleUrls: ["./sumarnumeros.component.css"]
})

export class SumarNumerosComponent {
    //DECLARAMOS VARIABLES QUE HACEN REFERENCIA AL
    //ID DE ANGULAR DE LOS CONTROLES HTML
    @ViewChild("cajanumero1") cajanumero1!: ElementRef;
    @ViewChild("cajanumero2") cajanumero2!: ElementRef;
    public suma!: number;

    //EN ANGULAR TODAS LA PROPIEDADES DEBEN SER INSTANCIADAS/INICIALIZADAS
    //CON UN VALOR.
    //LOS OBJETOS DE REFERENCIA DEBEN INDICAR QUE SON UN NUEVO OBJETO Y 
    //UN VALOR POR DEFECTO PARA DICHO OBJETO
    //objectRef=new ElementRef(valor por defecto);
    constructor() {
        // this.suma = 0;
        // this.cajanumero1 = new ElementRef(0);
        // this.cajanumero2 = new ElementRef(0);
    }

    sumarNumeros(): void {
        var num1 = parseInt(this.cajanumero1.nativeElement.value);
        var num2 = parseInt(this.cajanumero2.nativeElement.value);
        this.suma = num1 + num2;
    }
}
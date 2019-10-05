import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.page.html",
  styleUrls: ["./formulario.page.scss"]
})
export class FormularioPage implements OnInit {
  tipoAcidente: String;
  tipoVeiculoI: String;
  tipoVeiculoV: String;
  airbag: String;
  capacete: String;
  cinto: String;
  constructor() {}

  ngOnInit() {
    this.tipoAcidente = "0";
    this.airbag = "0";
    this.capacete = "0";
    this.cinto = "0";
  }

  sendForm() {
    console.log(this.tipoAcidente);
  }
}

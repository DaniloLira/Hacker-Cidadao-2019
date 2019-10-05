import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

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
  constructor(private router: Router) {}

  ngOnInit() {
    this.tipoAcidente = "0";
    this.airbag = "0";
    this.capacete = "0";
    this.cinto = "0";
  }

  navigateToLocation() {
    this.router.navigateByUrl("/tabs/localizacao");
  }

  navigateToVictim() {
    this.router.navigateByUrl("/tabs/vitimas");
  }
}

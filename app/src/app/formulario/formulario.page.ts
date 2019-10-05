import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SqliteService } from "../sqlite.service";
import { Storage } from "@ionic/storage";

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
  idAcidente: number;
  constructor(
    private router: Router,
    private sql: SqliteService,
    private storage: Storage
  ) {}

  ngOnInit() {
    this.tipoAcidente = "0";
    this.airbag = "0";
    this.capacete = "0";
    this.cinto = "0";
    this.storage.get("idAcidente").then(val => {
      if (val) {
        this.idAcidente = val;
        this.sql.getRows("acidente", val);
      }
    });
  }

  saveData() {
    this.sql.insertRow("acidente", {
      idAcidente: this.idAcidente,
      tipoAcidente: this.tipoAcidente,
      tipoVeiculoInfra: this.tipoVeiculoI,
      tipoVeiculoVit: this.tipoVeiculoV,
      airbag: this.airbag,
      capacete: this.capacete,
      cinto: this.cinto
    });
  }

  navigateToLocation() {
    this.saveData();
    this.router.navigateByUrl("/tabs/localizacao");
  }

  navigateToVictim() {
    this.saveData();
    this.router.navigateByUrl("/tabs/vitimas");
  }
}

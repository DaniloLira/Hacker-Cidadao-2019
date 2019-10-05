import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import { ApiService } from "./../api.service";
import { AlertController } from '@ionic/angular';

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
    private storage: Storage,
    private apiService: ApiService,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.tipoAcidente = "0";
    this.airbag = "0";
    this.capacete = "0";
    this.cinto = "0";
  }

  navigateToLocation() {
    this.post();
    this.router.navigateByUrl("/tabs/localizacao");
  }

  navigateToVictim() {
    this.post();
    this.presentAlert();
    this.router.navigateByUrl("/tabs/vitimas");
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Sucesso',
      subHeader: 'Acidente adicionado',
      buttons: ['OK']
    });

    await alert.present();
  }

  async post() {
    let resp = await this.apiService.criaFormulario(
      this.tipoAcidente,
      this.tipoVeiculoI,
      this.tipoVeiculoV,
      this.airbag,
      this.capacete,
      this.cinto
    );
    this.storage.set("idAcidente", resp);
  }


}

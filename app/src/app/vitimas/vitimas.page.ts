import { Component, OnInit } from '@angular/core';
import { ApiService } from "./../api.service";
import { Storage } from "@ionic/storage";
import { AlertController } from '@ionic/angular';
import { Router } from "@angular/router";

@Component({
  selector: 'app-vitimas',
  templateUrl: './vitimas.page.html',
  styleUrls: ['./vitimas.page.scss'],
})
export class VitimasPage implements OnInit {
  nome: String
  cpf: String
  sexo: String
  idade: String
  civil: String
  tipoEnvolvido: String
  telefone: String
  idAcidente: String

  constructor(private router: Router, private apiService: ApiService, private storage: Storage, public alertController: AlertController) { }

  ngOnInit() {
    this.nome = "",
    this.cpf = "",
    this.sexo = "",
    this.idade = "",
    this.civil = "",
    this.tipoEnvolvido = "",
    this.telefone = ""
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Sucesso !',
      subHeader: 'Vítima adicionada com sucesso ',
      buttons: ['OK']
    });

    await alert.present();
  }

  sendForm(){
    this.presentAlert();
    this.post();
    this.router.navigateByUrl("/home");
  }

  async post() {
    let resp = await this.apiService.criaVitima(
      this.nome,
      this.cpf, 
      this.sexo,
      this.idade,
      this.civil,
      this.tipoEnvolvido,
      this.telefone
    );
    
    this.storage.set("idAcidente", resp);
  }

}

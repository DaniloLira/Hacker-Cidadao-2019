import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private API_URL = "http://127.0.0.1:3333/";

  constructor(public http: Http) {}

  async criaProcedimento(lat: number, len: number, ts: number) {
    var data = {
      latitude: lat,
      longitude: len,
      timestamp: ts
    };
    const response = await this.http
    .post(this.API_URL + "novoProcedimento", data)
    .toPromise();
    return response.json();
  }
    async criaFormulario(tipoAcidente: String, tipoVeiculoI: String, tipoVeiculoV: String, 
      airBag: String, capacete: String, cintoSeguranca: String) {
      var data = {
        tipoAcidente: tipoAcidente,
        tipoVeiculoI: tipoVeiculoI,
        tipoVeiculoV: tipoVeiculoV,
        airBag: airBag,
        capacete: capacete,
        cintoSeguranca: cintoSeguranca
      };
      const response = await this.http
      .post(this.API_URL + "novoFormulario", data)
      .toPromise();
      return response.json();
    }

    async criaVitima(nome: String,
      cpf: String, 
      sexo: String,
      idade: String,
      civil: String,
      tipoEnvolvido: String,
      telefone: String) {
      var data = {
        nome: nome,
        cpf: cpf, 
        sexo: sexo,
        idade: idade,
        civil: civil,
        tipoEnvolvido: tipoEnvolvido,
        telefone: telefone
      };
      const response = await this.http
      .post(this.API_URL + "atualizarFormulario", data)
      .toPromise();
      return response.json();
    }
}

import { ApiService } from "./../api.service";
import { Component, ViewChild, OnInit, ElementRef } from "@angular/core";
import { Geolocation } from "@ionic-native/geolocation/ngx";

@Component({
  selector: "app-formulario-localizacao",
  templateUrl: "./formulario-localizacao.page.html",
  styleUrls: ["./formulario-localizacao.page.scss"]
})
export class FormularioLocalizacaoPage implements OnInit {
  latitude: number;
  longitude: number;
  timestamp: number;
  map: any;
  address: string;

  constructor(
    private geolocation: Geolocation,
    private apiService: ApiService
  ) {}

  ngOnInit() {}

  getLatLen() {
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
        this.timestamp = resp.timestamp;
        this.post();
      })
      .catch(error => {
        console.log("Error getting location", error);
      });
  }

  post() {
    let resp = this.apiService.criaProcedimento(
      this.latitude,
      this.longitude,
      this.timestamp
    );
    console.log(resp);
  }
}

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

  constructor(private geolocation: Geolocation) {}

  ngOnInit() {}

  getLatLen() {
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
        this.timestamp = resp.timestamp;
        console.log(resp);
      })
      .catch(error => {
        console.log("Error getting location", error);
      });
  }
}

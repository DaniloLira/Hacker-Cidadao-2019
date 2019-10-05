import { ApiService } from "./../api.service";
import { Component, OnInit, NgZone } from "@angular/core";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { Storage } from "@ionic/storage";
import { Router } from "@angular/router";
declare var google;
@Component({
  selector: "app-formulario-localizacao",
  templateUrl: "./formulario-localizacao.page.html",
  styleUrls: ["./formulario-localizacao.page.scss"]
})
export class FormularioLocalizacaoPage implements OnInit {
  latitude: number;
  longitude: number;
  timestamp: number;
  endereco: string;
  bairro: string;
  cidade: string;
  estado: string;
  data: string;
  hora: string;
  cep: string;

  constructor(
    private geolocation: Geolocation,
    private apiService: ApiService,
    private zone: NgZone,
    private storage: Storage,
    private router: Router
  ) {}

  ngOnInit() {
    this.getLatLen();
  }

  getLatLen() {
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
        this.timestamp = resp.timestamp;
        this.getDate();
        this.getAdress();
      })
      .catch(error => {
        console.log("Error getting location", error);
      });
  }

  async getAdress() {
    let geocoder = await new google.maps.Geocoder();
    let latlng = await new google.maps.LatLng(this.latitude, this.longitude);
    let request = { latLng: latlng };
    await geocoder.geocode(request, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        let result = results[0];
        console.log(result);
        this.zone.run(() => {
          if (result != null) {
            //Adição do número ao endereço
            this.endereco = result.address_components[1].long_name + ', ' + result.address_components[0].long_name;
            this.bairro = result.address_components[2].long_name;
            this.cidade = result.address_components[3].long_name;
            this.estado = result.address_components[4].long_name;
            this.cep = result.address_components[6].long_name;
          }
        });
      }
    });
  }

  getDate() {
    var date = new Date(this.timestamp);
    var hora = this.formatDate(date.getHours());
    var minuto = this.formatDate(date.getMinutes());
    var dia = this.formatDate(date.getDate());
    var mes = this.formatDate(date.getMonth());
    var ano = date.getFullYear();
    console.log(date.getHours(), hora);
    this.hora = hora + ":" + minuto;
    this.data = dia + "/" + mes + "/" + ano;
  }

  formatDate(string) {
    var val = String(string);
    if (val.length < 2) {
      return 0 + val;
    } else {
      return val;
    }
  }

  async navigateToForm() {
    await this.post();
    this.router.navigateByUrl("/tabs/formulario");
  }

  async post() {
    let resp = await this.apiService.criaProcedimento(
      this.latitude,
      this.longitude,
      this.timestamp
    );
    this.storage.set("idAcidente", resp);
  }
}

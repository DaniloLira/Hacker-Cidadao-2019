import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Geolocation } from "@ionic-native/geolocation/ngx";

declare var google;

@Component({
  selector: "app-consulta",
  templateUrl: "./consulta.page.html",
  styleUrls: ["./consulta.page.scss"]
})
export class ConsultaPage implements OnInit {
  @ViewChild("map", { static: false }) mapElement: ElementRef;
  map: any;
  constructor(private geolocation: Geolocation) {}

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        let latLng = new google.maps.LatLng(
          resp.coords.latitude,
          resp.coords.longitude
        );
        let mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(
          this.mapElement.nativeElement,
          mapOptions
        );
      })
      .catch(error => {
        console.log("Error getting location", error);
      });
  }

  calculateDistances(lat1, lon1, lat2, lon2) {
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515 * 1.609344;
    return dist;
  }
}

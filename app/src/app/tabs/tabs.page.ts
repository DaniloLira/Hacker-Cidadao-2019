import { Component, OnInit } from "@angular/core";
import { Storage } from "@ionic/storage";
@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.page.html",
  styleUrls: ["./tabs.page.scss"]
})
export class TabsPage implements OnInit {
  constructor(private storage: Storage) {}
  idAcidente: number;
  ngOnInit() {
    this.storage.get("idAcidente").then(val => {
      if (val) {
        this.idAcidente = val;
      }
    });
  }
  returnToHome() {}
}

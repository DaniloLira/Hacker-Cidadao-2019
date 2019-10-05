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
  isCreated: boolean;
  ngOnInit() {
    this.storage.get("idAcidente").then(val => {
      if (val) {
        this.idAcidente = val;
      }
    });
  }
  returnToHome() {}

  checkIsCreated() {
    return false;
    this.storage.get("idAcidente").then(val => {
      this.isCreated = val != undefined && val != null;
      console.log(val);
      console.log(this.isCreated);
    });
  }
}

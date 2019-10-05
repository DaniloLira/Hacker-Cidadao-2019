import { Component, OnInit } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Router } from '@angular/router';
@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.page.html",
  styleUrls: ["./tabs.page.scss"]
})
export class TabsPage implements OnInit {
  constructor(private storage: Storage, private router: Router) {}
  idAcidente: number;
  isCreated: boolean;
  ngOnInit() {
    this.storage.get("idAcidente").then(val => {
      if (val) {
        this.idAcidente = val;
      }
    });
  }
  returnToHome() {
    this.router.navigateByUrl("/home");
  }

  checkIsCreated() {
    return false;
    this.storage.get("idAcidente").then(val => {
      this.isCreated = val != undefined && val != null;
      console.log(val);
      console.log(this.isCreated);
    });
  }
}

import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor(private router: Router) {}

  navigateToForm() {
    this.router.navigate(["/tabs/formulario"]);
  }

  navigateToFormList() {
    this.router.navigate(["/tabs/lista-formularios-incompletos"]);
  }
}

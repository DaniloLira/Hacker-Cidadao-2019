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
}

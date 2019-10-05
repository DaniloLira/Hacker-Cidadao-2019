import { Geolocation } from "@ionic-native/geolocation/ngx";
import {
  NativeGeocoder,
  NativeGeocoderOptions
} from "@ionic-native/native-geocoder/ngx";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { IonicStorageModule } from "@ionic/storage";
import { HttpModule } from "@angular/http";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    Geolocation,
    StatusBar,
    NativeGeocoder,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "formulario-localizacao", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomePageModule)
  },
  {
    path: "formulario",
    loadChildren: "./formulario/formulario.module#FormularioPageModule"
  },
  {
    path: "formulario-localizacao",
    loadChildren:
      "./formulario-localizacao/formulario-localizacao.module#FormularioLocalizacaoPageModule"
  },  { path: 'consulta', loadChildren: './consulta/consulta.module#ConsultaPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

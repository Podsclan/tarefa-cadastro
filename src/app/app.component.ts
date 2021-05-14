import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "tarefa-cadastro";

  mostraLista = false;
  mostraForm = false;

  mostrar(event: any) {
    this.mostraLista = false;
    this.mostraForm = false;

    if (event === "form") {
      this.mostraForm = true;
    } else {
      this.mostraLista = true;
    }
  }
}

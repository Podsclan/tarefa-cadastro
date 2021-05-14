import { RegistroService } from "../../services/registro.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  pessoas: any[] = [];
  mostrarDetalhes = "";

  constructor(private readonly registroService: RegistroService) {}

  ngOnInit(): void {
    this.getPessoas();
  }

  getPessoas() {
    this.pessoas = this.registroService.getPessoas();
  }

  mostrar(name: string) {
    this.mostrarDetalhes = name;
  }
}

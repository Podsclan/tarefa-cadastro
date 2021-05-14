import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
  @Output() mostrar = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  emitir(item: string) {
    this.mostrar.emit(item);
  }
}

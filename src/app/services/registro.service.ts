import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class RegistroService {
  pessoas: any[] = [];

  constructor() {}

  addPessoa(pessoa: any) {
    if (this.pessoas.filter((p) => p.nome === pessoa.nome).length === 0) {
      this.pessoas.push(pessoa);
      alert("Cadastro realizado com sucesso!");
    } else alert("Erro ao cadastrar duas pessoas com o mesmo nome! Mude o vazlor do campo.");
  }

  getPessoas() {
    return this.pessoas;
  }
}

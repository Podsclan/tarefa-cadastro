import { RegistroService } from "../../services/registro.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly registroService: RegistroService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ["", [Validators.required]],
      idade: [""],
      imagem: [""],
    });
  }

  salvarPessoa() {
    if (!this.form.get("nome").value || this.form.get("nome").value === "") {
      console.log(this.form.get("nome"));
      alert("Erro cadastrar uma pessoa sem o nome! Preencha o campo.");
    } else {
      if (!this.form.get("imagem").value || this.form.get("imagem").value === "") {
        this.form
          .get("imagem")
          .setValue(
            "https://pm1.narvii.com/6768/43868502b4b0d295056e8326ebd4febb91e7878ev2_hq.jpg"
          );
      }
      this.registroService.addPessoa(this.form.value);
      this.form.reset();
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  despesaForm!: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit() {
    this.despesaForm = this.fb.group({
      despesa: ['', Validators.required],
      valor: ['', Validators.required],
      data: ['', Validators.required],
    });
  }

  submit() {
    if (this.despesaForm.valid) {
      const despesa = {
        despesa: this.despesaForm.value.despesa,
        valor: this.despesaForm.value.valor,
        data: this.despesaForm.value.data,
      };

      this.dataService
        .addDespesa(despesa)
        .then(() => {
          console.log('Despesa cadastrada com sucesso!');
          this.despesaForm.reset();
          this.despesaForm.get('despesa')?.clearValidators();
          this.despesaForm.get('despesa')?.updateValueAndValidity();
          this.despesaForm.get('valor')?.clearValidators();
          this.despesaForm.get('valor')?.updateValueAndValidity();
          this.despesaForm.get('data')?.clearValidators();
          this.despesaForm.get('data')?.updateValueAndValidity();
        })
        .catch((error) => {
          console.error('Erro ao cadastrar despesa:', error);
        });
    } else {
      console.error('Formulário inválido. Verifique os campos.');
    }
  }
}

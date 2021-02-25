import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  cadastroForm: FormGroup;
  submitted: boolean = false;
  success: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.cadastroForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.cadastroForm.invalid) {
      return;
    }

    this.success = true;
  }

  ngOnInit(): void {}
}

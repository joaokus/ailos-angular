import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'ngm-bootstrap-modal';
import { ModalErrorComponent } from 'src/app/core/components/modal-error/modal-error.component';
import { Person } from 'src/app/core/domain/person';
import { CPFService } from 'src/app/core/services/cpf.services';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  public form: FormGroup;

  public person: Person;
  public isStatusRegular: boolean = false;
  public isLoading = false;

  constructor(
    private service: CPFService,
    private formBuilder: FormBuilder,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      cpf: ['', [Validators.required]],
    });
  }

  public async searchCPF() {
    const cpf = this.f.cpf.value;

    if (!cpf || cpf.length < 11) return;

    try {
      this.isLoading = true;

      const result = await this.service.searchCPF(cpf);
      this.person = result;

      this.isStatusRegular = this.person.status === 'Regular';
    } catch (err) {
      this.dialogService.addDialog(ModalErrorComponent, {
        title: 'Erro',
        message: err,
      });
    } finally {
      this.isLoading = false;
    }
  }

  get f() {
    return this.form.controls;
  }
}

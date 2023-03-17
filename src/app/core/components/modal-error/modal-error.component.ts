import { Component, ViewEncapsulation } from '@angular/core';
import { DialogComponent, DialogService } from 'ngm-bootstrap-modal';

export interface ConfirmModel {
  title: string;
  message: string;
}

@Component({
  templateUrl: './modal-error.component.html',
  styleUrls: ['./modal-error.component.scss'],
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
})
export class ModalErrorComponent extends DialogComponent<ConfirmModel, any> {
  public title = '';
  public message = '';

  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  public hidden() {
    super.close();
  }
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardsModule } from 'src/app/core/components/cards/cards.module';
import { InputsModule } from 'src/app/core/components/inputs/inputs.module';
import { ModalErrorModule } from 'src/app/core/components/modal-error/modal-error.module';
import { StepperModule } from 'src/app/core/components/stepper/stepper.module';
import { HomeRoutes } from './home-routing';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputsModule,
    CardsModule,
    StepperModule,
    ModalErrorModule,
    RouterModule.forChild(HomeRoutes),
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}

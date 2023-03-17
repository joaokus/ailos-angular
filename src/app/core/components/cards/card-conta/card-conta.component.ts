import { Component, Input, ViewEncapsulation } from "@angular/core";
import { Account } from "src/app/core/domain/accounts";

@Component({
    selector: 'card-conta',
    templateUrl: './card-conta.component.html',
    preserveWhitespaces: false,
    encapsulation: ViewEncapsulation.None
})
export class CardContaComponent {

    @Input() public title: string
    @Input() public subtitle: string

    @Input() public account: Account

}
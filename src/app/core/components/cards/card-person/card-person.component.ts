import { Component, Input, ViewEncapsulation } from "@angular/core";
import { Person } from "../../../domain/person";

@Component({
    selector: 'card-person',
    templateUrl: './card-person.component.html',
    preserveWhitespaces: false,
    encapsulation: ViewEncapsulation.None
})
export class CardPersonComponent {

    @Input() public title: string
    @Input() public subtitle: string

    @Input() public person: Person

}
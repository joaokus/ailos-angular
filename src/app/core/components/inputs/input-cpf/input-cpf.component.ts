import { Component, forwardRef, ViewEncapsulation } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { removeMaskCpf } from "src/app/utils/mask-utils";
import { BaseComponent } from "../../base-component.components";

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputCpfComponent),
    multi: true,
}

@Component({
    selector: 'input-cpf',
    templateUrl: './input-cpf.component.html',
    styleUrls: ['./input-cpf.component.scss'],
    preserveWhitespaces: false,
    encapsulation: ViewEncapsulation.None,
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
})
export class InputCpfComponent extends BaseComponent {

    public readonly cpfPattern = /^[0-9]{3}[0-9]{3}[0-9]{3}[0-9]{2}$/

    public validCpf(evt: any) {
        const cpf: string = removeMaskCpf(evt.target.value)

        if ((cpf && cpf.length !== 11)) {
            console.log(cpf);
            
            this.formControl.setErrors({
                pattern: true,
                valid: false,
                ...this.formControl.errors,
            })

            return
        }

        return
    }

}
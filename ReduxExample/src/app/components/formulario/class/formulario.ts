import { FormControl , FormGroup} from '@angular/forms';

export class FormularioC1 extends FormGroup {

  constructor() {
    super({
        'nombre': new FormControl(),
        'apellido': new FormControl()
      });
  }
}

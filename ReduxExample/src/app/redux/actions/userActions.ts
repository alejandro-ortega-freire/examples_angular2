import { CLEAR, SAVE } from '../reducers/userReducer';

export class UserActions {

  constructor() { }

  save( nombre: string, apellido: string ) {
    return { type: SAVE, payload: { nombre: nombre, apellido: apellido } };
  }

  clear() {
    return { type: CLEAR };
  }
}




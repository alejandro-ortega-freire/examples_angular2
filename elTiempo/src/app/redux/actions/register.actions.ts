import { User } from '../../interfaces/user.interface';
import { REGISTER } from '../reducers/register.reducer';

export class RegisterActions {

  constructor() { }

  register(user: User) {
    return { type: REGISTER, payload: user };
  }
}

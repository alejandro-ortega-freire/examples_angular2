import { LOGIN, LOGOUT } from '../reducers/log.reducer';
import { User } from '../../interfaces/user.interface';

export class LogActions {

  constructor() { }

  login(user: User) {
    return { type: LOGIN, payload: user };
  }

  logout() {
    return { type: LOGOUT };
  }
}

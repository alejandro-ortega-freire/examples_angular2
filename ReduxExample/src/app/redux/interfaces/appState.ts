import { Counter } from './counter';
import { User } from './user';

export interface AppState {
  counter: Counter;
  user: User;
}

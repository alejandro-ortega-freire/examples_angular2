import { User } from './user.interface';
import { Municipe } from './municipe.interface';

export interface AppState {
  usersList: User[];
  userActual: User;
  municipeActual: Municipe;
  historicList: Municipe[];
}

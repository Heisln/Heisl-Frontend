import jwt_decode from 'jwt-decode';
import { JwtStructure } from './jwt-structure.model';

export class UserVM {
  token: string;
  email: string;
  role: string;

  constructor(token: string | null) {
    if (token == null) {
      this.email = null;
      this.token = null;
      this.email = null;
    } else {
      const payload: JwtStructure = jwt_decode(token);
      this.email = payload.email;
      this.role = payload.role;
      this.token = token;
    }
  }
}

// Disabling linter as this structure is coming from backend
/* eslint-disable @typescript-eslint/naming-convention */
export interface JwtStructure {
  user_id: number;
  role: string;
  email: string;
  exp: number;
  aud: string;
}

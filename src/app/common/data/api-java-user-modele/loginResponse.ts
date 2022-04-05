export class LoginResponse {
    constructor(
      public email: any,
      public password: any,
      public isAdmin: boolean,
      public name: string,
      public token: any,
      public message: string,
      public nickname: string
    ) { }
}
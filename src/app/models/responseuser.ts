export class ResponseUser {
    id: number;
    name: string;
    username : string;
    email: string;
    password: string;
        roles: [
          {
            id: number,
            name: string
          }
        ]
  }
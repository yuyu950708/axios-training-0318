export type Response<T> = {
    result: boolean;
    errorCode: string;
    message?: string;
    data?: T;
  }

  export type UserData = {
    "email": string,
    "id": number,
    "name": string,
  }
  
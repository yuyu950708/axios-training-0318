export type Response<T> = {
    result: boolean;
    errorCode: string;
    message?: string;
    data?: T;
  }

  export interface UserData {
    "email": string;
    "id": number;
    "name": string;
  }
  
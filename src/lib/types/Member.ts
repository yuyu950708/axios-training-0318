export type Response<T> = {
    name(arg0: string, name: any): unknown;
    email(arg0: string, email: any): unknown;
    result: boolean;
    errorCode: string;
    message?: string;
    data?: T;
  }

export type UserData={
  'email':string,
  'id': number,
  'name': string
}
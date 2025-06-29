export type Response<T> = {
  success: boolean;
  result: boolean;
  errorCode: string;
  message?: string;
  data?: T;
};

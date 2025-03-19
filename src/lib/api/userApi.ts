import { Response, UserData } from '../types/ApiType';
import axiosInstance from './axios';

const userApi = {
    'getUser': (): Promise<Response<UserData[]>> =>
        axiosInstance.get('/users'),

    'addUser': (data: UserData): Promise<Response<UserData>> =>
        axiosInstance.post('/users', data),

    'delUser': (id: number): Promise<Response<null>> =>
        axiosInstance.delete(`/users/${id}`),

    'editUser': (id: number): Promise<Response<null>> =>
        axiosInstance.put(`/users/${id}`),
}
export default userApi;
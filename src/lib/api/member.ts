import { Response, UserData } from '../types/Member';
import Api from '@/lib/api/api';

const URL = 'http://127.0.0.1:5000/api/users'

const memberApi = {
    'getUsers': (): Promise<Response<UserData[]>> =>
        Api.get(`${URL}`),

    'postUsers': (data: UserData): Promise<Response<UserData>> =>
        Api.post(`${URL}`, data),

    'deleteUsers': (id: number): Promise<Response<UserData>> =>
        Api.delete(`${URL}/${id}`),

    'putUsers': (id: number , data: UserData): Promise<Response<UserData>> =>
        Api.put(`${URL}/${id}`, data),

    'getUser': (id: number): Promise<Response<UserData>> =>
        Api.get(`${URL}/${id}`),
}

export default memberApi;
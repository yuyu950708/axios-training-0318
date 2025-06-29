import userApi from '@/lib/api/userApi';
import { UserData } from '@/lib/types/ApiType';
import router from 'next/router';
import { useForm } from 'react-hook-form';

export default function Add() {
    const { register, getValues, handleSubmit, reset } = useForm<UserData>();
    const onSubmit = async () => {
        const data = getValues();
        try {
            const res = await userApi.addUser(data);
            alert(res.message);
            reset();
            router.push('/')
        } catch (error) {
            alert(error instanceof Error ? error.message : '未知錯誤');
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <p>名字</p>
                    <input type="text" {...register('name')} />
                </div>
                <div>
                    <p>email</p>
                    <input type="text" {...register('email')} />
                </div>
                <div><button>確定</button>
                </div>
            </form>
        </>
    )
}
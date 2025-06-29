import memberApi from "@/lib/api/member";
import { UserData } from "@/lib/types/ApiType";
import { useForm } from 'react-hook-form';
import router from 'next/router';

export default function Create() {
    const { register, getValues, handleSubmit, reset } = useForm<UserData>();
    const onSubmit = async () => {
        const data = getValues();
        try {
            await memberApi.postUsers(data);
            alert("新增成功");
            reset();
            router.push("/0627/apiPractice0627");
        } catch (error) {
            alert(error);
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
            姓名:
            <input type="text" {...register('name')} />
            </label>
            <br />
            <label>
            電子郵件:
            <input type="email"  {...register('email')} />
            </label>
            <br />
            <button type="submit">提交</button>
        </form>
    );
}

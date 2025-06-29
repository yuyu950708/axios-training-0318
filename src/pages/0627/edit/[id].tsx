import memberApi from "@/lib/api/member";
import { UserData } from "@/lib/types/Member";
import router from "next/router";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Edit() {
    const { register, getValues, handleSubmit, reset, setValue } = useForm<UserData>();
    const { id } = useRouter().query;
    const [editData, setEditData] = useState<UserData>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await memberApi.getUsers();
                if (id != undefined) {
                    const UserData = await memberApi.getUser(Number(id));
                    const data = UserData.data;
                    if (data) {
                        setEditData(data);
                        setValue('name', data.name);
                        setValue('email', data.email);
                    }
                }

                console.log(response);
            } catch (error) {
                if (error instanceof Error) {
                    alert(error.message);
                }
            }
        };

        fetchData();
    }, [id]);

    const onSubmit = async () => {
        const data = getValues();
        try {
            await memberApi.putUsers(Number(id), data);
            alert("編輯成功");
            reset();
            router.push("/0627/apiPractice0627");
        } catch (error) {
            alert(error);
        }
    };

    return (
        <>
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
        </>
    );
}
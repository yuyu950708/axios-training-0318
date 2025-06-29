import memberApi from "@/lib/api/member";
import { UserData } from "@/lib/types/Member";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ApiPractice0627() {
    const [dataList, setDataList] = useState<UserData[]>();
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await memberApi.getUsers();
                console.log('response:', response)
                setDataList(response?.data);
            } catch (error) {
                console.log('error:', error);

                if (error instanceof Error) {
                    alert(error.message);
                }
            }
        }
        fetchData();
    }, [])

    const handleEdit = (id: number) => {
        router.push(`/0627/edit/${id}`);
    }

    const handleDelete = async (id: number) => {
        try {
            await memberApi.deleteUsers(id);
            alert("刪除成功");
            window.location.reload();
        } catch (error) {
            if (error) {
                alert("刪除失敗");
            }
        }
    }
    return (
        <>
        <div>
            <button onClick={() => router.push('/0627/create')}>新增用戶</button>
        </div>
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                    {dataList && dataList.length > 0 && dataList?.map((v) => (
                        <tr key={v.id}>
                            <td>{v.id}</td>
                            <td>{v.name}</td>
                            <td>{v.email}</td>
                            <td>
                                <button onClick={() => handleEdit(v.id)}>Edit</button>
                                <button onClick={() => handleDelete(v.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
import userApi from "@/lib/api/userApi";
import { UserData } from "@/lib/types/ApiType";
import router from "next/router";
import { useEffect, useState } from "react";

export default function Home(){
  
  const [dataList, setdataList] = useState<UserData[]>();
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await userApi.getUser();
        setdataList(response?.data);
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message);
        } else {
          alert("An unknown error occurred");
        }
      }
    };

    fetchData();
  }, []);

  const hanldDelet = async (id:number) => {
    try {
      const response = await userApi.delUser(id);
      if (!response.result) {
        window.location.reload();
      } else {
        alert("刪除失敗");
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An unknown error occurred");
      }
    }
  }
  return(
    <>
    <h1>用戶列表</h1>
    <section>
      <button onClick={()=> router.push('/add')}>創建新用戶</button>
    </section>
    <section>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>姓名</th>
            <th>Email</th>
            <th>操作</th>
          </tr>
            {dataList && dataList.length > 0 && dataList?.map((v)=>(
            <tr key={v.id}>
              <th>{v.id}</th>
              <th>{v.name}</th>
              <th>{v.email}</th>
              <th><button onClick={()=>hanldDelet(v.id)}>刪除</button></th>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
    </>
  )
}
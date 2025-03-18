import userApi from "@/lib/api/userApi";
import { UserData } from "@/lib/types/ApiType";
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
  return(
    <>
    <h1>用戶列表</h1>
    <section>
      <button>登入</button>
      <button>創建新用戶</button>
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
              <th><button>刪除</button></th>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
    </>
  )
}
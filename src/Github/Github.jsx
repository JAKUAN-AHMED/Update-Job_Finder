import { useEffect, useState } from "react";

const Github = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/JAKUAN-AHMED')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
      <div className="text-center bg-gray-600 text-white p-4 manrope mt-8 mb-8 gap-5">
        <h2>Github followers :{data.public_repos}</h2>
        <h2 className="mb-4">Github User_Name :{data.login}</h2>
        <img className="w-[300px] text-center" src={data.avatar_url} alt="" />
        <button className="btn mt-4">Link : {data.html_url}</button>
      </div>
    );
};

export default Github;

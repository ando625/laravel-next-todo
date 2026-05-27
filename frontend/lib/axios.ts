import axios from 'axios';

const axiosInstance = axios.create({
    //APIのURl（.env.local から読み込む）
    baseURL: process.env.NEXT_PUBLIC_API_URL,

    //Cookie を毎回自動で送る設定（Sanctum認証に必要）
    withCredentials: true,
    
    //送信データ形式はJSON
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
})

export default axiosInstance;
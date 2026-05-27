// frontend/lib/api/auth.ts

import axiosInstance from "../axios";
import { LoginForm, User } from "@/types";

//CSRFトークンを取得する
//Sanctumの認証に必要な「合言葉」をもらう処理
export const getCsrfToken = async () => {
    await axiosInstance.get('/sanctum/csrf-cookie')
}

//ログイン
export const login = async (form: LoginForm) => {
    //まずCSRFトークンをもらってから
    await getCsrfToken()

    //ログインリクエストを送る
    const response = await axiosInstance.post('/login', form)
    return response.data

    
}

//ログアウト
export const logout = async () => {
    await axiosInstance.post('/logout')
}

//ログイン中のユーザー情報を取得
export const getUser = async (): Promise<User> => {
    const response = await axiosInstance.get('/api/user')
    return response.data
}
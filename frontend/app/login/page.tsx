//frontend/app/login/page.tsx

'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/api/auth";

export default function LoginPage() {
    
    //フォームの入力欄を管理する
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');


    const router = useRouter();

    //ログインボタンを押した時の処理
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        setError('');

        try {
            //ログインAPIを呼ぶ
            await login({ email, password })
            
            //成功したらTodoページへ移動
            router.push('/todos')
        } catch (e) {
            setError('メールアドレスまたはパスワードが間違っています')
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow w-96">
                <h1 className="text-2xl font-bold mb-6 text-center">ログイン</h1>

                {/* エラーがあれば表示 */}
                {error && (
                    <p className="text-red-500 text-sm mb-4">{error}</p>
                )}

                <form onSubmit={handleSubmit}>

                    {/* メールアドレス */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">メールアドレス</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>

                    {/* パスワード入力 */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-1">パスワード</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>

                    {/* ログインボタン */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    >
                        ログイン
                    </button>
                </form>
            </div>
        </div>
    )
}
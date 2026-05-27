//frontend/types/index.ts

//Todoの型定義
export type Todo = {
    id: number;
    title: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
};

// ログインフォームの型定義
export type LoginForm = {
    email: string;
    password: string;
};

//ユーザーの型定義
export type User = {
    id: number;
    name: string;
    email: string;
};
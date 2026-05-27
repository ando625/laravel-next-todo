//frontend/lib/api/todo.ts
// TodoのCRUD通信

import axiosInstance from "../axios";
import { Todo } from "@/types";

//Todo一覧を取得
export const getTodos = async (): Primise<Todo[]> => {
    const response = await axiosInstance.get('/api/todos')
    return response.data
}

//Todoを作成
export const createTodo = async (): Promise<Todo> => {
    const response = await axiosInstance.post('/api/todos', { title })
    return response.data
}

//Todo更新（タイトル変更or完了チェック)
export const updateTodo = async(
    id: number,
    data: { title?: string;  is_active?:boolean}
): Promise<Todo> => {
    const response = await axiosInstance.put(`/api/todos/${id}`, data)
    return response.data
}

//Todo削除
export const deleteTodo = async (id: number): Promise<void> => {
    await axiosInstance.delete(`/api/todos/${id}`)
}

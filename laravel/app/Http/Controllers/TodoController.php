<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;
use App\Models\User;


class TodoController extends Controller
{
    public function todoIndex()
    {
        // ログイン中(自身)のユーザーの情報を持ってくる
        $user = auth()->user();

        $todos = Todo::Where('user_id', $user->id)->get();

        return response()->json($todos);

    }

    //Todo作成
    public function todoStore(Request $request)
    {
        $request->validate([
            'title' => 'required|max:255',
        ]);


        $todo = Todo::create([
            'title' => $request->title,
            'is_active' => false,
        ]);

        return response()->json($todo);

    }

    //Todo編集
    public function todoUpdate(Request $request, $id)
    {
        // title は「もし送られてきたら（sometimes）」、空っぽはダメ（required）というルールに
        $request->validate([
            'title' => 'sometimes|required|max:255',
            'is_active' => 'sometimes | boolean',
        ]);

        $todo = Todo::findOrFail($id);

        //$request->onlyを使うと送られてきたデータのみを箱に詰めてくれる
        $updateDate = $request->only(['title', 'is_active']);

        // 集まったデータだけをアップデート
        $todo->update($updateDate);

        return response()->json($todo);

    }

    //Todo削除
    public function todoDelete($id)
    {
        $todo = Todo::findOrFail($id);

        $todo->delete();

        return response()->json();

    }
}

<?php

use App\Http\Controllers\TodoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    // ログイン中のユーザー情報を返して
    return $request->user();
});




Route::middleware('auth:sanctum')->group(function (){


    //todo一覧表示
    Route::get('/todos', [TodoController::class, 'todoIndex']);

    //todo作成
    Route::post('/todos', [TodoController::class,'todoStore']);

    //todo編集
    Route::put('/todos/{id}',[TodoController::class,'todoUpdate']);

    //todo削除
    Route::delete('/todos/{id}', [TodoController::class,'todoDelete']);
});
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [App\Http\Controllers\Api\AuthController::class, 'logout']);
    Route::get('/me', function (Request $request) {
        return $request->user();
    });

    Route::get('/articles', [App\Http\Controllers\Api\ArticleController::class, 'index'])
        ->middleware(('role:admin|editor|viewer'));

    Route::post('/articles', [App\Http\Controllers\Api\ArticleController::class, 'store'])
        ->middleware(('role:admin|editor'));

    Route::get('/articles/{id}', [App\Http\Controllers\Api\ArticleController::class, 'show'])
        ->middleware(('role:admin|editor|viewer'));

    Route::patch('/articles/{id}', [App\Http\Controllers\Api\ArticleController::class, 'update'])
        ->middleware(('role:admin|editor'));

    Route::delete('/articles/{id}', [App\Http\Controllers\Api\ArticleController::class, 'destroy'])
        ->middleware(('role:admin'));
});


Route::post('/login', [App\Http\Controllers\Api\AuthController::class, 'login']);

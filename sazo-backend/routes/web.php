<?php

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return new JsonResponse(
        data: [
            'app' => config('app.name'),
            'version' => '1.0.0'
        ]
    );
});


Route::get('/reset-password/{token}', function ($token) {
    return url(config('app.frontend') . '/auth/password-reset/' . $token);
})->middleware('guest')->name('password.reset');

Route::get('/test', function () {
    $chat = \App\Models\Chat::findOrFail('981cb280-9cf5-421d-8ce1-f3d53f10787e');
    return new JsonResponse(
        data: new \App\Http\Resources\Chat\ChatResource($chat),status: 200
    );
});

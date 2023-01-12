<?php

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return new JsonResponse(
        data: [
            'app' => config('app.name'),
            'version' => '1.0.0',
            'authenticated' => Auth::user() ? 'true' : 'false'
        ]
    );
});


Route::get('/auth/login', \App\Http\Livewire\Auth\Login::class);

Route::get('/organization/requests', \App\Http\Livewire\OrganizationRequests::class)->middleware('auth');

Route::get('/reset-password/{token}', function ($token) {
    return url(config('app.frontend') . '/auth/password-reset/' . $token);
})->middleware('guest')->name('password.reset');

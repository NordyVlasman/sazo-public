<?php

use Illuminate\Support\Facades\Route;

/**
 * Authentication
 */
Route::group(['prefix' => 'auth'], function () {
    Route::post('/signin', \App\Http\Controllers\Api\Auth\SigninController::class);
    Route::post('/signup', \App\Http\Controllers\Api\Auth\SignupController::class);
    Route::post('/reset-password', \App\Http\Controllers\Api\Auth\NewPasswordController::class);
});

Route::group(['prefix' => 'v1', 'middleware' => ['api_secret_check']], function () {
    Route::prefix('/organization')->as('organization:')->group(function () {
        Route::post('/apply', \App\Http\Controllers\Api\V1\Organization\ApplyController::class)->name('request');
    });
});

Route::get('/search', [\App\Http\Controllers\Api\V1\General\SearchController::class, 'index']);
Route::get('/accept/{organization}', \App\Http\Controllers\Api\V1\Organization\AcceptController::class);

Route::group(['prefix' => 'v1', 'middleware' => ['auth:api', 'api_secret_check']], function () {
    Route::post('/auth/logout', \App\Http\Controllers\Api\Auth\LogoutController::class);

    /**
     * File routes
     */
    Route::get('/organization/presigned-fields', [\App\Http\Controllers\Api\V1\Upload\StoreController::class, 'uploadOrganization']);
    Route::get('/post/presigned-fields', [\App\Http\Controllers\Api\V1\Upload\StoreController::class, 'uploadPost']);
    Route::get('/user/me/avatar/presigned-fields', [\App\Http\Controllers\Api\V1\Upload\StoreController::class, 'uploadUser']);

    /**
     * Post routes
     */
    Route::prefix('/post')->as('post:')->group(function () {
        Route::get('/', [\App\Http\Controllers\Api\V1\Post\PostController::class, 'index'])->name('index');
        Route::post('/', [\App\Http\Controllers\Api\V1\Post\PostController::class, 'store'])->name('store');
        Route::get('/{post}', [\App\Http\Controllers\Api\V1\Post\PostController::class, 'show'])->name('show');
        Route::delete('/{post}', [\App\Http\Controllers\Api\V1\Post\PostController::class, 'destroy'])->name('destroy');

        Route::get('/bookmarked', [\App\Http\Controllers\Api\V1\Post\BookmarkController::class, 'index'])->name('index.bookmarked');
        Route::post('/{post}/bookmark', [\App\Http\Controllers\Api\V1\Post\BookmarkController::class, 'addBookmark'])->name('add:bookmark');
        Route::delete('/{post}/bookmark', [\App\Http\Controllers\Api\V1\Post\BookmarkController::class, 'removeBookmark'])->name('delete:bookmark');
    });

    Route::prefix('feed')->as('feed:')->group(function () {
        Route::get('/member/{user:username}', \App\Http\Controllers\Api\V1\Feed\MemberController::class)->name('show:member');
    });

    Route::prefix('/post/{post}/comments')->as('comments:')->group(function () {
        Route::get('/', \App\Http\Controllers\Api\V1\Comment\IndexController::class)->name('index');
        Route::post('/', \App\Http\Controllers\Api\V1\Comment\StoreController::class)->name('store');
    });

    /**
     * User routes
     */
    Route::prefix('member')->as('member:')->group(function () {
        Route::get('/', [\App\Http\Controllers\Api\V1\User\UserController::class, 'index'])->name('index');
        Route::get('/{user:username}', [\App\Http\Controllers\Api\V1\User\UserController::class, 'show'])->name('show');
        Route::put('/', [\App\Http\Controllers\Api\V1\User\UserController::class, 'update'])->name('update');
    });
    Route::get('/me', [\App\Http\Controllers\Api\V1\User\UserController::class, 'show'])->name('me');

    /**
     * Organization routes
     */
    Route::prefix('organization')->as('organization:')->group(function () {
        Route::get('/', [\App\Http\Controllers\Api\V1\Organization\OrganizationController::class, 'index'])->name('index');
        Route::get('/{organization}', [\App\Http\Controllers\Api\V1\Organization\OrganizationController::class, 'show'])->name('show');
        Route::get('/{organization}/members', [\App\Http\Controllers\Api\V1\Organization\MemberController::class, 'index'])->name('show');
        Route::put('/{organization}', [\App\Http\Controllers\Api\V1\Organization\OrganizationController::class, 'update'])->name('update');
    });

    /**
     * Tags routes
     */
    Route::prefix('tags')->as('tags:')->group(function () {
        Route::get('/', [\App\Http\Controllers\Api\V1\Tag\TagController::class, 'index'])->name('index');
        Route::post('/', [\App\Http\Controllers\Api\V1\Tag\TagController::class, 'store'])->name('store');
    });

    /**
     * Notification routes
     */
    Route::prefix('notification')->as('notification:')->group(function () {
       Route::get('/', [\App\Http\Controllers\Api\V1\Notification\NotificationController::class, 'index'])->name('index');
    });

    /**
     * Chats
     */
    Route::prefix('chats')->as('chat:')->group(function () {
        Route::get('/', [\App\Http\Controllers\Api\V1\Chat\ChatController::class, 'index'])->name('index');
        Route::get('/{chat}/messages', [\App\Http\Controllers\Api\V1\Message\MessageController::class, 'show'])->name('message.show');
    });
});

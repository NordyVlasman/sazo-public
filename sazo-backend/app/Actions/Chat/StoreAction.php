<?php

namespace App\Actions\Chat;

use App\Models\Chat;
use App\Services\Encryption\EncryptionService;
use App\Types\Action;

class StoreAction extends Action
{
    static function execute(array $users): Chat
    {
        $chat = Chat::create();
        $chat->members()->attach($users);
        $key = app(EncryptionService::class)->generatePublicKey($chat->id);

        $chat->update(['public_key' => $key]);

        return $chat;
    }
}

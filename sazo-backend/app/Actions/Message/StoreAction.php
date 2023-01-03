<?php

namespace App\Actions\Message;

use App\Models\Chat;
use App\Models\Message;
use App\Models\User;
use App\Services\Encryption\EncryptionService;
use App\Types\Action;

class StoreAction extends Action
{
    static function execute(User $user, Chat $chat, string $message)
    {
        $response = app(EncryptionService::class)->encryptMessage($chat->public_key, $message);

        return Message::create([
            'content' => $response,
            'author_id' => $user->id,
            'chat_id' => $chat->id
        ]);
    }
}

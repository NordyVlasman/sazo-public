<?php

namespace App\Actions\Message;

use App\Models\Chat;
use App\Services\Encryption\EncryptionService;
use App\Types\Action;
use Illuminate\Support\Collection;

class ViewAction extends Action
{
    static function execute(Chat $chat): Collection
    {
        $response = app(EncryptionService::class)
            ->decryptMessages(
                chatId: $chat->id,
                messages: $chat->messages()->get()->toArray()
            );

        return collect(json_decode($response));
    }
}

<?php

namespace App\Actions\Chat;

use App\Http\Resources\Chat\ChatCollection;
use App\Models\User;
use App\Types\Action;

class ViewAction extends Action
{
    static function execute(User $user): ChatCollection
    {
        $chats = $user
            ->chats()
            ->with(['messages'])
            ->get();

        return new ChatCollection($chats);
    }
}

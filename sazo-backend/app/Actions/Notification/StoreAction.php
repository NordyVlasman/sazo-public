<?php

namespace App\Actions\Notification;

use App\Enums\NotificationType;
use App\Models\User;
use App\Types\Action;

class StoreAction extends Action
{
    public static function execute(User $user, NotificationType $type, string $message = null): void
    {
        $user->notifications()->create(attributes: [
            'user_id'   => $user->id,
            'type'      => $type,
            'message'   => $message,
        ]);
    }
}

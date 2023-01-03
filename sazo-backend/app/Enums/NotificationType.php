<?php

namespace App\Enums;

enum NotificationType: int
{
    case LIKE = 1;
    case COMMENT = 2;

    public function name(): string
    {
        return match ($this) {
            NotificationType::LIKE => 'like',
            NotificationType::COMMENT => 'comment,'
        };
    }
}

<?php

namespace App\Actions\Notification;

use App\Models\Notification;
use App\Types\Action;
use Illuminate\Support\Collection;

class ReadAction extends Action
{
    public static function execute(Collection $notifications): void
    {
        $query = Notification::whereIn(
            column: 'id',
            values:  $notifications->pluck(value: 'id')
        );

        static::make()->when(
            $notifications->isNotEmpty(),
            fn () => $query->update(['read_at' => now()])
        );
    }
}

<?php

namespace App\Concerns\ChatMember;

use App\Models\Chat;
use App\Models\User;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

trait InteractsWithRelations
{
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function chat(): BelongsTo
    {
        return $this->belongsTo(Chat::class);
    }
}

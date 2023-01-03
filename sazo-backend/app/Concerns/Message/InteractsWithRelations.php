<?php

namespace App\Concerns\Message;

use App\Models\Chat;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

trait InteractsWithRelations
{
    public function chat(): BelongsTo
    {
        return $this->belongsTo(Chat::class);
    }
}

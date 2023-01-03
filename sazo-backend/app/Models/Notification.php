<?php

namespace App\Models;

use App\Enums\NotificationType;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\MassPrunable;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    use MassPrunable;

    /**
     * The attributes that should be cast to specific types.
     *
     */
    protected $casts = [
        'id'      => 'integer',
        'user_id' => 'integer',
        'type'    => NotificationType::class,
        'message' => 'string',
        'read_at' => 'datetime',
    ];

    protected $fillable = [
        'user_id',
        'type',
        'message',
        'read_at'
    ];

    /**
     * Generate the prunable model query.
     *
     */
    public function prunable() : Builder
    {
        return static::where('created_at', '<=', now()->subDays(30));
    }
}

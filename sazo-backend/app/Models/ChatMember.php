<?php

namespace App\Models;

use App\Concerns\ChatMember\InteractsWithRelations;
use Illuminate\Database\Eloquent\Model;

class ChatMember extends Model
{
    use InteractsWithRelations;

    protected $fillable = [
        'user_id',
        'chat_id',
    ];
}

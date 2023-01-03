<?php

namespace App\Models;

use App\Concerns\Message\InteractsWithRelations;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use InteractsWithRelations;

    protected $fillable = [
        'content',
        'author_id',
        'chat_id'
    ];
}

<?php

namespace App\Models;

use App\Concerns\Comment\InteractsWithRelations;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use InteractsWithRelations;

    protected $fillable = [
        'file_id',
        'url',
        'body',
        'body_html',
        'user_id',
        'post_id'
    ];
}

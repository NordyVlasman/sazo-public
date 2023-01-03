<?php

namespace App\Models;

use App\Concerns\Bookmark\Relationships;
use Illuminate\Database\Eloquent\Model;

class Bookmark extends Model
{
    use Relationships;

    protected $table = 'post_bookmarks';

    /**
     * The attributes that should be cast to specific types.
     *
     */
    protected $casts = [
        'id'      => 'integer',
        'user_id' => 'integer',
        'post_id' => 'integer',
    ];
}

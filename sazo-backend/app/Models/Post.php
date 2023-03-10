<?php

namespace App\Models;

use App\Concerns\Post\InteractsWithRelations;
use App\Concerns\Post\InteractsWithScopes;
use App\Types\Model;

class Post extends Model
{
    use InteractsWithScopes;
    use InteractsWithRelations;

    protected $fillable = [
        'description',
        'description_html',
        'comments_count',
        'author_id',
        'bookmarks_count',
        'workarea_id',
        'career_id'
    ];
}

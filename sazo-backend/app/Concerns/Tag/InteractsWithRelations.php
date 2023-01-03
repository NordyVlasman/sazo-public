<?php

namespace App\Concerns\Tag;

use App\Models\Post;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

trait InteractsWithRelations
{
    public function posts(): BelongsToMany
    {
        return $this->belongsToMany(Post::class, 'post_tags', 'tag_id', 'post_id')->orderByDesc('created_at');
    }
}

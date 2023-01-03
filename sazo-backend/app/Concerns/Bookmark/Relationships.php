<?php

namespace App\Concerns\Bookmark;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

trait Relationships
{
    /**
     * Retrieve the post associated with the bookmark.
     *
     */
    public function post(): BelongsTo
    {
        return $this->belongsTo(Post::class);
    }

    /**
     * Retrieve the user associated with the bookmark.
     *
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}

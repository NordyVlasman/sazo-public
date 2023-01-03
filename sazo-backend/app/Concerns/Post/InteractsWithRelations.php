<?php

namespace App\Concerns\Post;

use App\Models\Career;
use App\Models\Comment;
use App\Models\File;
use App\Models\Tag;
use App\Models\User;
use App\Models\Workarea;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

trait InteractsWithRelations
{
    public function author(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'author_id');
    }

    public function files(): BelongsToMany
    {
        return $this->belongsToMany(File::class, 'post_files', 'post_id', 'file_id');
    }

    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class, 'post_tags', 'post_id', 'tag_id');
    }

    public function bookmarkers(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'post_bookmarks', 'post_id', 'user_id');
    }

    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }

    public function workArea(): BelongsTo
    {
        return $this->belongsTo(Workarea::class, 'workarea_id', 'id');
    }

    public function career(): BelongsTo
    {
        return $this->belongsTo(Career::class, 'career_id', 'id');
    }
}

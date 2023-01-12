<?php

namespace App\Concerns\User;

use App\Models\Career;
use App\Models\Chat;
use App\Models\Notification;
use App\Models\Organization;
use App\Models\Post;
use App\Models\User;
use App\Models\Workarea;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

trait InteractsWithRelations
{
    public function posts(): HasMany
    {
        return $this->hasMany(Post::class, 'author_id', 'id');
    }

    public function organizations(): BelongsToMany
    {
        return $this->belongsToMany(Organization::class, 'organization_member', 'user_id', 'organization_id');
    }

    public function bookmarks(): BelongsToMany
    {
        return $this->belongsToMany(Post::class, 'post_bookmarks', 'user_id', 'post_id');
    }

    public function organization(): BelongsTo
    {
        return $this->belongsTo(Organization::class, 'organization_id', 'id');
    }

    public function workarea(): BelongsTo
    {
        return $this->belongsTo(Workarea::class);
    }

    public function career(): BelongsTo
    {
        return $this->belongsTo(Career::class);
    }

    /**
     * Retrieve the notifications associated with the user.
     *
     */
    public function notifications(): HasMany
    {
        return $this->hasMany(Notification::class);
    }

    public function hasBookmarked(int $post): bool
    {
        return $this->bookmarks()
            ->where('post_id', $post)
            ->exists();
    }

    public function hasNotifications(): bool
    {
        return $this->notifications()
            ->whereNull('read_at')
            ->exists();
    }

    public function chats(): BelongsToMany
    {
        return $this->belongsToMany(Chat::class, 'chat_members', 'user_id', 'chat_id');
    }
}

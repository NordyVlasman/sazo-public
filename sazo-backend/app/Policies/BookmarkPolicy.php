<?php

namespace App\Policies;

use App\Models\Post;
use App\Models\User;
use App\Types\Policy;

class BookmarkPolicy extends Policy
{
    public function delete(User $user, Post $post): bool
    {
        return $user
            ->bookmarks()
            ->where('post_id', $post->id)
            ->exists();
    }

    public function store(User $user, Post $post): bool
    {
        if ($user->owns($post)) {
            return false;
        }

        return $user
            ->bookmarks()
            ->where('post_id', $post->id)
            ->doesntExist();
    }
}

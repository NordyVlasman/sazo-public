<?php

namespace App\Policies;

use App\Models\Post;
use App\Models\User;
use App\Types\Policy;

class PostPolicy extends Policy
{
    public function delete(User $user, Post $post): bool
    {
        return $user->owns($post);
    }

    public function edit(User $user, Post $post): bool
    {
        return $user->owns($post);
    }

    public function update(User $user, Post $post): bool
    {
        return $user->owns($post);
    }
}

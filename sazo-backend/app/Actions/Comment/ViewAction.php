<?php

namespace App\Actions\Comment;

use App\Http\Resources\Comment\CommentCollection;
use App\Models\Post;
use App\Types\Action;

class ViewAction extends Action
{
    public static function execute(Post $post): CommentCollection
    {
        $comments = $post->comments()->with('user')->get();
        return new CommentCollection(resource: $comments);
    }
}

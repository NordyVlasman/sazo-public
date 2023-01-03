<?php

namespace App\Actions\Feed;

use App\Http\Resources\Post\PostCollection;
use App\Models\Post;
use App\Models\User;
use App\Types\Action;
use Spatie\QueryBuilder\QueryBuilder;

class ViewAction extends Action
{
    public static function execute(?User $user = null): PostCollection
    {
        if ($user) {
            $posts = $user
                ->posts()
                ->with(['author', 'files', 'tags', 'career', 'workarea'])
                ->get();
        } else {
            $posts = QueryBuilder::for(subject: Post::class)
                ->orderByDesc('created_at')
                ->with(['tags', 'files', 'author', 'career', 'workarea'])
                ->allowedFilters('description_html')
                ->get();
        }

        return new PostCollection(resource: $posts);
    }
}

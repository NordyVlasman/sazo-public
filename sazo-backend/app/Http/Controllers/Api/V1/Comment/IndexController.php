<?php

namespace App\Http\Controllers\Api\V1\Comment;

use App\Actions\Comment\ViewAction;
use App\Http\Controllers\Controller;
use App\Http\Resources\Comment\CommentCollection;
use App\Models\Post;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class IndexController extends Controller
{
    public function __invoke(Request $request, Post $post)
    {
        return new JsonResponse(
            data: ViewAction::execute(post: $post),
            status: Response::HTTP_OK
        );
    }
}

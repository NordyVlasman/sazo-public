<?php

namespace App\Http\Controllers\Api\V1\Comment;

use App\Actions\Comment\CreateAction;
use App\Http\Controllers\Controller;
use App\Http\Resources\Comment\CommentResource;
use App\Models\Post;
use Database\Factories\CommentFactory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class StoreController extends Controller
{
    public function __invoke(Request $request, Post $post): JsonResponse
    {
        $comment = (new CreateAction())->execute(
            object: CommentFactory::make(
                attributes: [
                    'post_id' => $post->id,
                    'user_id' => $request->user()->id,
                    'body' => $request->get('body'),
                    'body_html' => $request->get('html') ?: null,
                ]
            )
        );

        return new JsonResponse(
            data: new CommentResource($comment),
            status: Response::HTTP_OK
        );
    }
}

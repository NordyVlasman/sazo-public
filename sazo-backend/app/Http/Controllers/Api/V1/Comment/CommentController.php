<?php

namespace App\Http\Controllers\Api\V1\Comment;

use App\Actions\Comment\CreateAction;
use App\Actions\Comment\ViewAction;
use App\DataObjects\CommentObject;
use App\Http\Controllers\Controller;
use App\Http\Resources\Comment\CommentResource;
use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index(Request $request, Post $post): JsonResponse
    {
        return new JsonResponse(
            data: ViewAction::execute(post: $post),
            status: Response::HTTP_OK
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     */
    public function store(Request $request, Post $post)
    {
        $comment = (new CreateAction())->execute(
            object: new CommentObject(
                user_id: $request->user()->id,
                post_id: $post->id,
                body: $request->get('body'),
                body_html: $request->get('body_html')
            )
        );

        return new JsonResponse(
            data: new CommentResource($comment),
            status: Response::HTTP_CREATED
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     */
    public function destroy(Request $request, Post $post, Comment $comment): JsonResponse
    {
        $comment->delete();

        $post->comments_count -= 1;
        $post->save();

        return new JsonResponse(
            data: [],
            status: Response::HTTP_ACCEPTED,
        );
    }
}

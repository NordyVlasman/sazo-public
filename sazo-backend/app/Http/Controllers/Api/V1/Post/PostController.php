<?php

namespace App\Http\Controllers\Api\V1\Post;

use App\Actions\Feed\ViewAction;
use App\Actions\Post\CreateAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\PostRequest;
use App\Http\Resources\Post\PostResource;
use App\Models\Post;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index(): JsonResponse
    {
        return new JsonResponse(
            data: ViewAction::execute(),
            status: Response::HTTP_OK
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     */
    public function store(PostRequest $request): JsonResponse
    {
        $post = (new CreateAction())->execute(
            data: $request->toDTO($request->user()->id)
        );

        return new JsonResponse(
            data: new PostResource($post),
            status: Response::HTTP_OK
        );
    }

    /**
     * Display the specified resource.
     *
     */
    public function show(Request $request, Post $post)
    {
        return new JsonResponse(
            data: new PostResource($post),
            status: Response::HTTP_OK
        );
    }

    /**
     * Update the specified resource in storage.
     * TODO: Implement
     *
     */
    public function update(Request $request, Post $post)
    {
        return new JsonResponse(
            data: null,
            status: Response::HTTP_OK
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     */
    public function destroy(Request $request, Post $post): JsonResponse
    {
        $post->delete();

        return new JsonResponse(
            data: null,
            status: Response::HTTP_OK
        );
    }
}

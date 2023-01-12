<?php

namespace App\Http\Controllers\Api\V1\Post;

use App\Http\Controllers\Controller;
use App\Http\Resources\Post\PostCollection;
use App\Models\Post;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class BookmarkController extends Controller
{
    public function addBookmark(Request $request, Post $post): JsonResponse
    {
        if ($post->bookmarkers->contains($request->user())) {
            return new JsonResponse(
                data: [],
                status: Response::HTTP_OK
            );
        }

        $post->bookmarkers()->attach($request->user());
        $post->bookmarks_count += 1;
        $post->save();

        return new JsonResponse(
            data: null,
            status: Response::HTTP_OK
        );
    }

    public function removeBookmark(Request $request, Post $post): JsonResponse
    {
        if (!$post->bookmarkers->contains($request->user())) {
            return new JsonResponse(
                data: [],
                status: Response::HTTP_OK
            );
        }

        $post->bookmarkers()->detach($request->user());
        $post->bookmarks_count -= 1;
        $post->save();

        return new JsonResponse(
            data: null,
            status: Response::HTTP_OK
        );
    }

    public function index(Request $request): JsonResponse
    {
        $user = $request->user();

        $posts = $user->bookmarks()
            ->with(['tags', 'files', 'author', 'career', 'workarea'])
            ->get();

        return new JsonResponse(
            data: new PostCollection($posts),
            status: Response::HTTP_OK
        );
    }
}

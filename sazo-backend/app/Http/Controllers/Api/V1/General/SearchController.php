<?php

namespace App\Http\Controllers\Api\V1\General;

use App\Http\Controllers\Controller;
use App\Http\Resources\Organization\OrganizationResource;
use App\Http\Resources\Post\PostResource;
use App\Http\Resources\User\UserCollection;
use App\Http\Resources\User\UserResource;
use App\Models\Organization;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use function PHPUnit\Framework\isEmpty;

class SearchController extends Controller
{
    public function index(Request $request)
    {
        if (!$request->get('search')) {
            return new JsonResponse(
                data: [],
                status: Response::HTTP_OK
            );
        }
        $users = User::applyFilters($request->only(['search']))
            ->whereUser()
            ->latest()
            ->paginate(10);

        $organizations = Organization::applyFilters($request->only(['search']))
            ->latest()
            ->paginate(10);

        $posts = Post::applyFilters($request->only(['search']))
            ->latest()
            ->with('author', 'files', 'tags', 'career', 'workarea')
            ->paginate(10);

        return new JsonResponse(
            data: [
                'users' => UserResource::collection($users),
                'organizations' => OrganizationResource::collection($organizations),
                'posts' => PostResource::collection($posts),
            ],
            status: Response::HTTP_OK
        );
    }
}

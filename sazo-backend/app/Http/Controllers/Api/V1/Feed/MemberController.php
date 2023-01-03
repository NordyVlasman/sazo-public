<?php

namespace App\Http\Controllers\Api\V1\Feed;

use App\Actions\Feed\ViewAction;
use App\Http\Controllers\Controller;
use App\Http\Resources\Post\PostCollection;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Request;
use Symfony\Component\HttpFoundation\Response;

class MemberController extends Controller
{
    public function __invoke(Request $request, User $user)
    {
        return new JsonResponse(
            data: ViewAction::execute(user: $user),
            status: Response::HTTP_OK
        );
    }
}

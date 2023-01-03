<?php

namespace App\Http\Controllers\Api\V1\Organization;

use App\Http\Controllers\Controller;
use App\Http\Resources\User\UserResource;
use App\Models\Organization;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class MemberController extends Controller
{
    public function index(Request $request, Organization $organization)
    {
        $members = $organization->members;

        return new JsonResponse(
            data: UserResource::collection($members),
            status: Response::HTTP_OK
        );
    }
}

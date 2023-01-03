<?php

namespace App\Http\Controllers\Api\V1\User;

use App\Actions\User\UpdateAction;
use App\Actions\User\ViewAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Http\Resources\User\UserResource;
use App\Models\User;
use Database\Factories\UserFactory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UserController extends Controller
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     */
    public function show(Request $request, ?User $user = null): JsonResponse
    {
        $user = $user ?: $request->user();

        return new JsonResponse(
            data: new UserResource(resource: $user),
            status: Response::HTTP_OK
        );
    }

    /**
     * Update the specified resource in storage.
     *
     */
    public function update(UserRequest $request)
    {
        $response = UpdateAction::execute(
            object: UserFactory::make(
                attributes: $request->validated()
            ),
            user: $request->user()
        );

        return new JsonResponse(
            data: $response,
            status: Response::HTTP_OK
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     */
    public function destroy($id)
    {
        //
    }
}

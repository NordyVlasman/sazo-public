<?php

namespace App\Http\Controllers\Api\V1\Organization;

use App\Actions\Organization\UpdateAction;
use App\Actions\Organization\ViewAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\OrganizationRequest;
use App\Http\Resources\Organization\OrganizationResource;
use App\Models\Organization;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class OrganizationController extends Controller
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
     * TODO: implement
     *
     */
    public function store(Request $request): JsonResponse
    {
        return new JsonResponse(
            data: null,
            status: Response::HTTP_OK
        );
    }

    /**
     * Display the specified resource.
     *
     */
    public function show(Request $request, Organization $organization): JsonResponse
    {
        return new JsonResponse(
            data: new OrganizationResource($organization),
            status: Response::HTTP_OK
        );
    }

    /**
     * Update the specified resource in storage.
     *
     */
    public function update(OrganizationRequest $request, Organization $organization): JsonResponse
    {
        $response = UpdateAction::execute(
            object: $request->toDTO(),
            organization: $organization
        );

        return new JsonResponse(
            data: $response,
            status: Response::HTTP_OK
        );
    }

    /**
     * Remove the specified resource from storage.
     * TODO: implement
     *
     */
    public function destroy(Request $request, Organization $organization): JsonResponse
    {
        return new JsonResponse(
            data: null,
            status: Response::HTTP_OK
        );
    }
}

<?php

namespace App\Http\Controllers\Api\V1\Organization;

use App\Actions\Organization\ApplyAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\Organization\ApplyRequest;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class ApplyController extends Controller
{
    public function __invoke(ApplyRequest $request): JsonResponse
    {
        $organization = ApplyAction::execute($request->validated());

        return new JsonResponse(
            data: $organization,
            status: Response::HTTP_OK
        );
    }
}

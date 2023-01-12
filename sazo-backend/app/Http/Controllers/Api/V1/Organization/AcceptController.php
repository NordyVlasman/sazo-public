<?php

namespace App\Http\Controllers\Api\V1\Organization;

use App\Actions\Organization\AcceptAction;
use App\Http\Controllers\Controller;
use App\Models\Organization;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AcceptController extends Controller
{
    public function __invoke(Request $request, Organization $organization)
    {
        AcceptAction::execute($organization);

        return new JsonResponse(
            data: ['status' => 'success'],
            status: Response::HTTP_OK
        );
    }
}

<?php

namespace App\Http\Controllers\Api\Auth;

use App\Actions\Authentication\LoginAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\Authentication\LoginRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SigninController extends Controller
{
    public function __invoke(LoginRequest $request)
    {
        LoginAction::execute($request->validated());
        $token = $request->user()->createToken('API Token');

        return new JsonResponse(
            data: $token,
            status: Response::HTTP_OK
        );
    }
}

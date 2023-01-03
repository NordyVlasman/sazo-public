<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use stdClass;
use Symfony\Component\HttpFoundation\Response;

class ApiSecretCheck
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (!config('system.api_secret')) {
            return $next($request);
        }

        if ($request->header('X-API-SECRET') && ($request->header('X-API-SECRET') == config('system.api_secret'))) {
            return $next($request);
        } else {
            $error = [
                'message' => 'Invalid secret',
                'errors' => new stdClass,
            ];

            return new JsonResponse(
                data: $error,
                status: Response::HTTP_FORBIDDEN,
                headers: [
                    'X-App-Version' => 1.0,
                ]
            );
        }

    }
}

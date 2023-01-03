<?php

namespace App\Http\Controllers\Api\V1\Chat;

use App\Actions\Chat\StoreAction;
use App\Actions\Chat\ViewAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\ChatRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ChatController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index(Request $request): JsonResponse
    {
        return new JsonResponse(
            data: ViewAction::execute($request->user()),
            status: Response::HTTP_OK
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     */
    public function store(ChatRequest $request)
    {
        $chat = StoreAction::execute($request->toArray());

        return new JsonResponse(
            data: $chat,
            status: Response::HTTP_OK
        );
    }

    /**
     * Display the specified resource.
     *
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     */
    public function update(Request $request, $id)
    {
        //
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

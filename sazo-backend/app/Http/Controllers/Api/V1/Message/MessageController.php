<?php

namespace App\Http\Controllers\Api\V1\Message;

use App\Actions\Message\StoreAction;
use App\Actions\Message\ViewAction;
use App\Http\Controllers\Controller;
use App\Models\Chat;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     */
    public function store(Request $request, Chat $chat)
    {
        return new JsonResponse(
            data: StoreAction::execute(
                user: $request->user(),
                chat: $chat,
                message: $request->get('message')
            ),
            status: Response::HTTP_OK
        );
    }

    /**
     * Display the specified resource.
     *
     */
    public function show(Chat $chat)
    {
        return new JsonResponse(
            data: ViewAction::execute($chat),
            status: Response::HTTP_OK
        );
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

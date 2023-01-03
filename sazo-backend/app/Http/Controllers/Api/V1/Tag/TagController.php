<?php

namespace App\Http\Controllers\Api\V1\Tag;

use App\Actions\Tag\CreateAction;
use App\Http\Controllers\Controller;
use App\Http\Resources\Tag\TagCollection;
use App\Models\Tag;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class TagController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index(): JsonResponse
    {
        return new JsonResponse(
            data: new TagCollection(resource: Tag::all()),
            status: Response::HTTP_OK
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     */
    public function store(Request $request): JsonResponse
    {
        $tag = (new CreateAction())->execute(['name' => $request->get('name')]);

        return new JsonResponse(
            data: $tag,
            status: Response::HTTP_OK
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

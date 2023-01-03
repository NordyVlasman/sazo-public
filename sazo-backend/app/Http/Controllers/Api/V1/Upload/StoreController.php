<?php

namespace App\Http\Controllers\Api\V1\Upload;

use App\Actions\File\UploadAction;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class StoreController extends Controller
{
    public function uploadPost(Request $request)
    {
        $response = (new UploadAction())->execute([
            'mime_type' => $request->query(key: 'mime_type'),
            'file_type' => 'post',
        ]);

        return new JsonResponse(
            data: $response,
            status: Response::HTTP_OK
        );
    }

    public function uploadUser(Request $request)
    {
        $response = (new UploadAction())->execute([
            'mime_type' => $request->query(key: 'mime_type'),
            'file_type' => 'user',
        ]);

        return new JsonResponse(
            data: $response,
            status: Response::HTTP_OK
        );
    }

    public function uploadOrganization(Request $request)
    {
        $response = (new UploadAction())->execute([
            'mime_type' => $request->query(key: 'mime_type'),
            'file_type' => 'organization',
        ]);

        return new JsonResponse(
            data: $response,
            status: Response::HTTP_OK
        );
    }
}

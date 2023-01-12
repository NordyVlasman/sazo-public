<?php

namespace App\Http\Resources\Notification;

use Illuminate\Http\Resources\Json\ResourceCollection;

class NotificationCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     */
    public function toArray($request): array
    {
        return [
            'data' => NotificationResource::collection($this->collection)
        ];
    }
}

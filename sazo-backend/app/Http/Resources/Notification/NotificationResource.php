<?php

namespace App\Http\Resources\Notification;

use Illuminate\Http\Resources\Json\JsonResource;

class NotificationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     */
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'message' => $this->message,
            'notification_type' => $this->type
        ];
    }
}

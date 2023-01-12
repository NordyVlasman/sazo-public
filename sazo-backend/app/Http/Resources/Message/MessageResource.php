<?php

namespace App\Http\Resources\Message;

use Illuminate\Http\Resources\Json\JsonResource;

class MessageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     */
    public function toArray($request): array
    {
        return parent::toArray($request);
    }
}

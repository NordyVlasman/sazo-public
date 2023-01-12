<?php

namespace App\Http\Resources\Chat;

use App\Http\Resources\User\UserCollection;
use App\Http\Resources\User\UserResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ChatResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     */
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'public_key' => $this->public_key,
            'latest_message' => $this->latestMessage(),
            'members' => UserResource::collection($this->members($request->user())),
        ];
    }
}

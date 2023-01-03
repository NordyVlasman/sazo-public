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
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'public_key' => $this->public_key,
            'latest_message' => $this->latestMessage(),
            'members' => UserResource::collection($this->members($request->user())),
        ];
    }
}

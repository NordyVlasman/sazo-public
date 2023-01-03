<?php

namespace App\Http\Resources\Comment;

use App\Http\Resources\User\UserResource;
use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
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
            'file_id' => $this->file_id,
            'url' => $this->url,
            'body' => $this->body,
            'body_html' => $this->body_html,
            'post_id' => $this->post_id,
            'user' => new UserResource($this->user),
            'created_at' => $this->created_at,
        ];
    }
}

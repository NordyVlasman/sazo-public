<?php

namespace App\Http\Resources\Post;

use App\Http\Resources\File\FileCollection;
use App\Http\Resources\File\FileResource;
use App\Http\Resources\Tag\TagResource;
use App\Http\Resources\User\UserResource;
use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
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
            'description' => $this->description,
            'description_html' => $this->description_html,
            'user' => new UserResource($this->author),
            'files' => FileResource::collection($this->files),
            'tags' => TagResource::collection($this->tags),
            'created_at' => $this->created_at,

            'comments_count' => $this->comments_count,
            'bookmarks_count' => $this->bookmarks_count,

            'has_bookmarked' => $this->when($request->user(), function () use($request) {
                return $request->user()->hasBookmarked($this->id);
            }),

            'career' => $this->career?->name ?: null,
            'workarea' => $this->workarea?->name ?: null,
        ];
    }
}

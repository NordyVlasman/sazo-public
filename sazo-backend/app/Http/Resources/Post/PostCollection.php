<?php

namespace App\Http\Resources\Post;

use Illuminate\Http\Resources\Json\ResourceCollection;

class PostCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'data' => PostResource::collection($this->collection),
            'meta' => [
                'total' => $this->collection->count()
            ]
        ];
    }
}

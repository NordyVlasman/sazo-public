<?php

namespace App\Http\Resources\File;

use Illuminate\Http\Resources\Json\JsonResource;

class FileResource extends JsonResource
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
            'file_path' => $this->file_path,
            'file_type' => $this->file_type,
            'preview_file_path' => $this->preview_file_path,
        ];
    }
}

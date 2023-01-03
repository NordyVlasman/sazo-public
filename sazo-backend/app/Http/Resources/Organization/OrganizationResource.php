<?php

namespace App\Http\Resources\Organization;

use App\Http\Resources\User\UserResource;
use Illuminate\Http\Resources\Json\JsonResource;

class OrganizationResource extends JsonResource
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
            'name' => $this->name,
            'description' => $this->description ?: null,
            'website_url' => $this->website_url ?: null,
            'phone' => $this->phone ?: null,
            'city' => $this->city ?: null,
            'state' => $this->state ?: null,
            'zip' => $this->zip ?: null,
            'address_street_1' => $this->address_street_1 ?: null,
            'logo_url' => $this->logo_url ?: null,
//            'author' => $this->author ? new UserResource($this->author) : null,
        ];
    }
}

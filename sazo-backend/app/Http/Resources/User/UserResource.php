<?php

namespace App\Http\Resources\User;

use App\Http\Resources\Organization\OrganizationResource;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property User $this
 */
class UserResource extends JsonResource
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
            'username' => $this->username ?: null,
            'email' => $this->email ?: null,
            'first_name' => $this->first_name ?: null,
            'last_name' => $this->last_name ?: null,
            'full_name' => $this->fullName ?: null,
            'avatar_url' => $this->avatar_url ?: null,
            'tagline' => $this->tagline ?: null,
            'role' => $this->roles?->first()->name ?: null,
            'user_type' => $this->type->getType(),
            'organization' => $this->organization_id ?: null,
            'has_notifications' => $this->hasNotifications() ?: false
        ];
    }
}

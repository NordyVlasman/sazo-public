<?php

namespace App\Actions\Organization;

use App\DataObjects\OrganizationObject;
use App\DataObjects\UserObject;
use App\Http\Resources\Organization\OrganizationResource;
use App\Http\Resources\User\UserResource;
use App\Models\Organization;
use App\Models\User;
use App\Types\Action;

class UpdateAction extends Action
{
    public static function execute(OrganizationObject $object, Organization $organization): OrganizationResource
    {
        $path = null;
        if ($object->avatar_path) {
            $path = config('app.asset_url') . $object->avatar_path;
        }

        $data = $object->toArray();

        $organization->update([
            'name' => $data['name'],
            'website_url' => $data['website_url'] ?: null,
            'description' => $data['description'] ?: null,
            'country' => $data['country'] ?: null,
            'address_street_1' => $data['address_street_1'] ?: null,
            'city' => $data['city'] ?: null,
            'state' => $data['state'] ?: null,
            'zip' => $data['zip'] ?: null,
            'phone' => $data['phone']?: null,
            'logo_url' => $path ?: $organization->logo_url
        ]);

        return new OrganizationResource(resource: $organization);
    }
}

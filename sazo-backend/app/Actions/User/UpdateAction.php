<?php

namespace App\Actions\User;

use App\DataObjects\UserObject;
use App\Http\Resources\User\UserResource;
use App\Models\User;
use App\Types\Action;

class UpdateAction extends Action
{
    public static function execute(UserObject $object, User $user): UserResource
    {
        $path = null;
        if ($object->avatar_path) {
            $path = config('app.asset_url') . $object->avatar_path;
        }

        $data = $object->toArray();

        $user->update([
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'email' => $data['email'],
            'username' => $data['username'],
            'tagline' => $data['tagline'],
            'avatar_url' => $path ?: $user->avatar_url
        ]);

        return new UserResource(resource: $user);
    }
}

<?php

namespace App\Actions\User;

use App\DataObjects\UserObject;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;

final class CreateAction
{

    public static function execute(UserObject $object): Model|null|array
    {
        return User::create(
            attributes: $object->toArray()
        );
    }
}

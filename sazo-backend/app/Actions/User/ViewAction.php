<?php

namespace App\Actions\User;

use App\Enums\UserType;
use App\Http\Resources\User\UserCollection;
use App\Models\User;
use App\Types\Action;

class ViewAction extends Action
{
    public static function execute(): UserCollection
    {
        $users = User::where('type', UserType::USER)
            ->with(['organization'])
            ->get();

        return new UserCollection(resource: $users);
    }
}

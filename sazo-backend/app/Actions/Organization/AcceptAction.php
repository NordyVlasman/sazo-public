<?php

namespace App\Actions\Organization;

use App\Enums\OrganizationType;
use App\Models\Organization;
use App\Types\Action;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\ValidationException;

class AcceptAction extends Action
{
    public static function execute(Organization $organization): Organization
    {
        self::acceptRequest($organization);
        self::createUser($organization);

        return $organization;
    }

    private static function acceptRequest(Organization $organization)
    {
        $organization->update([
            'type' => OrganizationType::PUBLISHED
        ]);
    }

    private static function createUser(Organization $organization)
    {
        $user = $organization->author;

        $status = Password::sendResetLink(['email' => $user->email]);

        if ($status !== Password::RESET_LINK_SENT) {
            throw ValidationException::withMessages([
                'email' => [__($status)],
            ]);
        }
    }
}

<?php

namespace App\Actions\Organization;

use App\Enums\OrganizationType;
use App\Enums\UserType;
use App\Models\Organization;
use App\Models\User;
use App\Notifications\NewPendingOrganizationNotification;
use App\Notifications\PendingOrganizationNotification;
use App\Types\Action;
use Illuminate\Support\Facades\Notification;
use Str;

class ApplyAction extends Action
{
    public static function execute(array $payload): Organization
    {
        $organization = self::createOrganization($payload);
        $admin = self::createOrganizationAdmin($payload, $organization);
        $organization->refresh();

        self::sendNotifications($organization, $admin);

        return $organization;
    }

    private static function createOrganization(array $payload): Organization
    {
        $organization = Organization::create($payload);
        $organization->type = OrganizationType::DRAFT;
        $organization->save();

        return $organization;
    }

    private static function createOrganizationAdmin(array $payload, Organization $organization): User
    {
        $username = lcfirst($payload['name']) . '_' .  strtolower(Str::random(5));

        $user = User::create([
            'email'             => $payload['email'],
            'type'              => UserType::ORGANIZATION->value,
            'username'          => $username,
            'first_name'        => $payload['name'],
            'last_name'         => Str::random(10),
        ]);

        $user->organization()->associate($organization);
        $user->assignRole('organization');

        $organization->update([
            'author_id' => $user->id
        ]);

        return $user;
    }

    private static function sendNotifications(Organization $organization, User $admin)
    {
        $admin->notify(new PendingOrganizationNotification($organization));
        Notification::route('mail', config('system.administrator_mail'))->notify(new NewPendingOrganizationNotification($organization));
    }
}

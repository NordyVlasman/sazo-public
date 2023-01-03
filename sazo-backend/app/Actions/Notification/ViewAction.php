<?php

namespace App\Actions\Notification;

use App\Enums\OrganizationType;
use App\Http\Resources\Comment\CommentCollection;
use App\Http\Resources\Notification\NotificationCollection;
use App\Http\Resources\Organization\OrganizationCollection;
use App\Models\Organization;
use App\Models\Post;
use App\Models\User;
use App\Types\Action;

class ViewAction extends Action
{
    public static function execute(User $user): NotificationCollection
    {
        $notifications = $user->notifications();

        return new NotificationCollection(
            resource: $notifications
        );
    }
}

<?php

namespace App\Actions\Organization;

use App\Enums\OrganizationType;
use App\Http\Resources\Comment\CommentCollection;
use App\Http\Resources\Organization\OrganizationCollection;
use App\Models\Organization;
use App\Models\Post;
use App\Types\Action;

class ViewAction extends Action
{
    public static function execute(): OrganizationCollection
    {
        $organizations = Organization::where('type', OrganizationType::PUBLISHED)
            ->get();

        return new OrganizationCollection($organizations);
    }
}

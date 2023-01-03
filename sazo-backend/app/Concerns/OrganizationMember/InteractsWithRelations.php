<?php

namespace App\Concerns\OrganizationMember;

use App\Models\Organization;
use App\Models\User;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

trait InteractsWithRelations
{
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function organization(): BelongsTo
    {
        return $this->belongsTo(Organization::class);
    }
}

<?php

namespace App\Concerns\Organization;

use App\Models\User;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Database\Eloquent\Relations\HasOne;

trait InteractsWithRelations
{
    public function author(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'author_id');
    }

    public function admin(): HasOne
    {
        return $this->hasOne(User::class);
    }

    public function user(): HasOne
    {
        return $this->hasOne(User::class, 'organization_id', 'id');
    }

    public function members(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'organization_members', 'organization_id', 'user_id');
    }
}

<?php

namespace App\Concerns\User;

use App\Enums\UserType;

trait InteractsWithScopes
{
    public function scopeWhereUser($query): void
    {
        $query->where('type', UserType::USER);
    }

    public function scopeWhereSearch($query, $search): void
    {
        foreach (explode(' ', $search) as $term) {
            $query->where(function ($query) use ($term) {
               $query->where('first_name', 'LIKE', '%'.$term.'%')
                ->orWhere('last_name', 'LIKE', '%'.$term.'%')
                ->orWhere('email', 'LIKE', '%'.$term.'%');
            });
        }
    }

    public function scopeApplyFilters($query, array $filters): void
    {
        $filters = collect($filters);

        if ($filters->get('search')) {
            $query->whereSearch($filters->get('search'));
        }
    }
}

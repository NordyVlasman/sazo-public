<?php

namespace App\Concerns\Organization;

use App\Support\Carbon;

trait InteractsWithScopes
{
    public function scopeWhereSearch($query, $search): void
    {
        foreach (explode(' ', $search) as $term) {
            $query->where(function ($query) use ($term) {
                $query->where('name', 'LIKE', '%'.$term.'%');
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

    public function scopeHumanDate(): string
    {
        return Carbon::parse($this->created_at)->format('d-m-Y');
    }
}

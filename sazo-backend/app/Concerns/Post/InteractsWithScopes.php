<?php

namespace App\Concerns\Post;

trait InteractsWithScopes
{
    public function scopeWhereSearch($query, $search): void
    {
        foreach (explode(' ', $search) as $term) {
            $query->where(function ($query) use ($term) {
                $query->where('description_html', 'LIKE', '%'.$term.'%');
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

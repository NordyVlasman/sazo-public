<?php

namespace App\Actions\Organization;

use App\Models\Organization;
use App\Types\Action;
use Illuminate\Contracts\Pagination\Paginator;

class SearchAction extends Action
{
    protected static array $fields = [
        'tools.name',
        'tools.id',
    ];

    public static function execute(bool $exact, string $search, int $page): Paginator
    {
        return Organization::query()
            ->when($exact, fn ($query) => $query->where('name', $search))
            ->simplePaginate(10, static::$fields, 'page', $page)
            ->through(fn ($item) => static::format($item));
    }

    protected static function format(Organization $organization): array
    {
        return [
            'id'        => $organization->id,
            'name'      => $organization->name,
        ];
    }
}

<?php

namespace Database\Factories;

use App\DataObjects\PostObject;

final class PostFactory
{
    public static function make(array $attributes): PostObject
    {
        return new PostObject(
            author_id:          $attributes['author_id'],
            description:        $attributes['description'] ?? null,
            description_html:   $attributes['description_html'] ?? null,
            files:              $attributes['files'] ?? null,
            workarea:           $attributes['workarea'] ?? null,
            career:             $attributes['career'] ?? null
        );
    }
}

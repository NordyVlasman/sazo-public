<?php

namespace Database\Factories;

use App\DataObjects\CommentObject;
use App\DataObjects\PostObject;
use App\Models\Post;
use App\Models\User;
use Faker\Factory;

final class CommentFactory
{
    public static function make(array $attributes): CommentObject
    {
        return new CommentObject(
            user_id:    $attributes['user_id'],
            post_id:    $attributes['post_id'],
            body:       $attributes['body'],
            body_html:  $attributes['body_html'] ?? null,
        );
    }

    public static function makeTest(): CommentObject
    {
        $faker = Factory::create();

        return new CommentObject(
            user_id:    User::factory()->create()->id,
            post_id:    Post::factory()->create()->id,
            body:       $faker->text,
            body_html:  null,
        );
    }
}

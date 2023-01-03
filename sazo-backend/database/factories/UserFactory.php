<?php

namespace Database\Factories;

use App\DataObjects\UserObject;
use Faker\Factory;
use Faker\Generator;
use Illuminate\Foundation\Testing\WithFaker;

final class UserFactory
{
    public static function make(array $attributes): UserObject
    {
        return new UserObject(
            first_name:             $attributes['first_name'],
            last_name:              $attributes['last_name'],
            email:                  $attributes['email'],
            tagline:                $attributes['tagline'] ?? null,
            avatar_path:            $attributes['avatar_path'] ?? null,
            username:               $attributes['username'] ?? null,
            password:               $attributes['password'] ?? null,
            password_confirmation:  $attributes['password_confirmation'] ?? null,
        );
    }

    public static function makeTest(): UserObject
    {
        $faker = Factory::create();

        return new UserObject(
            first_name:             $faker->firstName(),
            last_name:              $faker->lastName(),
            email:                  $faker->email(),
            tagline:                $attributes['tagline'] ?? null,
            avatar_path:            $attributes['avatar_path'] ?? null,
            username:               $attributes['username'] ?? null,
            password:               $attributes['password'] ?? null,
            password_confirmation:  $attributes['password_confirmation'] ?? null,
        );
    }
}

<?php

namespace Database\Factories;


use App\DataObjects\OrganizationObject;
use Faker\Factory;

final class OrganizationFactory
{
    public static function make(array $attributes): OrganizationObject
    {
        return new OrganizationObject(
            name:               $attributes['name'],
            website_url:        $attributes['website_url'] ?? null,
            description:        $attributes['description'] ?? null,
            country:            $attributes['country'] ?? null,
            address_street_1:   $attributes['address_street_1'] ?? null,
            city:               $attributes['city'] ?? null,
            state:              $attributes['state'] ?? null,
            zip:                $attributes['zip'] ?? null,
            phone:              $attributes['phone'] ?? null,
            avatar_path:        $attributes['avatar_path'] ?? null,
        );
    }

    public static function makeTest(): OrganizationObject
    {
        $faker = Factory::create();

        return new OrganizationObject(
            name:               $faker->company,
            website_url:        $faker->url,
            description:        $faker->text,
            country:            $faker->country,
            address_street_1:   $faker->streetAddress,
            city:               $faker->city,
            state:              null,
            zip:                null,
            phone:              $faker->phoneNumber,
            avatar_path:        null
        );
    }
}

<?php

use App\Actions\User\CreateAction;
use Database\Factories\UserFactory;

it('creates a user when executing the action', function () {
    $object = UserFactory::make(
        attributes: [
            'first_name'    => 'John',
            'last_name'     => 'Doe',
            'email'         => 'joh.doe@example.com',
            'username'      => 'john_doe'
        ]
    );

    $user = app(CreateAction::class)->execute(object: $object);

    expect($user)->toBeInstanceOf(\App\Models\User::class);
});

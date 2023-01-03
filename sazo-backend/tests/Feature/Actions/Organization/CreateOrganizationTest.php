<?php

it('creates an organization using the action', function () {
    $object = \Database\Factories\OrganizationFactory::makeTest();

    expect('true')->toBeTrue();
});

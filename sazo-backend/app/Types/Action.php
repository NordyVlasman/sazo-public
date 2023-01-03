<?php

namespace App\Types;

use Illuminate\Support\Traits\Conditionable;

abstract class Action
{
    use Conditionable;

    public static function make(): static
    {
        return new static();
    }
}

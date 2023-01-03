<?php

namespace App\Enums;

enum UserType: int
{
    /**
     * The available options
     *
     */
    case ORGANIZATION = 1;
    case USER = 2;

    /**
     * Determine if the current instance is an organization
     *
     */
    public function isOrganization(): bool
    {
        return $this === UserType::ORGANIZATION;
    }

    /**
     * Determine if the current instance is a user
     */
    public function isUser(): bool
    {
        return $this === UserType::USER;
    }

    public function getType(): int
    {
        return match ($this) {
            UserType::USER => 2,
            UserType::ORGANIZATION => 1
        };
    }
}

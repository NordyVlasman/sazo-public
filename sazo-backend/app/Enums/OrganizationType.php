<?php

namespace App\Enums;

enum OrganizationType: int
{
    /**
     * The available options
     *
     */
    case DRAFT = 1;
    case PUBLISHED = 2;
    case ARCHIVED = 3;

    /**
     * Determine if the current instance is drafted
     * Note: A draft in this case is a request
     *
     */
    public function isDraft(): bool
    {
        return $this === OrganizationType::DRAFT;
    }

    /**
     * Determine if the current instance is published
     */
    public function isPublished(): bool
    {
        return $this === OrganizationType::PUBLISHED;
    }

    /**
     * Determine if the current instance is published
     */
    public function isArchived(): bool
    {
        return $this === OrganizationType::ARCHIVED;
    }
}

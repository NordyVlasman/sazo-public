<?php

declare(strict_types=1);

namespace App\DataObjects;

use JustSteveKing\DataObjects\Contracts\DataObjectContract;

readonly class OrganizationObject implements DataObjectContract
{
    public function __construct(
        public string $name,
        public null|string $website_url,
        public null|array $description,
        public null|string $country,
        public null|string $address_street_1,
        public null|string $city,
        public null|string $state,
        public null|string $zip,
        public null|string $phone,
        public null|string $avatar_path,
    ) {}

    public function toArray(): array
    {
        return [
            'name'              => $this->name,
            'website_url'       => $this->website_url,
            'description'       => $this->description,
            'country'           => $this->country,
            'address_street_1'  => $this->address_street_1,
            'city'              => $this->city,
            'state'             => $this->state,
            'zip'               => $this->zip,
            'phone'             => $this->phone,
            'avatar_path'       => $this->avatar_path,
        ];
    }
}

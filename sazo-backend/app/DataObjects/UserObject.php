<?php

declare(strict_types=1);

namespace App\DataObjects;

use JustSteveKing\DataObjects\Contracts\DataObjectContract;

readonly class UserObject implements DataObjectContract
{
    public function __construct(
        public string $first_name,
        public string $last_name,
        public string $email,
        public null|string $tagline,
        public null|string $avatar_path,
        public null|string $username,
        public null|string $password,
        public null|string $password_confirmation,
    ) {}

    public function toArray(): array
    {
        return [
            'first_name'            => $this->first_name,
            'last_name'             => $this->last_name,
            'email'                 => $this->email,
            'tagline'               => $this->tagline ?? null,
            'username'              => $this->username ?? null,
            'avatar_path'           => $this->avatar_path ?? null,
            'password'              => $this->password ?? null,
            'password_confirmation' => $this->password_confirmation ?? null,
        ];
    }
}

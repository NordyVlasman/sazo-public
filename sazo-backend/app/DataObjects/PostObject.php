<?php

namespace App\DataObjects;

use JustSteveKing\DataObjects\Contracts\DataObjectContract;

readonly class PostObject implements DataObjectContract
{
    public function __construct(
        public int $author_id,
        public string $description,
        public null|string $description_html,
        public ?array $files,
        public null|string $workarea,
        public null|string $career,
    ) {}

    public function toArray(): array
    {
        return [
            'author_id'         => $this->author_id,
            'description'       => $this->description,
            'description_html'  => $this->description_html,
            'files'             => $this->files ?: [],
            'workarea'          => $this->workarea,
            'career'            => $this->career,
        ];
    }
}

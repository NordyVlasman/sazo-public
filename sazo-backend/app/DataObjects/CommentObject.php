<?php

namespace App\DataObjects;

use JustSteveKing\DataObjects\Contracts\DataObjectContract;

readonly class CommentObject implements DataObjectContract
{
    public function __construct(
        public int $user_id,
        public int $post_id,
        public string $body,
        public string|null $body_html
    ) {}

    public function toArray(): array
    {
        return [
            'post_id'   => $this->post_id,
            'user_id'   => $this->user_id,
            'body'      => $this->body,
            'body_html' => $this->body_html
        ];
    }
}

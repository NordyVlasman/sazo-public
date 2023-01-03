<?php

namespace App\Actions\Tag;

use App\Models\Tag;

class CreateAction
{
    public function execute(array $data): Tag
    {
        return Tag::create([
            'name' => $data['name'],
        ]);
    }
}

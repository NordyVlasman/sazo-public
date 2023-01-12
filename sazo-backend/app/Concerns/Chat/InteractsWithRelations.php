<?php

namespace App\Concerns\Chat;

use App\Models\Message;
use App\Models\User;
use App\Services\Encryption\EncryptionService;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Collection;

trait InteractsWithRelations
{
    public function messages(): HasMany
    {
        return $this->hasMany(Message::class);
    }

    public function members(User $user): Collection
    {
        return $this->belongsToMany(User::class, 'chat_members', 'chat_id', 'user_id')->whereNot('user_id', $user->id)->get();
    }

    public function latestMessage()
    {
        $message = [
            $this
                ->messages()
                ->latest()
                ->first()
        ];

        $response = app(EncryptionService::class)
            ->decryptMessages(
                chatId: $this->id,
                messages: $message
            );

        return collect(json_decode($response))->first();
    }
}

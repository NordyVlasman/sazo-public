<?php

namespace App\Services\Encryption;

use Illuminate\Support\Facades\Http;

class EncryptionService
{
    private string $baseUrl;

    public function __construct()
    {
        $this->baseUrl = config('system.signing_url');
    }

    public function generatePublicKey(string $chatId): string
    {
        $response = Http::post($this->baseUrl . '/key', [
            'cid' => $chatId
        ]);

        if (! $response->successful()) {
            return "null";
        }

        return $response->body();
    }

    public function encryptMessage(string $publicKey, string $message): string
    {
        $response = Http::post($this->baseUrl . '/key/encrypt', [
            'pkey'          => $publicKey,
            'message'       => $message
        ]);

        if (! $response->successful()) {
            return $message;
        }

        return $response->body();
    }

    public function decryptMessages(string $chatId, array $messages): string
    {
        $response = Http::post($this->baseUrl . '/key/decrypt', [
            'cid'           => $chatId,
            'message'       => $messages
        ]);

        return $response->body();
    }
}

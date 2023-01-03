<?php

namespace App\Models;

use App\Concerns\Organization\InteractsWithRelations;
use App\Concerns\Organization\InteractsWithScopes;
use App\Enums\OrganizationType;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
    use InteractsWithRelations;
    use InteractsWithScopes;

    protected $fillable = [
        'name',
        'website_url',
        'author_id',
        'type',
        'settings',
        'logo_url',
        'description',
        'country',
        'address_street_1',
        'address_street_2',
        'city',
        'state',
        'zip',
        'phone'
    ];

    protected $casts = [
        'type'              => OrganizationType::class,
        'settings'          => 'array',
        'email_verified_at' => 'datetime',
    ];
}

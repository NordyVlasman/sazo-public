<?php

namespace App\Models;

use App\Concerns\OrganizationMember\InteractsWithRelations;
use Illuminate\Database\Eloquent\Model;

class OrganizationMember extends Model
{
    use InteractsWithRelations;

    protected $fillable = [
        'user_id',
        'organization_id',
    ];
}

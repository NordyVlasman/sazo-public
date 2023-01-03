<?php

namespace App\Models;

use App\Concerns\User\InteractsWithRelations;
use App\Concerns\User\InteractsWithScopes;
use App\Enums\UserType;
use App\Types\Model;
use Database\Factories\User\UserFactory;
use Illuminate\Auth\Authenticatable;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Notifications\RoutesNotifications;
use Laravel\Passport\HasApiTokens;
use Spatie\Permission\Traits\HasPermissions;
use Spatie\Permission\Traits\HasRoles;

class User extends Model implements AuthenticatableContract, AuthorizableContract, CanResetPasswordContract
{
    use Authorizable;
    use CanResetPassword;
    use Authenticatable;
    use HasApiTokens;
    use RoutesNotifications;
    use HasRoles;
    use HasPermissions;
    use InteractsWithRelations;
    use InteractsWithScopes;


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'avatar_url',
        'email',
        'password',
        'username',
        'tagline',
        'type',
        'organization_id'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'settings',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'type'              => UserType::class,
        'metrics'           => 'array',
        'settings'          => 'array',
        'email_verified_at' => 'datetime',
    ];

    public function getFullNameAttribute(): string
    {
        return $this->first_name . ' ' . $this->last_name;
    }
}

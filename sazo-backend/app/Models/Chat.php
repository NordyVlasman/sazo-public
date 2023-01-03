<?php

namespace App\Models;

use App\Concerns\Chat\InteractsWithRelations;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    use HasUuids;
    use InteractsWithRelations;

    protected $fillable = ['public_key'];
}

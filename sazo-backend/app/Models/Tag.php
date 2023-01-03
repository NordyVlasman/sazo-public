<?php

namespace App\Models;

use App\Concerns\Tag\InteractsWithRelations;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use InteractsWithRelations;

    protected $fillable = ['name'];
}

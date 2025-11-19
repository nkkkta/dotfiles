<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'name',
        'parent_id',
        'description',
    ];
}

public function parent(): BelongsTo{
    return $this->belongsTo(Category::class, 'parent_id');
}

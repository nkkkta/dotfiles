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


    public function parent(): BelongsTo{
        return $this->belongsTo(Category::class, 'parent_id');
    }

    public function chidlren(): HasMany{
        return $this->hasMany(Category::class, 'parent_id');
    }

        /**
     * A utility method to check if the category has a parent.
     *
     * @return bool
     */
    public function hasParent(): bool
    {
        return !is_null($this->parent_id);
    }

    /**
     * A utility method to check if the category has children.
     *
     * @return bool
     */
    public function hasChildren(): bool
    {
        return $this->children()->exists();
    }
}
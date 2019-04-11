<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use DB;
use App\Models\Post;

class Category extends Model
{
    protected $fillable = [
        'name', 
        'parent_id',
    ];

    public function posts()
    {
        return $this->belongsToMany(Post::class)->withTimestamps();
    }

    public function parents()
    {
        return $this->belongsTo(Category::class, 'child_parent_category', 'child_id', 'parent_id');
    }

    public function childrens()
    {
        return $this->belongsTo(Category::class, 'child_parent_category', 'parent_id', 'child_id');
    }
}

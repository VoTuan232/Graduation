<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use DB;
use App\Models\Post;
use App\Models\Category;

class Category extends Model
{
    protected $fillable = [
        'name_vn', 
        'name_en',
    ];

    public function posts()
    {
        return $this->belongsToMany(Post::class, 'category_post', 'category_id', 'post_id');
    }

    public function questions()
    {
        return $this->belongsToMany(QUestion::class, 'category_question', 'category_id', 'question_id');
    }

    public function parents()
    {
        return $this->belongsToMany(Category::class, 'child_parent_category', 'child_id', 'parent_id');
    }

    public function childrens()
    {
        return $this->belongsToMany(Category::class, 'child_parent_category', 'parent_id', 'child_id');
    }
}

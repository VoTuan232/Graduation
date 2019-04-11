<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    // public static $slug;
    
    protected $fillable = [
        'title',
        'slug',
        'body',
        'image',
        'view',
        'user_id',
    ];

    protected $with = ['comments']; 

    public function getRouteKeyName()
    {
        return 'slug'; // db column name
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'category_question', 'question_id', 'category_id');
    }

    public function comments()
    {
        return $this->morphMany('App\Models\Comment', 'commentable')->whereNull('parent_id')->orderBy('created_at', 'desc');
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Post;
use App\Models\Category;

class Post extends Model
{
    // public static $slug;
    
    protected $fillable = [
        'title',
        'slug',
        'body',
        'user_id',
        'image',
        'published',
        'request',
        'view',
        'trending',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'category_post', 'post_id', 'category_id');
    }

   
    public function comments()
    {
        return $this->morphMany('App\Models\Comment', 'commentable')->whereNull('parent_id')->orderBy('created_at', 'desc');
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function scopePublished($query)
    {
        return $query->where('published', true);
    }

    public function scopeUnpublished($query)
    {
        return $this->where('published', false);
    }

    public function storages()
    {
        return $this->hasMany(Storage::class, 'post_id');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Storage extends Model
{
	protected $fillable = [
        'post_id',
        'user_id',
        'like',
        'save',
    ];

    public $timestamps = false;

    public function post() {
    
        return $this->belongsTo(Post::class, 'post_id');
    }

    public function users()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}

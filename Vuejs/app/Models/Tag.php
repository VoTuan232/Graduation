<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $fillable = [
        'name',
        'slug',
    ];

    /**
	 * Get the route key for the model.
	 *
	 * @return string
	 */
	public function getRouteKeyName()
	{
	     return 'slug';
	}

    public function posts()
    {
    	return $this->belongsToMany(Post::class);
    }

    public function questions()
    {
        return $this->belongsToMany(Question::class);
    }
}

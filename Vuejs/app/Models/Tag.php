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
	// public function getRouteKeyName()
	// {
	//      return ['tag' => 'id', 'tag_slug' => 'slug'];
	// }

    public function posts()
    {
    	return $this->belongsToMany(Post::class);
    }
}

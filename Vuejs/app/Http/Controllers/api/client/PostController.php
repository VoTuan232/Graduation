<?php

namespace App\Http\Controllers\api\client;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Support\Facades\Hash;
use DB;

class PostController extends Controller
{
    public function getNewestPosts() {
    	return Post::orderBy('created_at', 'desc')->with('categories', 'user', 'tags')->paginate(2);
    }

    public function getSingle(Request $request, Post $post, $slug) {
        return Post::where('slug', $slug)->with('categories', 'user', 'tags', 'comments')->firstOrFail();
    }

    public function getUserBaseSlugPost(Request $request, $slug) {
    	$user = Post::where('slug', $slug)->first()->user()->firstOrFail();
    	
        return $user->with('posts')->firstOrFail();
    }
}

<?php

namespace App\Http\Controllers\api\client;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\User;
use App\Models\Tag;
use Illuminate\Support\Facades\Hash;
use DB;

class TagController extends Controller
{
	public function getSingle(Request $request, $slug) {
		return Tag::where('slug', $slug)->firstOrFail();
	}

    public function getPostsBaseTag(Request $request, Tag $tag) {
    	return $tag->posts()->orderBy('created_at', 'desc')->with('user', 'user.posts', 'user.followers', 'tags')->paginate(2);
    }
}

<?php

namespace App\Http\Controllers\api\client;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\User;
use App\Models\Question;
use Illuminate\Support\Facades\Hash;
use DB;

class QuestionController extends Controller
{
    public function getNewests() {
    	return Question::orderBy('created_at', 'desc')->with('categories', 'user', 'user.posts', 'user.followers', 'tags')->paginate(2);
    }

    public function getSingle(Request $request, $slug) {
        return Question::where('slug', $slug)->with('categories', 'user', 'user.posts', 'user.followers', 'user.questions', 'tags', 'comments')->firstOrFail();
    }

    public function getUserBaseSlugPost(Request $request, Post $post, $slug) {
    	$user = Post::where('slug', $slug)->first()->user()->firstOrFail();
    	
        return User::where('id', $user->id)->with('posts', 'followers')->firstOrFail();
    }
}

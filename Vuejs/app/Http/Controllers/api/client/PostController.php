<?php

namespace App\Http\Controllers\api\client;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\User;
use App\Models\Comment;
use Illuminate\Support\Facades\Hash;
use DB;
use App\Http\Requests\CommentRequest;

class PostController extends Controller
{
    public function getNewestPosts() {
        return Post::orderBy('created_at', 'desc')->where('published', true)->with('categories', 'user', 'user.posts', 'user.followers', 'tags')->paginate(5);
    }

    public function getTrending() {
    	return Post::orderBy('trending', 'desc')->whereNotNull('trending')->with('categories', 'user', 'user.posts', 'user.followers', 'tags')->paginate(5);
    }

    public function getSingle(Post $post) {
        return Post::where('id', $post->id)->with('categories', 'user', 'user.posts', 'user.followers', 'tags', 'comments')->firstOrFail();
    }

    // public function getUserBaseSlugPost(Request $request, Post $post, $slug) {
    // 	$user = Post::where('slug', $slug)->first()->user()->firstOrFail();
    	
    //     return User::where('id', $user->id)->with('posts', 'followers')->firstOrFail();
    // }

    public function getPostSideBar() {
        return Post::orderBy('created_at', 'desc')->with('categories', 'user', 'user.posts', 'user.followers', 'tags')->take(5)->get();
    }

    public function getComments(Post $post) {
        return $post->comments()->orderBy('id', 'desc')->with('user', 'replies')->get();
    }

    public function storeComment(CommentRequest $request, Post $post) {
        $comment = new Comment;
        $comment->body = $request->body;
        $comment->user()->associate($request->user_id);
        $comment->parent_id = $request->parent_id;

        $post->comments()->save($comment);

        return $comment;
    }
}

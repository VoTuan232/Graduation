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
use Event;
use Illuminate\Support\Facades\Redis;

class PostController extends Controller
{
    public function search(Request $request) {

        $response = \App\Models\Post::searchByQuery([
        'match' => [
            'title' => $request->get('search')
            ]
        ])->where('published', true);

        return $response;

        // return Post::orderBy('created_at', 'desc')->where('published', true)->with('categories', 'user', 'tags')->paginate(1);
    }

    // public function search() {
    //     if ($search = \Request::get('q')) {
    //         $users = User::where(function($query) use ($search){
    //             $query->where('name','LIKE',"%$search%")
    //                     ->orWhere('email','LIKE',"%$search%");
    //         })->paginate(2);
    //     }else{
    //         $users = User::latest()->paginate(5);
    //     }
    //     return $users;
    // }
    // 
    public function getNewestPosts() {
        // $post = Post::all();
        // $i = 0;
        // foreach($post as $post) {
        //     if ($i > 1000 && $i < 1500)  
        //         $post->update([
        //             'user_id' => 5,
        //         ]);
        //     else if ($i > 1500 && $i < 2000)
        //         $post->update([
        //             'user_id' => 6,
        //         ]);
        //     $i ++;
        // }
        return Post::orderBy('created_at', 'desc')->where('published', true)->with('categories', 'user', 'tags')->paginate(5);

        // return Post::orderBy('created_at', 'desc')->where('published', true)->with('categories', 'user', 'user.posts', 'user.followers', 'tags')->paginate(5);
    }

    public function getTrending() {
    	return Post::orderBy('trending', 'desc')->whereNotNull('trending')->with('categories', 'user', 'user.posts', 'user.followers', 'tags')->paginate(5);
    }

    public function getSingle(Post $post) {
        Event::fire('posts.view', $post);
        // return Post::where('id', $post->id)->with('categories', 'user', 'tags')->firstOrFail();
        // return Post::where('id', $post->id)->with('categories', 'user', 'tags', 'comments')->firstOrFail();
        return Post::where('id', $post->id)->with('categories', 'user', 'tags', 'comments')->firstOrFail();
        // return Post::where('id', $post->id)->with('categories', 'user', 'user.posts', 'user.followers', 'tags', 'comments')->firstOrFail();
    }

    // public function getUserBaseSlugPost(Request $request, Post $post, $slug) {
    // 	$user = Post::where('slug', $slug)->first()->user()->firstOrFail();
    	
    //     return User::where('id', $user->id)->with('posts', 'followers')->firstOrFail();
    // }

    public function getPostSideBar() {
        return Post::orderBy('created_at', 'desc')->with('categories', 'user', 'tags')->take(5)->get();
        // return Post::orderBy('created_at', 'desc')->with('categories', 'user', 'user.posts', 'user.followers', 'tags')->take(5)->get();
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

        $data = Comment::where('id', $comment->id)->orderBy('id', 'desc')->with('user', 'replies')->firstOrFail();
        $redis = Redis::connection();
        $redis->publish('message', json_encode([
            'data' => $data,
            'slug_post' => $post->slug,
        ]));

        return Comment::where('id', $comment->id)->with('user', 'replies')->firstOrFail();
    }
}

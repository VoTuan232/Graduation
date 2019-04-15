<?php

namespace App\Http\Controllers\api\client;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\User;
use App\Models\Question;
use App\Models\Comment;
use Illuminate\Support\Facades\Hash;
use DB;
use Redis;

class QuestionController extends Controller
{
    public function getNewests() {
    	return Question::orderBy('created_at', 'desc')->with('categories', 'user', 'tags')->paginate(5);
    }

    public function getQuestionSideBar() {
        return Question::orderBy('created_at', 'desc')->with('user', 'tags')->take(5)->get();
        // return Question::orderBy('created_at', 'desc')->with('categories', 'user', 'user.posts', 'user.followers', 'tags')->take(5)->get();
    }

    public function getSingle(Request $request, Question $question) {
        return Question::where('id', $question->id)->with('categories', 'user', 'user.posts', 'user.followers', 'user.questions', 'tags', 'comments')->firstOrFail();
    }

    // public function getUserBaseSlugPost(Request $request, Post $post, $slug) {
    // 	$user = Post::where('slug', $slug)->first()->user()->firstOrFail();
    	
    //     return User::where('id', $user->id)->with('posts', 'followers')->firstOrFail();
    // }

     public function getComments(Question $question) {
        return $question->comments()->orderBy('id', 'desc')->with('user', 'replies')->get();
    }

    public function storeComment(Request $request, Question $question) {
        $this->validate($request, [
            'body'         => 'required',
        ]);
        
        $comment = new Comment;
        $comment->body = $request->body;
        $comment->user()->associate($request->user_id);
        $comment->parent_id = $request->parent_id;

        $question->comments()->save($comment);

        $data = Comment::where('id', $comment->id)->orderBy('id', 'desc')->with('user', 'replies')->firstOrFail();
        $redis = Redis::connection();
        $redis->publish('commentQuestion', json_encode([
            'data' => $data,
            'slug' => $question->slug,
        ]));

        return $question;
    }
}

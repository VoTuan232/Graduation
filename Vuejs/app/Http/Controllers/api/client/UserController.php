<?php

namespace App\Http\Controllers\api\client;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\User;
use App\Models\Tag;
use App\Models\Question;
use App\Models\Notification;
use App\Models\Storage;
use Illuminate\Support\Facades\Hash;
use DB;
use Auth;

class UserController extends Controller
{
    public function checkSavePost(Request $request) {
        $post = Post::where('slug', $request->slug)->firstOrFail();

        $storages = Storage::where([
            'post_id' => $post->id,
            'user_id' => Auth::user()->id,
        ])->first();
        
        if ($storages != null) {
            return response([
                'checkSave' => $storages->save
            ]);
        }
        else {
            return response([
                'checkSave' => 0
            ]);
        }
        
    }

    public function savePost(Request $request) {
        $post = Post::where('slug', $request->slug)->firstOrFail();

        if(DB::table('storages')->where([
            'post_id' => $post->id,
            'user_id' => Auth::user()->id,
        ])->exists()) {
            DB::table('storages')->where([
                ['user_id', '=', Auth::user()->id],
                ['post_id', '=', $post->id],
                ])->update([
                    'save' => true, 
            ]);
        }

        else {
            DB::table('storages')->insert([
                'post_id' => $post->id,
                'user_id' => Auth::user()->id,
                'save' => true,
            ]);
        }
        return response()->json([
                'message' => 'Save post successfully',
                'class_name' => 'alert-success',
            ]); 
    }

    public function getStorages(Request $request) {
        $storages = Storage::where([
            'user_id' => Auth::user()->id,
            'save' => true,
        ])->get();

        $posts = $storages->load('post');

        return $posts;
    }

    public function getImageBaseUserId(User $user) {
        return response([
            'avatar' => $user->avatar,
        ]);
    } 

    public function getNameBaseUserId(User $user) {
        return response([
            'username' => $user->name,
            'email' => $user->email,
        ]);
    }

    public function getPostFollowing() {
        return Auth::user()->follows()->with('posts')->get();
    }

    public function getNotifications(User $user) {
        return $user->notifications;
    }

    public function markAllReadNotification(User $user) {
        Notification::where('receiver_id', $user->id)->update([
            'status_notification' => 1,
        ]);
    }

    public function getUserInfor(User $user) {
        $data = User::where('id', $user->id)->with('posts', 'followers', 'questions')->firstOrFail();
        return response([
            'countPosts' => count($data->posts),
            'countQuestionss' => count($data->questions),
            'countFollowers' => count($data->followers),
        ]);
    }

    public function checkFollow($email) {
        $email = $email.'@gmail.com';
        $user = User::where('email', $email)->firstOrFail();

        if (Auth::user()) {
            return response([ 
                'isFollowing' => Auth::user()->isFollowing($user->id),
                'isLogin' => true,
            ]);
        }
        return response([ 
                'isFollowing' => false,
                'isLogin' => false,
            ]);
        
    }

    public function removeFollow($email) {
        $email = $email.'@gmail.com';
        $user = User::where('email', $email)->firstOrFail();

        Auth::user()->unfollow($user->id);
        return response([ 
            'success' => true
        ]);
    }

    public function addFollow($email) {
        $email = $email.'@gmail.com';
        $user = User::where('email', $email)->firstOrFail();

        Auth::user()->follow($user->id);
        return response([ 
            'success' => true
        ]);
    }

    public function getUserInformation(User $user) {
        $data = User::where('id', $user->id)->with('followers', 'posts')->firstOrFail();

        return response([
            'name' => $data['name'],
            'avatar' => $data['avatar'],
            'posts' => count($data['posts']),
            'followers' => count($data['followers']),
        ]);
        // return User::where('id', $user->id)->with('followers', 'posts')->firstOrFail();
    }

    public function getSinge(Request $request, $email) {
        $email = $email.'@gmail.com';

        return User::where('email', $email)->with('posts', 'followers', 'follows', 'questions')->firstOrFail();
    }

    public function getPostsOfUser(Request $request, $email) {
        $email = $email.'@gmail.com';
        $user = User::where('email', $email)->firstOrFail();

        return Post::where([
            'user_id' => $user->id,
            'published' => true,
        ])->with('categories', 'tags')->paginate(5);
        /*auto has comment in post*/
    }

    public function getDraftsOfUser(Request $request, $email) {
    	$email = $email.'@gmail.com';
    	$user = User::where('email', $email)->firstOrFail();

    	return Post::where([
            'user_id' => $user->id,
            'published' => false,
        ])->with('categories', 'tags')->paginate(5);
    	/*auto has comment in post*/
    }

    public function getQuestionsOfUser(Request $request, $email) {
    	$email = $email.'@gmail.com';
    	$user = User::where('email', $email)->firstOrFail();

    	return Question::where('user_id', $user->id)->with('categories', 'tags')->paginate(5);
    }

    public function getUserFollow(Request $request, $email) {
        $email = $email.'@gmail.com';
        $user = User::where('email', $email)->firstOrFail();

        return $user->follows()->get();
    }

    public function getUserFollower(Request $request, $email) {
        $email = $email.'@gmail.com';
        $user = User::where('email', $email)->firstOrFail();

        return $user->followers()->get();
    }

    public function getAllUser() {
        return User::all();
    }
}
 
<?php

namespace App\Http\Controllers\api\client;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\User;
use App\Models\Tag;
use App\Models\Question;
use App\Models\Notification;
use Illuminate\Support\Facades\Hash;
use DB;
use Auth;

class UserController extends Controller
{
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

        return response([ 
            'isFollowing' => Auth::user()->isFollowing($user->id)
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
 
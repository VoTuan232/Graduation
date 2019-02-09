<?php

namespace App\Http\Controllers\api\client;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\User;
use App\Models\Tag;
use App\Models\Question;
use Illuminate\Support\Facades\Hash;
use DB;

class UserController extends Controller
{
    public function getSinge(Request $request, $email) {
        $email = $email.'@gmail.com';

        return User::where('email', $email)->with('posts', 'followers', 'questions')->firstOrFail();
    }

    public function getPostsOfUser(Request $request, $email) {
    	$email = $email.'@gmail.com';
    	$user = User::where('email', $email)->firstOrFail();

    	return Post::where('user_id', $user->id)->with('categories', 'tags')->paginate(2);
    	/*auto has comment in post*/
    }

    public function getQuestionsOfUser(Request $request, $email) {
    	$email = $email.'@gmail.com';
    	$user = User::where('email', $email)->firstOrFail();

    	return Question::where('user_id', $user->id)->with('categories', 'tags')->paginate(2);
    }
}
 
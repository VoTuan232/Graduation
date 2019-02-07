<?php

namespace App\Http\Controllers\api\client;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\User;
use App\Models\Tag;
use Illuminate\Support\Facades\Hash;
use DB;

class UserController extends Controller
{
    public function getSinge(Request $request, $email) {
        $email = $email.'@gmail.com';

        return User::where('email', $email)->firstOrFail();
    }

    public function getPostsOfUser(Request $request, $email) {
    	$email = $email.'@gmail.com';

    	return User::where('email', $email)->with('posts', 'followers', 'posts.categories', 'posts.tags')->firstOrFail();
    }
}
 
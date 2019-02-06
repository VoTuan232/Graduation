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
    public function getDataBaseSlugTag(Request $request, $slug) {
        return Tag::where('slug', $slug)->with('posts', 'posts.user', 'posts.tags')->firstOrFail();
    }
}

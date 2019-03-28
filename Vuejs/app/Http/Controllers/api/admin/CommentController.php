<?php

namespace App\Http\Controllers\api\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Comment;
use Illuminate\Support\Facades\Hash;
use DB;

class CommentController extends Controller
{
    public function index() {
    	return Comment::with('user', 'commentable')->paginate(5);
    }

    public function update(Request $request, Comment $comment) {
        $this->validate($request, [
            'body'         => 'required',
        ]);

        $comment->update($request->all());

        return $comment;
    }

    public function destroy(Comment $comment) {
        $comment->delete();
    }
}

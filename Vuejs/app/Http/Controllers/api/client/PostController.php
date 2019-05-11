<?php

namespace App\Http\Controllers\api\client;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\Storage;
use App\Models\User;
use App\Models\Comment;
use App\Models\Notification;
use Illuminate\Support\Facades\Hash;
use DB;
use App\Http\Requests\CommentRequest;
use Event;
use Illuminate\Support\Facades\Redis;
use Auth;
use Carbon\Carbon;

class PostController extends Controller
{
    public function getPostBaseId(Request $request) {
        $data = Post::where('id', $request->post_id)->with('user', 'tags', 'comments')->firstOrFail();

        return response()->json([
            'user_avatar' => $data->user->avatar,
            'user_email' => $data->user->email,
            'user_name' => $data->user->name,
            'created_at' => $data->created_at,
            'title' => $data->title,
            'tags' => $data->tags,
            'view' => $data->view,
            'slug' => $data->slug,
            'comment_length' => count($data->comments),
        ]);
    }

    public function makeTrending(Post $post) {
        $post->update([
            'trending' => Carbon::now(),
        ]);
        return response([
            'status' => 'true',
        ]);
    }

    public function countVote(Post $post) {
        return response([
            'vote' => $post->like
        ]);
    }

    public function upvote(Request $request, Post $post) {
        if ($request->checkDownvote == false) {
            $post->like +=1;
            $post->update();


            $storage = Storage::where([
                'post_id' => $post->id,
                'user_id' => Auth::user()->id
            ])->first();
            
            if ($storage != null) {
                $storage->update([
                    'post_id' => $post->id,
                    'user_id' => Auth::user()->id,
                    'like' => 1,
                ]);
            }
            else {
                Storage::create([
                    'post_id' => $post->id,
                    'user_id' => Auth::user()->id,
                    'like' => 1,
                ]);
            }
        }
        else if ($request->checkDownvote == true) {
            $post->like +=2;
            $post->update();

            $storage = Storage::where([
                'post_id' => $post->id,
                'user_id' => Auth::user()->id
            ])->first();
            
            if ($storage != null) {
                $storage->update([
                    'post_id' => $post->id,
                    'user_id' => Auth::user()->id,
                    'like' => 1,
                ]);
            }
            else {
                Storage::create([
                    'post_id' => $post->id,
                    'user_id' => Auth::user()->id,
                    'like' => 1,
                ]);
            }
        }
        return response([
            'vote' => $post->like
        ]);
    }

    public function RemoveUpvote(Post $post) {
            $post->like -=1;
            $post->update();

            $storage = Storage::where([
                'post_id' => $post->id,
                'user_id' => Auth::user()->id
            ])->first();

            if ($storage != null) {
                $storage->update([
                    'post_id' => $post->id,
                    'user_id' => Auth::user()->id,
                    'like' => 0,
                ]);
            }

            else {
                Storage::create([
                    'post_id' => $post->id,
                    'user_id' => Auth::user()->id,
                    'like' => 0,
                ]);
            }
          
        return response([
            'vote' => $post->like
        ]);
    }

    public function downvote(Request $request, Post $post) {
        if ($request->checkUpvote == false) {
            $post->like -=1;
            $post->update();

            $storage = Storage::where([
                'post_id' => $post->id,
                'user_id' => Auth::user()->id
            ])->first();

            if ($storage != null) {
                $storage->update([
                    'post_id' => $post->id,
                    'user_id' => Auth::user()->id,
                    'like' => -1,
                ]);
            }

            else {
                Storage::create([
                    'post_id' => $post->id,
                    'user_id' => Auth::user()->id,
                    'like' => -1,
                ]);
            }
        }
        else if ($request->checkUpvote == true) {
            $post->like -=2;
            $post->update();

            $storage = Storage::where([
                'post_id' => $post->id,
                'user_id' => Auth::user()->id
            ])->first();

            if ($storage != null) {
                $storage->update([
                    'post_id' => $post->id,
                    'user_id' => Auth::user()->id,
                    'like' => -1,
                ]);
            }

            else {
                Storage::create([
                    'post_id' => $post->id,
                    'user_id' => Auth::user()->id,
                    'like' => -1,
                ]);
            }
        }
        return response([
            'vote' => $post->like
        ]);
    }

    public function removeDownvote(Post $post) {
            $post->like +=1;
            $post->update();

            $storage = Storage::where([
                'post_id' => $post->id,
                'user_id' => Auth::user()->id
            ])->first();

            if ($storage != null) {
                $storage->update([
                    'post_id' => $post->id,
                    'user_id' => Auth::user()->id,
                    'like' => 0,
                ]);
            }

            else {
                Storage::create([
                    'post_id' => $post->id,
                    'user_id' => Auth::user()->id,
                    'like' => 0,
                ]);
            }
          
        return response([
            'vote' => $post->like
        ]);
    }

    public function checkVote(Post $post) {
        if (count($post->storages()->get()) > 0) {
            $data = $post->storages()->where('user_id', Auth::user()->id)->firstOrFail();
        }
        else {
            $data = null;
        }

        if ($data == null) {
            return response([
            // 'like'  => $post->storages()->get()
            'like'  => 0
            ]);
        }
        else {
            return response([
                // 'like'  => $post->storages()->get()
                'like'  => $data->like
            ]);
        }
    }

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
        return Post::orderBy('trending', 'desc')->whereNotNull('trending')->with('categories', 'user', 'tags')->paginate(5);
    	// return Post::orderBy('trending', 'desc')->whereNotNull('trending')->with('categories', 'user', 'user.posts', 'user.followers', 'tags')->paginate(5);
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
        return $post->comments()->orderBy('id', 'desc')->with('user', 'replies')->paginate(5);
        // return $post->comments()->orderBy('id', 'desc')->with('user', 'replies')->get();
    }

    public function storeComment(CommentRequest $request, Post $post) {
        $comment = new Comment;
        $comment->body = $request->body;
        $comment->user()->associate($request->user_id);
        $comment->parent_id = $request->parent_id;

        $post->comments()->save($comment);

        //create notification
        Notification::create([
            'sender_id' => $request->user_id,
            'receiver_id' => $post->user->id,
            'content' => Auth::user()->name.': đã bình luận bài viết của bạn',
            'url' => 'p/'.$post->slug,
            'status_notification' => false,
        ]);

        $data = Comment::where('id', $comment->id)->orderBy('id', 'desc')->with('user', 'replies')->firstOrFail();
        $redis = Redis::connection();
        $redis->publish('message', json_encode([
            'data' => $data,
            'slug_post' => $post->slug,
            'receiver_id' => $post->user->id,
        ]));

        return Comment::where('id', $comment->id)->with('user', 'replies')->firstOrFail();
    }
}

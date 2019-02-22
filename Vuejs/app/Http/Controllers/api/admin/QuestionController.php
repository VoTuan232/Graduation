<?php

namespace App\Http\Controllers\api\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\User;
use App\Models\Question;
use Illuminate\Support\Facades\Hash;
use DB;
use Auth;

class QuestionController extends Controller
{
    public function index() {
    	return Question::with('categories', 'user', 'tags')->paginate(2);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'title'       => 'required|max:255',
            'slug'        => 'required|alpha_dash|min:5|max:255|unique:questions',
            'body'         => 'required',
            // 'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        DB::beginTransaction();
        try {
            // $request->merge(['user_id' => auth('api')->user()->id]);

            $question = Question::create($request->all());


            if(count($request->categories) > 0) {
                $data_categories_sync = [];
                foreach ($request->categories as $key => $value) {
                    array_push($data_categories_sync, $value['id']);
                }
                $question->categories()->sync($data_categories_sync);
            }

            if(count($request->tags) > 0) {
                $data_tags_sync = [];
                foreach ($request->tags as $key => $value) {
                    array_push($data_tags_sync, $value['id']);
                }
                    $question->tags()->sync($data_tags_sync);
            }

            DB::commit();
        } 
        catch (\Exception $e) {
            DB::rollback();
        }

        return $question;
    }

    public function update(Request $request, Question $question) {
        $this->validate($request, [
            'title'       => 'required|max:255',
            'slug'        => 'required|alpha_dash|min:5|max:255|unique:posts,slug,'.$question->id,
            'body'         => 'required',
        ]);

        DB::beginTransaction();
        try {
            $question->update($request->all());

            if(count($request->categories) > 0) {
                $data_categories_sync = [];
                foreach ($request->categories as $key => $value) {
                    array_push($data_categories_sync, $value['id']);
                }
                $question->categories()->sync($data_categories_sync);
            }

            if(count($request->tags) > 0) {
                $data_tags_sync = [];
                foreach ($request->tags as $key => $value) {
                    array_push($data_tags_sync, $value['id']);
                }
                    $question->tags()->sync($data_tags_sync);
            }

            DB::commit();
        } 
        catch (\Exception $e) {
            DB::rollback();
        }
    }

    public function destroy(Question $question) {
        $question->categories()->detach();
        $question->tags()->detach();
        $question->delete();
    }
}

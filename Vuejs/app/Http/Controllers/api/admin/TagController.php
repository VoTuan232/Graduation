<?php

namespace App\Http\Controllers\api\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Tag;
use Illuminate\Support\Facades\Hash;

class TagController extends Controller
{
    public function index() {
    	return Tag::paginate(2);		
    }

    public function getAllTag() {
        return Tag::all();
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string|max:255|unique:tags',
        ]);
        $request->merge(['slug' => str_slug($request->name)]);

        $tag = Tag::create($request->all());

        return $tag;
    }

    public function update(Request $request, Tag $tag) {
    	$this->validate($request, [
            'name' => 'required|string|max:255|unique:tags,name,'.$tag->id,
        ]);
        $request->merge(['slug' => str_slug($request->name)]);

    	$tag->update($request->all());

    	return $tag;
    }

    public function destroy(Tag $tag) {
    	$tag->delete();
    }
}

<?php

namespace App\Http\Controllers\api\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Auth;

class UserController extends Controller
{
    public function __construct()
    {
        // $this->middleware('auth:api');
    }

    public function index() {
    	return User::with('roles')->paginate(2);
    }

    public function profile()
    {
        return Auth::user();
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:6'],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'bio' => $request->bio,
            'password' => Hash::make($request->password),
        ]);

        if(!is_null($request->roles)) {
            foreach ($request->roles as $key => $value) {
                $user->roles()->sync($value['id'], false);
            }
        }

        return $user;
    }

    public function update(Request $request, User $user)
    {
        $this->validate($request, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email,'.$user->id],
            'password' => ['sometimes', 'min:6'],
        ]);

        if(!empty($request->password)){
            $request->merge(['password' => Hash::make($request['password'])]);
        }

        $user->update($request->all());

        if(!is_null($request->roles)) {
            $user->roles()->detach();
            foreach ($request->roles as $key => $value) {
                $user->roles()->sync($value['id'], false);
            }
        }
    }

    public function destroy(User $user) {
        $user->delete();
    }
}

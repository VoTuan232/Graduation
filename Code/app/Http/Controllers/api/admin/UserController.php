<?php

namespace App\Http\Controllers\api\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index() {
    	return User::with('roles')->paginate(2);		
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
}

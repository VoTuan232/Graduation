<?php
namespace App\Http\Controllers\api\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Role;
use Illuminate\Support\Facades\Hash;
use DB;
use Auth;
use JWTAuth;

class UserController extends Controller
{
    public function __construct()
    {
        // $this->middleware('auth:api');
    }

    public function index() {
    	return User::with('roles')->paginate(5);
    }

    public function getUserPermission() {
        return Auth::user()->roles()->with('permissions')->get();
    }

    public function profile()
    {
        return Auth::user();
    }

    public function getUserCurrent() {
        return Auth::user();
    }

    public function getListFollow() {
        $user = Auth::user();

        return $user->follows()->paginate(2);
    }

    public function destroyUserFollow(User $user) {
        Auth::user()->follows()->detach($user);

        return ['messgae' => true];
    }

    public function getListFollower() {
        $user = Auth::user();

        return $user->followers()->paginate(2);
    }

    public function getListPost() {
        $user = Auth::user();

        return $user->posts()->with('user', 'categories', 'tags')->paginate(5);
    }

    public function countFollow() {
        $user = Auth::user();

        return $user->follows()->count(); 
    }

    public function countFollower() {
        $user = Auth::user();

        return $user->followers()->count(); 
    }

    public function countPost() {
        $user = Auth::user();

        return $user->posts()->count(); 
    }

    public function updateProfile(Request $request)
    {
        $user = Auth::user();

        $this->validate($request,[
            'name' => 'required|string|max:191',
            'email' => 'required|string|email|max:191|unique:users,email,'.$user->id,
            'password' => 'sometimes|required|min:6'
        ]);

        $currentPhoto = $user->avatar;

        
        if($request->avatar != $currentPhoto) {
            $name = time().'.' . explode('/', explode(':', substr($request->avatar, 0, strpos($request->avatar, ';')))[1])[1];
            \Image::make($request->avatar)->save(public_path('images/profile/').$name);
            $request->merge(['avatar' => $name]);
            $userPhoto = public_path('images/profile/').$currentPhoto;

            if(file_exists($userPhoto)){
                @unlink($userPhoto);
            }
        }
        if (!empty($request->password)) {
            $request->merge(['password' => Hash::make($request['password'])]);
        }
        $user->update($request->all());

        return ['message' => $request->all()];
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:6'],
        ]);

        DB::beginTransaction();
        try {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'bio' => $request->bio,
                'password' => Hash::make($request->password),
            ]);

            if(!is_null($request->roles)) {
                $data_sync = [];
                foreach ($request->roles as $key => $value) {
                    array_push($data_sync, $value['id']);
                }
                    $user->roles()->sync($data_sync);
            }
            DB::commit();
        }
        catch(\Exception $e) {
            DB::rollback();
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
        DB::beginTransaction();
        try {
            $user->update($request->all());

            if(!is_null($request->roles)) {
                $data_sync = [];
                foreach ($request->roles as $key => $value) {
                    array_push($data_sync, $value['id']);
                }
                $user->roles()->sync($data_sync);
            }
            DB::commit();
        }
        catch(\Exception $e) {
            DB::rollback();
        }
    }

    public function destroy(User $user) {
        $user->delete();
    }
}

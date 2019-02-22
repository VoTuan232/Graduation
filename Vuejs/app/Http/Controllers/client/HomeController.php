<?php

namespace App\Http\Controllers\client;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use App\Models\User;

class HomeController extends Controller
{
    public function index() {
    	// if(Auth::check()) {
    	// 	$userLogged = User::where('id', Auth::user()->id)->firstOrFail();
    	// }
    	// else {
    	// 	$userLogged = null;
    	// }

        return view('client.index');
    }
}

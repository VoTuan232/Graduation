<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('m/users', 'api\admin\UserController@index');
Route::post('m/user', 'api\admin\UserController@store');
Route::delete('m/user/{user}', 'api\admin\UserController@destroy');
Route::put('m/user/{user}', 'api\admin\UserController@update');

Route::get('m/roles', 'api\admin\RoleController@index');

Route::get('profile', 'api\admin\UserController@profile');

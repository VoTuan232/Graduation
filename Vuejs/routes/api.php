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
Route::get('m/users/getUserInfor', 'api\admin\UserController@getUserInfo');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'jwt.auth'], function(){
	Route::get('m/users', 'api\admin\UserController@index');
	Route::post('m/user', 'api\admin\UserController@store');
	Route::delete('m/user/{user}', 'api\admin\UserController@destroy');
	Route::put('m/user/{user}', 'api\admin\UserController@update');
	Route::get('user/current', 'api\admin\UserController@getUserCurrent');
	Route::get('user/follows', 'api\admin\UserController@getListFollow');
	Route::delete('user/follow/{user}', 'api\admin\UserController@destroyUserFollow');
	Route::get('user/followers', 'api\admin\UserController@getListFollower');
	Route::get('user/posts', 'api\admin\UserController@getListPost');
	Route::get('user/countFollow', 'api\admin\UserController@countFollow');
	Route::get('user/countFollower', 'api\admin\UserController@countFollower');
	Route::get('user/countPost', 'api\admin\UserController@countPost');
	Route::get('m/roles/all', 'api\admin\RoleController@getAllRole');

	Route::get('profile', 'api\admin\UserController@profile');
	Route::put('profile', 'api\admin\UserController@updateProfile');

	Route::get('m/tags', 'api\admin\TagController@index');
	Route::get('m/tags/all', 'api\admin\TagController@getAllTag');
	Route::post('m/tag', 'api\admin\TagController@store');
	Route::put('m/tag/{tag}', 'api\admin\TagController@update');
	Route::delete('m/tag/{tag}', 'api\admin\TagController@destroy');


	Route::get('m/categories', 'api\admin\CategoryController@index');
	Route::get('m/categories/all', 'api\admin\CategoryController@getAllCategory');
	Route::post('m/category', 'api\admin\CategoryController@store');
	Route::put('m/category/{category}', 'api\admin\CategoryController@update');
	Route::delete('m/category/{category}', 'api\admin\CategoryController@destroy');

	Route::get('m/roles', 'api\admin\RoleController@index');
	Route::post('m/role', 'api\admin\RoleController@store');
	Route::put('m/role/{role}', 'api\admin\RoleController@update');
	Route::delete('m/role/{role}', 'api\admin\RoleController@destroy');

	Route::get('m/posts', 'api\admin\PostController@index');
	Route::post('m/post', 'api\admin\PostController@store');
	Route::put('m/post/{post}', 'api\admin\PostController@update');
	Route::delete('m/post/{post}', 'api\admin\PostController@destroy');

	Route::get('m/questions', 'api\admin\QuestionController@index');
	Route::post('m/question', 'api\admin\QuestionController@store');
	Route::put('m/question/{question}', 'api\admin\QuestionController@update');
	Route::delete('m/question/{question}', 'api\admin\QuestionController@destroy');

	Route::get('m/comments', 'api\admin\CommentController@index');
	Route::post('m/comment', 'api\admin\CommentController@store');
	Route::put('m/comment/{comment}', 'api\admin\CommentController@update');
	Route::delete('m/comment/{comment}', 'api\admin\CommentController@destroy');
});


/* client */
Route::get('c/newestposts', 'api\client\PostController@getNewestPosts');
Route::get('p/{slug}', 'api\client\PostController@getSingle');
Route::get('user/p/{slug}', 'api\client\PostController@getUserBaseSlugPost');

Route::get('t/{tag}', 'api\client\TagController@getSingle');
Route::get('t/{tag}/posts', 'api\client\TagController@getPostsBaseTag');

Route::get('u/{email}', 'api\client\UserController@getSinge');
Route::get('u/{email}/posts', 'api\client\UserController@getPostsOfUser');
Route::get('u/{email}/questions', 'api\client\UserController@getQuestionsOfUser');

Route::get('q/slidebar', 'api\client\QuestionController@getQuestionSideBar');
Route::post('m/question', 'api\admin\QuestionController@store');
Route::get('q/{slug}', 'api\client\QuestionController@getSingle');
Route::get('c/newestquestions', 'api\client\QuestionController@getNewests');

/*auth*/
Route::post('auth/register', 'api\AuthController@register');
Route::post('auth/login', 'api\AuthController@login');
Route::group(['middleware' => 'jwt.auth'], function(){
  Route::get('auth/user', 'api\AuthController@user');
  Route::post('auth/logout', 'api\AuthController@logout');
});
Route::group(['middleware' => 'jwt.refresh'], function(){
 	Route::get('auth/refresh', 'api\AuthController@refresh');
});



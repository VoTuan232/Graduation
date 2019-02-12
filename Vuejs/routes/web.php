<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();
Route::get('logout','Auth\LoginController@logout');

Route::get('/', 'client\HomeController@index')->name('client.index');
Route::get('/p/{path}',"client\HomeController@index")->where( 'path', '([A-z\d-\/_.]+)?' );
Route::get('/t/{path}',"client\HomeController@index")->where( 'path', '([A-z\d-\/_.]+)?' );
Route::get('/u/{path}',"client\HomeController@index")->where( 'path', '([A-z\d-\/_.]+)?' );
Route::get('/q/{path}',"client\HomeController@index")->where( 'path', '([A-z\d-\/_.]+)?' );

Route::middleware(['auth'])->group(function () {
	Route::get('/publish/post',"client\HomeController@index");
	Route::get('/questions/ask', 'client\HomeController@index')->name('client.index');
});

Route::get('/questions', 'client\HomeController@index')->name('client.index');
Route::get('/discuss', 'client\HomeController@index')->name('client.index');

Route::middleware(['auth'])->group(function () {
	Route::get('/admin', 'admin\AdminController@index')->name('admin.index');
	
	Route::get('/m/users', 'admin\UserController@index')->name('admin.user.index');

	Route::get('/m/tags', 'admin\TagController@index')->name('admin.tag.index');

	Route::get('/m/categories', 'admin\CategoryController@index')->name('admin.categories.index');

	Route::get('/m/roles', 'admin\RoleController@index')->name('admin.roles.index');

	Route::get('/m/posts', 'admin\PostController@index')->name('admin.posts.index');

	Route::get('/m/comments', 'admin\CommentController@index')->name('admin.comments.index');

	Route::get('/profile', 'admin\ProfileController@index')->name('user.profile');
	Route::get('/profile/{path}',"admin\ProfileController@index")->where( 'path', '([A-z\d-\/_.]+)?' );
});


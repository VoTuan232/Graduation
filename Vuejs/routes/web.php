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

// Auth::routes();
// Route::get('logout','Auth\LoginController@logout');

Route::get('/clear-cache', function() {
    $exitCode = Artisan::call('config:clear');
    $exitCode = Artisan::call('cache:clear');
    $exitCode = Artisan::call('config:cache');
    return 'DONE'; //Return anything
});

Route::get('/', 'client\HomeController@index')->name('client.index');
Route::get('/login', 'client\HomeController@index')->name('client.index');
Route::get('/register', 'client\HomeController@index')->name('client.index');
Route::get('/p/{path}',"client\HomeController@index");
Route::get('/t/{path}',"client\HomeController@index");
Route::get('/u/{path}',"client\HomeController@index");
Route::get('/q/{path}',"client\HomeController@index");
// Route::get('/p/{path}',"client\HomeController@index")->where( 'path', '([A-z\d-\/_.]+)?' );
// Route::get('/t/{path}',"client\HomeController@index")->where( 'path', '([A-z\d-\/_.]+)?' );
// Route::get('/u/{path}',"client\HomeController@index")->where( 'path', '([A-z\d-\/_.]+)?' );
// Route::get('/q/{path}',"client\HomeController@index")->where( 'path', '([A-z\d-\/_.]+)?' );

// Route::middleware(['jwt.auth'])->group(function () {
	Route::get('/publish/post',"client\HomeController@index");
	Route::get('/question/ask', 'client\HomeController@index')->name('client.index');
// });

Route::get('/questions', 'client\HomeController@index');
Route::get('/discuss', 'client\HomeController@index');
Route::get('/trending', 'client\HomeController@index');
Route::get('/following', 'client\HomeController@index');
Route::get('/authors', 'client\HomeController@index');

// Route::middleware(['jwt.auth'])->group(function () {
	Route::get('/admin', 'admin\AdminController@index')->name('admin.index');
	
	Route::get('/m/users', 'admin\AdminController@index')->name('admin.user.index');

	Route::get('/m/tags', 'admin\AdminController@index')->name('admin.tag.index');

	Route::get('/m/categories', 'admin\AdminController@index')->name('admin.categories.index');

	Route::get('/m/roles', 'admin\AdminController@index')->name('admin.roles.index');

	Route::get('/m/posts', 'admin\AdminController@index')->name('admin.posts.index');

	Route::get('/m/questions', 'admin\AdminController@index')->name('admin.posts.index');

	Route::get('/m/comments', 'admin\AdminController@index')->name('admin.comments.index');

	Route::get('/profile', 'admin\AdminController@index')->name('user.profile');
	Route::get('/profile/{path}',"admin\AdminController@index");
	// Route::get('/profile/{path}',"admin\AdminController@index")->where( 'path', '([A-z\d-\/_.]+)?' );
// });

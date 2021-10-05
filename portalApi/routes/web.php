<?php

use App\Http\Controllers\SendController;
use Illuminate\Support\Facades\Route;

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

// Route::get('/{any}', [App\Http\Controllers\HomeController::class, 'index'])
// ->where('any', '^(?!api).*$');

Route::get('/send', [SendController::class, 'login'] );
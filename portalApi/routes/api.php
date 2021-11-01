<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\AuthController;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


// Route::post('login', [\App\Http\Controllers\Auth\LoginController::class, 'login']);


// Route::post('register', [\App\Http\Controllers\Auth\AuthController::class, 'CustomRegistration']);

Route::post('getauthlink', [AuthController::class, 'getAuthlink']);
// this route will be return massage to user if user not authenticated
Route::get('/notAuth', function() {
    return response()->json(['massage' => "not_authenticated"]);
})->name('notAuth');


Route::get('/auth/{id}/{authCode}', [AuthController::class, 'login']);

Route::middleware('auth:api')->get('/all', [UserController::class, 'test']);

Route::get('/users', [UserController::class, 'index']);




Route::middleware('auth:api')->group(function () {
    Route::post('/user/{id}/update-profile', [UserController::class, 'update']);
    Route::get('/test', function(){
        return "goooooooood";
    });
    Route::get('/logout', [AuthController::class, 'logout']);
});








// get('/check_auth', function(){
//     return response(['status' => true ,
// 'user' => Auth::user()
// ]);
// });

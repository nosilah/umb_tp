<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request){
        
       $login = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string'
       ]);

       if(!Auth::attempt($login)){
        return response(["massage" => "the email or passwrod invalid"]);
       }


    //    $user = User::find(1);
       $accessToken = Auth::user()->createToken('authToken')->accessToken;

       return response(["user" => Auth::user(), "access-token" => $accessToken]);
    }


}

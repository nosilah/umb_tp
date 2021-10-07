<?php

namespace App\Http\Controllers\Auth;


use App\Models\User;

use App\Models\AppUser;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RegisterRequest;

class AuthController extends Controller
{


    public function CustomRegistration()
    {
        //   $request->validate([
        //     'email' => 'required|email|unique:users',
        // ]);


        // $data = $request->all();

        // User::create([
            
        //     'email' => $data['email'],
        //     // 'password' => Str::random(10),
            
        // ]);

    //     $user = User::find(1)->created_at;

    //    $now = now()->diffInSeconds($user);


    /**
     * 
        $sec = Str::random(random_int(50, 150));
 
         $ne = Str::lower($sec);
         env('APP_URL')."/".$ne;
 
         env('APP_URL')."/?id=".$ne 
     *  */ 

     $user = User::find('5d907e98-c4bd-46b1-98e9-a7e0ff632984');


        
        return response( ["mass" => $user]);
    }

    // public function create(array $data)
    // {
    //     return User::create([
    //         'name' => $data['name'],
    //         'email' => $data['email'],
    //         'password' => $data['password']
    //     ]);
    // }

    // public function registration()
    // {

    //     return 'it ok';
    // }

}

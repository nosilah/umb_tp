<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Mail\SenderLink;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class LoginController extends Controller
{


    public function login(Request $request)
    {

        $data = $request->validate([
            'email' => 'required|email',
        ]);

        if (!Auth::attempt($data)) {

            User::create([
                'email' => $data['email'],
            ]);
        }

        $user = User::where('email', $data['email'])->get();
        $created_at =  $this->findPrepority($user, "created_at");
        $randomString = $this->findPrepority($user, "password");


        if ($this->checkTimeLink($created_at)) {
            $this->sendLinkToEmail($data['email'], $randomString);
            return response(["massage" => "check your email we are you are aleary register"]);
        }


        $randomString = $this->generateRandomString();
        $url = $this->sendLinkToEmail($data['email'], $randomString);

       



        return response(["massage" => "check you email", 'url' => $url]);
    }


    /**
     * to get prepority of  user collection 
     * @return prepority of user
     */

    public function findPrepority($colection, $prep)
    {

        foreach ($colection as $userpre) return $userpre["{$prep}"];
    }


    /**
     * send mail $randomString to $email  
     * @return void
     */

    public function sendLinkToEmail($email, $randomString)
    {

        $link = env('APP_URL')."/api/auth/". $randomString;

        Mail::to($email)->send(new SenderLink($link));

        return $link;
    }



    /**
     * check sentive/time 
     * @return bool
     */

    public function checkTimeLink($created_at)
    {


        if ((now()->diffInSeconds($created_at)) > env('SENTIVE_TIME')) {
            return false;
        }

        return true;
    }

    /**
     * generate random string 
     * @return string random min_length=50, max_length=150
     */

    public function generateRandomString(){

        return Str::random(random_int(50, 150));
    }
}

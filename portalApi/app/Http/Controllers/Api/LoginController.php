<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Mail\SenderLink;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\TemporaryLink;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Laravel\Passport\Bridge\AuthCode;

class LoginController extends Controller
{


    public function getAuthlink(Request $request)
    {

        $data = $request->validate([
            'email' => 'required|email',
        ]);

        if (!Auth::attempt($data)) {

            User::create([
                'email' => $data['email'],
            ]);
        }

        $temporary_link = new TemporaryLink();

        $user = User::where('email', $data['email'])->get();
        $id = $temporary_link->findPrepority($user, "id");
        $newlink = $temporary_link->firstOrCreate(['user_id' => $id]);

        $newlink->update(['temporary_secret_code' => $temporary_link->generateRandomString()]);

        $randomString = $newlink->temporary_secret_code;

        $link_id = $newlink->id;
        $url = $temporary_link->sendURLToEmail($data['email'], $link_id, $randomString);


        // $user = User::find($id);
        
        // $token = Auth::user()->createToken('authToken')->accessToken;

        return response()->json([
            "massage" => 'check_your_email'
        ]);
    }




    public function login($id, $authCode)
    {
        
        $logindata = TemporaryLink::find($id);

        if ($logindata->temporary_secret_code === $authCode) {
            if ($logindata->checkTimeLink($logindata->updated_at)) {

             $user = User::find($logindata->user_id);

                $token = $user->createToken('authToken')->accessToken;
                return response()->json([
                    'user' => User::find($logindata->user_id), 
                    'accessToken' => $token,
                    'auth_link' => ""
                ]);
            }
            
            return response()->json([
                'auth_link' => "is_overdue"
            ]);

        }

        return response()->json([
            'auth_link' => "is_falid"
        ]);
    }
}

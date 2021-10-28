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

class AuthController extends Controller
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
        $newlink->update(['status' => true]);

        $randomString = $newlink->temporary_secret_code;

        $link_id = $newlink->id;
        $url = $temporary_link->sendURLToEmail($data['email'], $link_id, $randomString);

        return response()->json([
            "massage" => 'check_your_email',
            "token" => $url,
        ]);
    }

/**
 * params id, authCode from temporary link
 * @return 
 * object: user and accessToken if temporary link have actually prarams 
 * massage: is_overdue if link is overdue
 * massage: is_falid if link is falid 
 * 
 */


    public function login($id, $authCode)
    {

        $logindata = TemporaryLink::find($id);

        if ($logindata->temporary_secret_code === $authCode) {
            if ($logindata->checkTimeLink($logindata->updated_at) && $logindata->status) {

                $user = User::find($logindata->user_id);

                $token = $user->createToken('authToken')->accessToken;

                $logindata->update(['status' => 0]);

                return response()->json([
                    'user' => User::find($logindata->user_id),
                    'accessToken' => $token,
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



    /**
     * 
     */
    // public function logout(){
    //     $user = Auth::user()->token();
    //     $user->revoke();

    //     return response()->json(["massage" => 
    //     "logged out"]);
    // }
}

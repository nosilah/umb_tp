<?php

namespace App\Http\Controllers;

use App\Mail\SenderLink;
use Illuminate\Support\Facades\Mail;

class SendController extends Controller
{
    public function login() {

        $url = 'https://laravel.su/docs/8.x/mail';
        Mail::to('alnosila.abd@gmail.com')->send(new SenderLink($url));

        return 'link for login';
    }



    public function sendLinkToEmail($email, $randomString){

        $link = env('APP_URL/'. $randomString);

        Mail::to($email)->send(new SenderLink($link));
    }
}

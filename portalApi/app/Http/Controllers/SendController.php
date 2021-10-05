<?php

namespace App\Http\Controllers;

use App\Mail\SenderLink;

use App\Mail\SendLoginLink;

use Illuminate\Support\Facades\Mail;

class SendController extends Controller
{
    public function login() {

        $url = 'https://laravel.su/docs/8.x/mail';
        Mail::to('alnosila.abd@gmail.com')->send(new SenderLink($url));

        return 'link for login';
    }
}

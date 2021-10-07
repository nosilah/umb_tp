<?php

namespace App\Models;

use App\Mail\SenderLink;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TemporaryLink extends Model
{
    use HasFactory;



    protected $fillable = [
        'user_id',
        'temporary_secret_code'
    ];


    // public function createTemLink($uuid){

    //     $logend_user = $this->where('users_uuid', $uuid);
    //     if( $logend_user)
    //     {$logend_user->update(['temporary_secret_code' => $this->generateRandomString()]);
    //     }

       

            

    //     static::create([
    //         'users_uuid' => $uuid,
    //         'temporary_secret_code' => $this->generateRandomString(),

    //     ]);



    // }


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

    public function sendURLToEmail($email, $id,  $randomString)
    {

        $link = env('APP_URL')."/api/auth/".$id."/". $randomString;

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

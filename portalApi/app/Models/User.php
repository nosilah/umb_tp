<?php

namespace App\Models;


use Illuminate\Support\Str;
use App\Models\Traits\HasSecret;
use App\Models\Traits\HasUuid;
use Laravel\Passport\HasApiTokens;  
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;


class User extends Authenticatable
{
    use  HasFactory, Notifiable, HasApiTokens, HasUuid;

    
    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */

    
   

    protected $fillable = [
        'email',
        'name'
    ];

    public function AauthAcessToken(){
        return $this->hasMany('\App\Models\OauthAccessToken');
    }
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    // protected $hidden = [
    //     'password',
    //     'remember_token',
    // ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    // protected $casts = [
    //     'email_verified_at' => 'datetime',
    // ];

    // public function generatPass(){
        
    // }

    // protected static function boot()
    // {
    //     static::bootTraits();
    //     static::create(['password' => Str::random(10)]);
    // }

    // public function getAuthPassword()
    // {
    //   return $this->password;
    // }
    

    protected $primaryKey = 'id';
    protected $keyType = 'string';
    // public $incrementing = false;

}

<?php

namespace App\Models\Traits;

use Illuminate\Support\Str;



trait HasSecret {

    protected static function bootHasSecret(){
       

        static::creating(function($model) {
            if(empty($model->{$model->getKeyName()}) ) {
                $model->{$model->getKeyName()} = Str::random(random_int(50, 100));
            }
        });

        // static::create(["password" => Str::random(10)]);
    }

}
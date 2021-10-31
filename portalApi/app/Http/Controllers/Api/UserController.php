<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return User::all('id', 'email');
    }


    public function test()
    {

        return User::find(Auth::user());
    }

    public function update(Request $request, $id)
    {

        $user = User::where('id', '=', $id)->first();

        $user->update($request->all());

        if($user->update($request->all()) && $user->wasChanged()){

            return response([
                "massage" => "was_changed",
                "data" => $request->all(),
                // "id" => $id,
                // "token" => Auth::user()->token()
            ]);
            
        }else{

            return response([
                "massage" => "not_changed"
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

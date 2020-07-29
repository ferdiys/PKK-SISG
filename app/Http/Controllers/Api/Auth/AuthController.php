<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\ApiController;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\User;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends ApiController
{

    use SendsPasswordResetEmails, ResetsPasswords {
        SendsPasswordResetEmails::broker insteadof ResetsPasswords;
        ResetsPasswords::credentials insteadof SendsPasswordResetEmails;
    }

    public function __construct()
    {
        $this->middleware('auth:api')->only(['changePassword', 'getUserLogin', 'refresh', 'logout']);
    }

    public function sendPasswordResetLink(Request $request)
    {
        return $this->sendResetLinkEmail($request);
    }

    protected function sendResetLinkResponse(Request $request, $response)
    {
        return response()->json([
            'message' => 'Password reset email sent.',
            'data' => $response
        ]);
    }

    protected function sendResetLinkFailedResponse(Request $request, $response)
    {
        return response()->json([
            'message' => 'Email could not be sent to this email address.'
        ]);
    }

    public function callResetPassword(Request $request)
    {
        return $this->reset($request);
    }

    public function resetPassword($user, $password)
    {
        $user->password = bcrypt($password);
        $user->save();
        event(new PasswordReset($user));
    }

    protected function sendResetResponse(Request $request, $response)
    {
        return response()->json([
            'message' => 'Password reset successfully'
        ]);
    }

    protected function sendResetFailedResponse(Request $request, $response)
    {
        return response()->json([
            'message' => 'Invalid token'
        ]);
    }

    public function login(LoginRequest $request)
    {
        if (!$token = Auth::attempt($request->all())) {
            return $this->responseUnauthorized();
        }
        return $this->responseWithToken($token);
    }

    public function register(RegisterRequest $request)
    {
        $user = $request->all();
        $user['password'] = bcrypt($user['password']);
        User::create($user);
        return $this->responseResourceCreated("User berhasil ditambahkan");
    }

    public function changePassword(RegisterRequest $request)
    {
        $user = Auth::user();
        $user->password = bcrypt($request->new_password);
        $user->save();
        return $this->responseSuccess("Password berhasil diubah");
    }

    public function refresh()
    {
        return $this->responseWithToken(Auth::refresh());
    }

    public function getUserLogin()
    {
        $data = Auth::user();
        return $this->responseWithData($data);
    }

    public function logout()
    {
        Auth::logout();
        return $this->responseSuccess('Logout Berhasil');
    }
}

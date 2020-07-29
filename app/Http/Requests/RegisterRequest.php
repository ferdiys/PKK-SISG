<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        switch ($this->method()) {
            case 'POST':
                return [
                    'name' => 'required|string|min:5',
                    'email' => 'required|email|unique:users,email',
                    'password' => 'required|string|min:8|confirmed',
                ];
                break;
            case 'PUT':
                return [
                    'old_password' => 'required|string|min:8|current_password',
                    'new_password' => 'required|string|min:8|confirmed|same_password',
                ];
                break;
            default:
                break;
        }
    }

    public function messages()
    {
        return [
            'old_password.current_password' => 'Password sekarang tidak sama dengan password yang telah anda berikan, tolong ulangi kembali',
            'new_password.same_password' => 'Password baru tidak bisa sama dengan password yang sekarang, tolong gunakan password yang berbeda',
        ];
    }
}

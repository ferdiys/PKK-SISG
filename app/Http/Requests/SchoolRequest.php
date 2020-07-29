<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SchoolRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        switch ($this->method()) {
            case 'POST':
                return [
                    'nama' => 'required|string',
                    'logo' => 'required|image',
                    'deskripsi' => 'required|string',
                    'alamat' => 'required|string',
                    'visi' => 'required|string',
                    'misi' => 'required|string',
                    'email' => 'required|email|unique:school,email',
                    'facebook' => 'required|url',
                    'youtube' => 'required|url',
                    'instagram' => 'required|url',
                    'phone' => 'required|numeric|digits_between:10,13',
                    'faximail' => 'required|numeric',
                    'tanggal_berdiri' => 'required|date',
                    'jml_guru' => 'required|numeric',
                    'jml_staf' => 'required|numeric',
                    'jml_murid' => 'required|numeric',
                ];
                break;
            case 'PUT':
                return [
                    'nama' => 'sometimes|required|string',
                    'logo' => 'sometimes|required|image',
                    'deskripsi' => 'sometimes|required|string',
                    'alamat' => 'sometimes|required|string',
                    'visi' => 'sometimes|required|string',
                    'misi' => 'sometimes|required|string',
                    'email' => 'sometimes|required|email',
                    'facebook' => 'sometimes|required|url',
                    'youtube' => 'sometimes|required|url',
                    'instagram' => 'sometimes|required|url',
                    'phone' => 'sometimes|required|numeric|digits_between:10,13',
                    'faximail' => 'sometimes|required|numeric',
                    'tanggal_berdiri' => 'sometimes|required|date',
                    'jml_guru' => 'sometimes|required|numeric',
                    'jml_staf' => 'sometimes|required|numeric',
                    'jml_murid' => 'sometimes|required|numeric',
                ];
                break;
            default:
                break;
        }
    }
}

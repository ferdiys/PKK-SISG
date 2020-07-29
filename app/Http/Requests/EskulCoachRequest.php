<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EskulCoachRequest extends FormRequest
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
                    'extracurricular_id' => 'required|numeric|exists:App\Extracurricular,id',
                    'nama' => 'required|string',
                    'gender' => 'required|string',
                    'dateBorn' => 'required|date',
                    'photo' => 'required|image',
                    'profile' => 'required|string'
                ];
                break;
            case 'PUT':
                return [
                    'extracurricular_id' => 'sometimes|required|numeric|exists:App\Extracurricular,id',
                    'nama' => 'sometimes|required|string',
                    'gender' => 'sometimes|required|string',
                    'dateBorn' => 'sometimes|required|date',
                    'photo' => 'sometimes|required|image',
                    'profile' => 'sometimes|required|string'
                ];
                break;
            default:
                break;
        }
    }
}

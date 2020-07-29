<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FacilityRequest extends FormRequest
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
                    'school_id' => 'required|numeric|exists:App\School,id',
                    'title' => 'required|string',
                    'image' => 'required|image',
                    'description' => 'required|string',
                    'dateFormed' => 'required|date'
                ];
                break;
            case 'PUT':
                return [
                    'school_id' => 'sometimes|required|numeric|exists:App\School,id',
                    'title' => 'sometimes|required|string',
                    'image' => 'sometimes|required|image',
                    'description' => 'sometimes|required|string',
                    'dateFormed' => 'sometimes|required|date'
                ];
                break;
            default:
                break;
        }
    }
}

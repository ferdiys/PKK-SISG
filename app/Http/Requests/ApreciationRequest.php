<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ApreciationRequest extends FormRequest
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
                    'name' => 'required|string',
                    'description' => 'required|string',
                    'dateRecieved' => 'required|date'
                ];
                break;
            case 'PUT':
                return [
                    'school_id' => 'sometimes|required|numeric|exists:App\School,id',
                    'name' => 'sometimes|required|string',
                    'description' => 'sometimes|required|string',
                    'dateRecieved' => 'sometimes|required|date'
                ];
                break;
            default:
                break;
        }
    }
}

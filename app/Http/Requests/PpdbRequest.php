<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PpdbRequest extends FormRequest
{
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
                    'tanggal_buka' => 'required|date',
                    'tanggal_tutup' => 'required|date',
                ];
                break;
            case 'PUT':
                return [
                    'school_id' => 'sometimes|required|numeric|exists:App\School,id',
                    'tanggal_buka' => 'sometimes|required|date',
                    'tanggal_tutup' => 'sometimes|required|date',
                ];
                break;
            default:
                break;
        }
    }
}

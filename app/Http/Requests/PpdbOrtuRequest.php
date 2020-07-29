<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PpdbOrtuRequest extends FormRequest
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
                    'ppdbuser_id' => 'required|numeric|exists:App\Ppdbuser,id',
                    'nama_ayah' => 'required|string',
                    'nama_ibu' => 'required|string',
                    'nama_wali' => 'string',
                    'ttl_ayah' => 'required|string',
                    'ttl_ibu' => 'required|string',
                    'ttl_wali' => 'string',
                    'pekerjaan_ayah' => 'required|string',
                    'pekerjaan_ibu' => 'required|string',
                    'pekerjaan_wali' => 'string',
                    'phone' => 'required|string',
                    'alamat' => 'required|string',
                ];
                break;
            case 'PUT':
                return [
                    'ppdbuser_id' => 'sometimes|required|numeric|exists:App\Ppdbuser,id',
                    'nama_ayah' => 'sometimes|required|string',
                    'nama_ibu' => 'sometimes|required|string',
                    'nama_wali' => 'sometimes|string',
                    'ttl_ayah' => 'sometimes|required|string',
                    'ttl_ibu' => 'sometimes|required|string',
                    'ttl_wali' => 'sometimes|string',
                    'pekerjaan_ayah' => 'sometimes|required|string',
                    'pekerjaan_ibu' => 'sometimes|required|string',
                    'pekerjaan_wali' => 'sometimes|string',
                    'phone' => 'sometimes|required|string',
                    'alamat' => 'sometimes|required|string',
                ];
                break;
            default:
                break;
        }
    }
}

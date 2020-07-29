<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PpdbUserRequest extends FormRequest
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
                    'ppdb_id' => 'required|numeric|exists:App\Ppdb,id',
                    'nama_lengkap' => 'required|string',
                    'nisn' => 'required|string',
                    'nem' => 'required|string',
                    'noijazah' => 'required|string',
                    'kelamin' => 'required|string',
                    'tempat_lahir' => 'required|string',
                    'tl' => 'required|string',
                    'asal_sekolah' => 'required|string',
                    'status' => 'sometimes|required|string',
                    'saudara_kandung' => 'sometimes|required|string',
                    'saudara_tiri' => 'sometimes|required|string',
                    'tinggal' => 'required|string',
                    'jarak' => 'required|string',
                    'transportasi' => 'required|string',
                    'lama_sd' => 'required|string',
                    'alamat' => 'required|string',
                    'foto' => 'required|image',
                    
                ];
                break;
            case 'PUT':
                return [
                    'ppdb_id' => 'sometimes|required|numeric|exists:App\Ppdb,id',
                    'nama_lengkap' => 'sometimes|required|string',
                    'nisn' => 'sometimes|required|string',
                    'nem' => 'sometimes|required|string',
                    'noijazah' => 'sometimes|required|string',
                    'kelamin' => 'sometimes|required|string',
                    'tempat_lahir' => 'sometimes|required|string',
                    'tl' => 'sometimes|required|string',
                    'asal_sekolah' => 'sometimes|required|string',
                    'status' => 'sometimes|required|string',
                    'saudara_kandung' => 'sometimes|required|string',
                    'saudara_tiri' => 'sometimes|required|string',
                    'tinggal' => 'sometimes|required|string',
                    'jarak' => 'sometimes|required|string',
                    'transportasi' => 'sometimes|required|string',
                    'lama_sd' => 'sometimes|required|string',
                    'alamat' => 'sometimes|required|string',
                    'foto' => 'sometimes|required|image',
                ];
                break;
            default:
                break;
        }
    }
}

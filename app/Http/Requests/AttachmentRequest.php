<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AttachmentRequest extends FormRequest
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
                    'parent_id' => 'required|numeric',
                    'attachment' => 'required|mimetypes:image/jpeg,image/bmp,image/svg+xml,image/png,video/x-msvideo,video/mpeg,video/mp4,video/quicktime',
                    'judul' => 'required|string',
                    'subjudul' => 'required|string',
                    'deskripsi' => 'required|string',
                    'category_id' => 'required|numeric|exists:App\Category,id',
                ];
                break;
            case 'PUT':
                return [
                    'parent_id' => 'sometimes|required|numeric',
                    'attachment' => 'sometimes|required|mimetypes:image/jpeg,image/bmp,image/svg+xml,image/png,video/x-msvideo,video/mpeg,video/mp4,video/quicktime',
                    'judul' => 'sometimes|required|string',
                    'subjudul' => 'sometimes|required|string',
                    'deskripsi' => 'sometimes|required|string',
                    'category_id' => 'sometimes|required|numeric|exists:App\Category,id',
                ];
                break;
            default:
                break;
        }
    }
}

<?php

namespace App\Http\Requests\Post;

use App\Types\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'description' => 'nullable|string',
            'description_html' => 'nullable|string',
            'files.*.file_type' => 'nullable',
            'files.*.file_path' => 'nullable',
            'files.*.preview_file_path' => 'nullable'
        ];
    }
}

<?php

namespace App\Http\Requests\Authentication;


use App\Types\FormRequest;

class LoginRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     */
    public function rules(): array
    {
        return [
            'email'    => 'bail|required|string|min:6|max:255|email',
            'password' => 'bail|required|string|max:255',
            'remember' => 'bail|sometimes|boolean',
        ];
    }
}

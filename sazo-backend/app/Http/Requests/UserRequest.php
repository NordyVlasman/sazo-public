<?php

namespace App\Http\Requests;

use App\DataObjects\UserObject;
use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'first_name'            => 'required|string',
            'last_name'             => 'required|string',
            'email'                 => 'email',
            'tagline'               => 'nullable|string',
            'password'              => 'nullable|string',
            'username'              => 'nullable|string',
            'password_confirmation' => 'nullable|string',
            'avatar_path'           => 'nullable',
        ];
    }

    public function toDto(): UserObject
    {
        return new UserObject(
            first_name:             $this->first_name,
            last_name:              $this->last_name,
            email:                  $this->email,
            tagline:                $this->tagline ?? null,
            avatar_path:            $this->avatar_path ?? null,
            username:               $this->username ?? null,
            password:               $this->password ?? null,
            password_confirmation:  $this->password_confirmtion ?? null,
        );
    }
}

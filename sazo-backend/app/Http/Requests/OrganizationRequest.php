<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrganizationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     */
    public function authorize(): bool
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
            'name'              => 'required|string',
            'website_url'       => 'nullable|string',
            'description'       => 'nullable|string',
            'country'           => 'nullable|string',
            'address_street_1'  => 'nullable|string',
            'city'              => 'nullable|string',
            'state'             => 'nullable|string',
            'zip'               => 'nullable|string',
            'phone'             => 'nullable|string',
            'avatar_path'       => 'nullable|string',
        ];
    }
}

<?php

namespace App\Http\Requests\Organization;


use App\Types\FormRequest;

class ApplyRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'name' => 'required',
            'email' => 'required',
            'website_url' => 'nullable',
            'country' => 'nullable|string',
            'address_street_1' => 'nullable|string',
            'address_street_2' => 'nullable|string',
            'city' => 'nullable|string',
            'state' => 'nullable|string',
            'zip' => 'nullable|string',
            'phone' => 'nullable|string',
            'description' => 'nullable'
        ];
    }
}

<?php

namespace App\Http\Requests;

use App\DataObjects\PostObject;
use App\Types\FormRequest;

class PostRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'description'               => 'nullable|string',
            'description_html'          => 'nullable|string',
            'files.*.file_type'         => 'nullable',
            'files.*.file_path'         => 'nullable',
            'files.*.preview_file_path' => 'nullable',
            'workarea'                  => 'nullable',
            'career'                    => 'nullable'
        ];
    }

    public function toDTO(int $authorId): PostObject
    {
        return new PostObject(
            author_id:          $authorId,
            description:        $this->description ?? null,
            description_html:   $this->description_html ?? null,
            files:              $this->get('files') ?: null,
            workarea:           $this->workarea ?? null,
            career:             $this->career ?? null
        );
    }
}

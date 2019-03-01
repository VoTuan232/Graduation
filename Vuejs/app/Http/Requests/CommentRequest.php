<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CommentRequest extends FormRequest
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

    public function rules()
    {
        return [
            'body' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'body.required'  => __('language.comment_body_required'),
        ];
    }
}

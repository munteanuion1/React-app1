<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactFormRequest extends FormRequest
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
        return [
         'name' => 'required',
         'email' => 'required|email',
         'subject' => 'required|min:5|max:20',
         'message' => 'required'
        ];
    }

    public function attributes(){
     return [
      'name' => 'your name'
     ];
    }

    public function messages(){
     return [
      'name.required' => 'Your name is obligatory',
      'email.email' => 'Your email is obligatory'
     ];
    }
}

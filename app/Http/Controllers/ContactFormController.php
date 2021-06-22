<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ContactFormRequest;
use App\Models\Contacts;

class ContactFormController extends Controller{
 public function submit(ContactFormRequest $req){
  //dd($req->input('message'));
  /*$validationForm = $req->validate([
   'subject' => 'required|min:5|max:20',
   'message' => 'required'
  ]);*/
  $contact = new Contacts();
  $contact->name = $req->input('name');   //$contact->name --- "->name" is name row from database
  $contact->email = $req->input('email');
  $contact->subject = $req->input('subject');
  $contact->message = $req->input('message');

  $contact->save();

  return redirect()->route('home')->with('success','Message send with success');
 }

 public function updateMessageSubmit($id,ContactFormRequest $req){// variabilele care se transmit trebuie sa se dea ca primul parametru
  $contact = Contacts::find($id);
  $contact->name = $req->input('name');   //$contact->name --- "->name" is name row from database
  $contact->email = $req->input('email');
  $contact->subject = $req->input('subject');
  $contact->message = $req->input('message');

  $contact->save();

  return redirect()->route('contact-data-one',$id)->with('success','Message update with success');
 }

 public function deleteMessage($id){
  Contacts::find($id)->delete();
  return redirect()->route('contact-allData')->with('success','Message delete with success');
 }
}

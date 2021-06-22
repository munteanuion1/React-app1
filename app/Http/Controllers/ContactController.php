<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contacts;

class ContactController extends Controller {
 public function __invoke(){
   return view('contact');
 }

 public function allData(){
  $contact = Contacts::get();//v1
  //$contact = Contacts::all();//v2
  /*
  function ->
  all()
  find(id) --- func who search row with id
  inRandomOrder()->first(number of row(data)) ---
  inRandomOrder()->get(return all row(data)) ---
  orderBy('id')->get() --- orderBy('id', 'desc')->get() ---desc or asc
  orderBy('id')->take(number row(data) to return)->get()
  skip(number to skip row(data))->get()
  where('id','=','2')->get()
  where('id','<>---equal---!=','2')->get()
  */
  return view('messages')->with('datas', $contact);
 }

 public function showOneMessage($id){  //name $id is from Route::... one or more variable
  $contact = Contacts::where('id','=',$id)->get();
  return view('one-message')->with('dat', $contact);
 }

 public function updateMessage($id){
  $contact = Contacts::where('id','=',$id)->get();
  return view('update-message',['data' => $contact]);
 }


}

@extends('Blocks.app')

@section('title-block')Contact @endsection

@section('content')
<div class="container">
  <h1>Contact</h1>
  @include('includ.messagesError')
  <form action="{{ route('contact-form') }}" method="post">
   @csrf
   <div class="form-group">
    <br>
    <label for="name">Name</label>
    <input type="text" id="name" name="name" placeholder="Enter your name" class="form-control">
    <br>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="Enter your email" class="form-control">
    <br>
    <label for="subject">Subject</label>
    <input type="text" id="subject" name="subject" placeholder="Enter subject" class="form-control">
    <br>
    <label for="message">Your message for to us</label>
    <textarea name="message" id="message" class="form-control" placeholder="Enter your message for to us"></textarea>
    <br>
    <button type="submit" class="btn btn-success">Send</button>
   </div>
  </form>
 </div>
@endsection

@extends('Blocks.app')

@section('title-block')Edit Message @endsection

@section('content')
 @foreach ($data as $data1)
  <?php $data = $data1 ?>
 @endforeach
<div class="container">
  <h1>Edit Message</h1>
  @include('includ.messagesError')
  <form action="{{ route('contact-update-submit', $data->id) }}" method="post">
   @csrf
   <div class="form-group">
    <br>

    <label for="name">Name</label>
    <input value="{{ $data->name }}" type="text" id="name" name="name" placeholder="Enter your name" class="form-control">
    <br>
    <label for="email">Email</label>
    <input value="{{ $data->email }}" type="email" id="email" name="email" placeholder="Enter your email" class="form-control">
    <br>
    <label for="subject">Subject</label>
    <input value="{{ $data->subject }}" type="text" id="subject" name="subject" placeholder="Enter subject" class="form-control">
    <br>
    <label for="message">Your message for to us</label>
    <textarea  name="message" id="message" class="form-control" placeholder="Enter your message for to us">{{ $data->message }}</textarea>
    <br>
    <button type="submit" class="btn btn-success">Update</button>

   </div>
  </form>
 </div>
@endsection

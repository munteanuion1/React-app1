@extends('Blocks.app')

@section('title-block')Message @endsection

@section('content')
<div class="container mt-5">
 @foreach ($dat as $data)
  <h1>{{ $data->subject }}</h1>
   <div class="alert alert-info">
    <p>{{ $data->name }}</p>
    <p>{{ $data->email }}</p>
    <p>{{ $data->message }}</p>
    <small>{{ $data->created_at }}</small>
    <a href="{{ route('contact-update',$data->id) }}"><button class="btn btn-primary float-end">Edit</button></a>
    <a href="{{ route('contact-delete',$data->id) }}"><button class="btn btn-danger float-end">Delete</button></a>
    </div>
 @endforeach


</div>
@endsection

@section('sideBar')
  @parent
  <p>Description</p>
@endsection

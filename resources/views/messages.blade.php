@extends('Blocks.app')

@section('title-block')All Messages @endsection

@section('content')
<div class="container mt-5">
  <h1>All Messages</h1>
  @foreach ($datas as $el)
   <div class="alert alert-info">
    <h3>{{ $el->subject }}</h3>
    <p>{{ $el->email }}</p>
    <p>{{ $el->name }}</p>
    <small>{{ $el->created_at }}</small>
    <a href="{{ route('contact-data-one',$el->id) }}"><button class="btn btn-warning float-end">Detail</button></a>
   </div>
  @endforeach
</div>
@endsection

@section('sideBar')
  @parent
  <p>Description</p>
@endsection

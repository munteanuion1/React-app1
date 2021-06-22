@extends('Blocks.app')

@section('title-block')Home @endsection

@section('content')
<div class="container mt-5">
  <h1>Home</h1>
   @include('includ.messagesError')
</div>
@endsection

@section('sideBar')
  @parent
  <p>Description</p>
@endsection

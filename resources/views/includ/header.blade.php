@section('header-block')
<header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <span class="fs-4">Industries</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="{{ route('home') }}" class="nav-link active" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="{{ route('about') }}" class="nav-link">About</a></li>
        <li class="nav-item"><a href="{{ route('contact') }}" class="nav-link">Contact</a></li>
        <li class="nav-item"><a href="{{ route('contact-allData') }}" class="nav-link">All Contact</a></li>
      </ul>
    </header>

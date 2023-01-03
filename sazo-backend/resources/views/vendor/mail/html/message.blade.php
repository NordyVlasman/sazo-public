@component('mail::layout')
{{-- Header --}}
@slot('header')
@component('mail::header')
@endcomponent
@endslot

{{-- Body --}}
<div class="content-cell-inner">
    {{ Illuminate\Mail\Markdown::parse($slot) }}
</div>

{{-- Subcopy --}}
@isset($subcopy)
@component('mail::subcopy')
{{ $subcopy }}
@endcomponent
@endisset

{{-- Footer --}}
@slot('footer')
@component('mail::footer')
    Designed and developed with passion for horses 🐴
@endcomponent
@endslot
@endcomponent

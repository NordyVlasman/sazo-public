@component('mail::message')
    @component('mail::title')
        # Nieuwe reactie
    @endcomponent

    Je volgende bericht

    > {{ $post }}

    Heeft een nieuwe reactie ontvangen van {{ $user }}:

    > {{ $value }}

@endcomponent

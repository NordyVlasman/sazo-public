@component('mail::message')
    @component('mail::title')
        # Nieuwe Organisatie aanvraag
    @endcomponent

    Er is een nieuw bedrijf die een aanvraag heeft verstuurd om lid te worden van Sazo: {{ $name }}
    Ga snel naar je dashboard om het goed te keuren
@endcomponent

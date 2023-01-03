@component('mail::message')
    @component('mail::title')
        # Organisatie aanvraag
    @endcomponent

    We hebben je aanvraag voor het toevoegen van {{ $name }} aan Sazo succesvol ontvangen.
    Je kan binnen een aantal werkdagen een nieuw mailtje verwachten met verdere instructies.

@endcomponent

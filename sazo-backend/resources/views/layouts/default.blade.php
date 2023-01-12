<!DOCTYPE html>
<html lang="en">
    <head>
        <livewire:styles/>
        <title>Sazo</title>

        @vite('resources/css/app.css')
    </head>

    <body class="min-h-screen bg-white">
        <div class="min-h-full">
            <!-- Navbar -->
            @include('layouts.partials.navbar')

            <!-- Page heading -->
            @yield('header')

            <main class="pt-8 pb-16">
                {{ $slot }}
            </main>
        </div>


        <livewire:scripts/>
    </body>
</html>

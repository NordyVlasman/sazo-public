<?php

namespace App\Providers;

use App\Macros\Builder;
use App\Macros\Notification;
use Illuminate\Support\ServiceProvider;

class MacroServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     */
    public function boot(): void
    {
        Builder::macros();
        Notification::macros();
    }
}

<?php

namespace App\Providers;

use App\Types\Model;
use Illuminate\Database\LazyLoadingViolationException;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Str;

class ModelServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        Model::preventLazyLoading(!app()->isProduction());

        Model::handleLazyLoadingViolationUsing(function ($model, $relation) {
            $this->handleLazyLoading($model, $relation);
        });
    }

    /**
     * Ensure that application models cannot be lazy-loaded.
     *
     */
    protected function handleLazyLoading(Model $model, string $relation) : void
    {
        if (app()->runningUnitTests()) {
            return;
        }

        $class = $model->$relation()->getRelated();

        if (Str::startsWith(get_class($class), 'App')) {
            throw new LazyLoadingViolationException($model, $relation);
        }
    }
}

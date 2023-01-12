<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('workareas', function (Blueprint $table) {
            $table->id();
            $table->string('value');
            $table->string('name');
            $table->timestamps();
        });

        Schema::create('careers', function (Blueprint $table) {
            $table->id();
            $table->string('value');
            $table->string('name');
            $table->timestamps();
        });

        Schema::table('posts', function (Blueprint $table) {
            $table->foreignId('career_id')->nullable();
            $table->foreignId('workarea_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('workareas');
        Schema::dropIfExists('careers');
    }
};

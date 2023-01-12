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
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('file_id')->nullable();
            $table->string('body');
            $table->string('body_html')->nullable();
            $table->string('url')->nullable();
            $table->timestamps();

            $table->foreignId('post_id')->constrained('posts')->onDelete('CASCADE');
            $table->foreignId('user_id')->constrained('users')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comments');
    }
};

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
        Schema::create('organization_members', function (Blueprint $table) {
            $table->id();
            $table->foreignId('organization_id')->nullable();
            $table->foreignId('user_id')->nullable();
            $table->timestamps();
        });

        Schema::create('post_files', function (Blueprint $table) {
            $table->id();
            $table->foreignId('post_id')->constrained('posts')->onDelete('CASCADE');
            $table->foreignId('file_id')->nullable();
            $table->timestamps();
        });

        Schema::create('post_tags', function (Blueprint $table) {
            $table->id();
            $table->foreignId('post_id')->constrained('posts')->onDelete('CASCADE');
            $table->foreignId('tag_id')->nullable()->constrained('tags')->onDelete('CASCADE');
            $table->timestamps();
        });

        Schema::create('post_bookmarks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('post_id')->nullable();
            $table->foreignId('user_id')->nullable();
            $table->timestamps();
        });

        Schema::create('chat_members', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('chat_id')->nullable();
            $table->foreignId('user_id')->unique();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('organization_members');
        Schema::dropIfExists('post_files');
    }
};

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
        Schema::create('posts', function (Blueprint $table) {
            $table->id();

            $table->text('description')->nullable();
            $table->text('description_html')->nullable();

            $table->integer('comments_count')->default(0);
            $table->integer('bookmarks_count')->default(0);

            $table->timestamps();

            $table->foreignId('author_id')->nullable()->constrained('users')->onDelete('SET NULL');
        });

        DB::statement('CREATE FULLTEXT INDEX posts_fulltext_index ON posts(description_html) WITH PARSER ngram');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};

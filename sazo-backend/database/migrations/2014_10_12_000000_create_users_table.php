<?php

use App\Enums\UserType;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->unsignedTinyInteger('type')->default(UserType::USER->value);

            $table->string('username')->nullable();
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('avatar_url')->nullable();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();

            $table->text('tagline')->nullable();

            $table->string('password')->nullable();

            $table->json('metrics')->default(DB::raw('(JSON_OBJECT())'));
            $table->json('settings')->default(DB::raw('(JSON_OBJECT())'));

            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};

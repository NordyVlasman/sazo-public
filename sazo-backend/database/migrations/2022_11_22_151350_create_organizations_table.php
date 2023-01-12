<?php

use App\Enums\OrganizationType;
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
        Schema::create('organizations', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('logo_url')->nullable();
            $table->text('description')->nullable();
            $table->string('website_url')->nullable();

            $table->string('country')->nullable();
            $table->string('address_street_1')->nullable();
            $table->string('address_street_2')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('zip')->nullable();
            $table->string('phone')->nullable();

            $table->timestamps();

            $table->unsignedTinyInteger('type')->default(OrganizationType::DRAFT->value);
            $table->json('settings')->default(DB::raw('(JSON_OBJECT())'));

            $table->foreignId('author_id')->nullable()->constrained('users')->onDelete('SET NULL');
        });

        Schema::table('users', function (Blueprint $table) {
            $table->foreignId('organization_id')->nullable()->constrained('organizations'   )->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('organizations');
    }
};

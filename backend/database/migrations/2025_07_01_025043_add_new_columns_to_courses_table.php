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
        Schema::table('courses', function (Blueprint $table) {
            $table->string('slug')->unique()->after('title');
            $table->enum('level', ['beginner', 'intermediate', 'advanced'])->default('beginner')->after('slug');
            $table->integer('duration')->default(0)->after('level');
            $table->decimal('price', 12, 2)->default(0)->after('duration');
            $table->text('requirements')->nullable()->after('description');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('courses', function (Blueprint $table) {
            $table->dropColumn('slug');
            $table->dropColumn('level');
            $table->dropColumn('duration');
            $table->dropColumn('price');
            $table->dropColumn('requirements');
        });
    }
};
